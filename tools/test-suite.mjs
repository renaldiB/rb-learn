import { spawn } from 'child_process';
import http from 'http';
import path from 'path';

const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const PORT = 9223;
const BASE_URL = 'http://127.0.0.1:8741';

async function cdpSession(wsUrl) {
  const ws = new globalThis.WebSocket(wsUrl);
  await new Promise((res, rej) => {
    ws.onopen = res;
    ws.onerror = rej;
  });

  let id = 1;
  const callbacks = new Map();
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.id && callbacks.has(data.id)) {
      const { resolve, reject } = callbacks.get(data.id);
      callbacks.delete(data.id);
      if (data.error) reject(data.error);
      else resolve(data.result);
    }
  };

  return {
    send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const reqId = id++;
        callbacks.set(reqId, { resolve, reject });
        ws.send(JSON.stringify({ id: reqId, method, params }));
      });
    },
    close() {
      ws.close();
    }
  };
}

function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function runTests() {
  console.log('--- Starting Integration Test Suite ---');
  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=' + PORT,
    '--no-first-run',
    '--no-default-browser-check'
  ]);

  await sleep(1500);

  try {
    const targets = await getJson('http://127.0.0.1:' + PORT + '/json');
    const pageTarget = targets.find(t => t.type === 'page') || targets[0];
    const cdp = await cdpSession(pageTarget.webSocketDebuggerUrl);
    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');

    async function evaluate(expr) {
      const res = await cdp.send('Runtime.evaluate', { expression: `(() => { ${expr} })()`, returnByValue: true });
      if (res.exceptionDetails) {
        throw new Error(res.exceptionDetails.exception.description);
      }
      return res.result ? res.result.value : undefined;
    }

    // Load page
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/' });
    await sleep(600);

    // Test 1: Data integrity
    const lessonCount = await evaluate('return ALL.length;');
    const quizCount = await evaluate('return QUIZ_BANK.length;');
    console.log(`[PASS] Data integrity: ${lessonCount} lessons, ${quizCount} quiz questions`);
    if (lessonCount !== 22 || quizCount !== 47) throw new Error('Invalid count');

    // Test 2: Search functionality
    await evaluate(`
      const input = document.querySelector('#searchInput');
      input.value = 'array';
      input.dispatchEvent(new Event('input'));
    `);
    await sleep(200);
    const visibleItems = await evaluate(`
      return Array.from(document.querySelectorAll('#sideNav .side-item[data-id]')).map(el => el.textContent.trim());
    `);
    console.log('[PASS] Search results for "array":', visibleItems.length, 'lessons found');
    if (visibleItems.length === 0) throw new Error('Search failed');

    // Test 3: Clear search & Collapsible groups
    await evaluate(`
      const input = document.querySelector('#searchInput');
      input.value = '';
      input.dispatchEvent(new Event('input'));
    `);
    await sleep(200);
    const jsGroupBefore = await evaluate(`return document.querySelector('.side-group[data-track="js"]').classList.contains('collapsed');`);
    await evaluate(`toggleGroup('js');`);
    const jsGroupAfter = await evaluate(`return document.querySelector('.side-group[data-track="js"]').classList.contains('collapsed');`);
    const storedCollapsed = await evaluate(`return localStorage.getItem('kelaskode:collapsed');`);
    console.log(`[PASS] Collapsible group: before=${jsGroupBefore}, after=${jsGroupAfter}, stored=${storedCollapsed}`);
    if (jsGroupAfter === jsGroupBefore) throw new Error('Toggle group failed');

    // Re-open JS group
    await evaluate(`toggleGroup('js');`);

    // Test 4: Lesson navigation & Progress marking
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/m/js-array' });
    await sleep(400);
    const title = await evaluate(`return document.querySelector('.lesson-title').textContent;`);
    console.log(`[PASS] Lesson navigation to js-array: "${title}"`);

    // Mark done
    await evaluate(`document.querySelector('#btnDone').click();`);
    await sleep(200);
    const isDoneStored = await evaluate(`return JSON.parse(localStorage.getItem('kelaskode:progress')).includes('js-array');`);
    const pctText = await evaluate(`return document.querySelector('#spPct').textContent;`);
    console.log(`[PASS] Progress marked: inStorage=${isDoneStored}, UI pct=${pctText}`);
    if (!isDoneStored) throw new Error('Progress saving failed');

    // Test 5: Playground execution
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/playground' });
    await sleep(400);
    await evaluate(`
      document.querySelector('#pgCode').value = 'console.log("TEST_OK", 123 + 456);';
      runPlayground();
    `);
    const pgOutput = await evaluate(`return document.querySelector('#pgOut').textContent;`);
    console.log(`[PASS] Playground execution output: "${pgOutput.trim()}"`);
    if (!pgOutput.includes('TEST_OK 579')) throw new Error('Playground execution failed');

    // Test 6: Quiz workflow
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/quiz' });
    await sleep(400);
    await evaluate(`startQuiz('pw');`);
    await sleep(200);
    const quizQuestion = await evaluate(`return document.querySelector('.quiz-q').textContent;`);
    const optsCount = await evaluate(`return document.querySelectorAll('.quiz-opt').length;`);
    console.log(`[PASS] Quiz started: "${quizQuestion.slice(0, 40)}...", ${optsCount} options`);
    if (optsCount < 2) throw new Error('Quiz options missing');

    // Answer first question
    await evaluate(`document.querySelector('.quiz-opt[data-i="0"]').click();`);
    await sleep(200);
    const whyVisible = await evaluate(`return document.querySelector('#quizWhy').classList.contains('show');`);
    const nextEnabled = await evaluate(`return !document.querySelector('#quizNext').disabled;`);
    console.log(`[PASS] Quiz answer feedback: whyShown=${whyVisible}, nextEnabled=${nextEnabled}`);
    if (!whyVisible || !nextEnabled) throw new Error('Quiz answer state failed');

    // Test 7: Theme toggle
    const themeBefore = await evaluate(`return document.documentElement.dataset.theme;`);
    await evaluate(`document.querySelector('#themeBtn').click();`);
    const themeAfter = await evaluate(`return document.documentElement.dataset.theme;`);
    const themeStored = await evaluate(`return localStorage.getItem('kelaskode:theme');`);
    console.log(`[PASS] Theme toggle: before=${themeBefore}, after=${themeAfter}, stored=${themeStored}`);
    if (themeBefore === themeAfter || themeAfter !== themeStored) throw new Error('Theme toggle failed');

    // Reset theme back to light
    await evaluate(`applyTheme('light');`);

    // Clean up test data
    await evaluate(`localStorage.clear();`);

    console.log('--- ALL 7 AUTOMATED INTEGRATION TESTS PASSED ---');
    cdp.close();
  } catch (err) {
    console.error('[FAIL] Test failed:', err);
    process.exit(1);
  } finally {
    chrome.kill();
  }
}

runTests();
