import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const PORT = 9223;
const HTTP_PORT = 8745;
const BASE_URL = `http://127.0.0.1:${HTTP_PORT}`;
const ROOT_DIR = 'C:/Users/Z Series/MainRB/Code Project/RB Learn';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml'
};

function createStaticServer() {
  const server = http.createServer((req, res) => {
    let reqPath = req.url.split('?')[0].split('#')[0];
    if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
    const filePath = path.join(ROOT_DIR, reqPath);
    if (!fs.existsSync(filePath)) {
      res.writeHead(404);
      return res.end('Not Found');
    }
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'text/plain' });
    fs.createReadStream(filePath).pipe(res);
  });
  return server;
}

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
  const server = createStaticServer();
  await new Promise(r => server.listen(HTTP_PORT, '127.0.0.1', r));

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

    // Test 1: Data integrity & Branding
    const lessonCount = await evaluate('return ALL.length;');
    const quizCount = await evaluate('return QUIZ_BANK.length;');
    const trackCount = await evaluate('return TRACKS.length;');
    const brandText = await evaluate('return document.querySelector(".brand-text").textContent;');
    console.log(`[PASS] Data integrity: ${lessonCount} lessons, ${quizCount} quiz questions, ${trackCount} tracks, Brand: "${brandText}"`);
    if (lessonCount !== 66 || quizCount !== 91 || trackCount !== 6 || !brandText.includes('RB Learning')) throw new Error('Invalid count or brand');

    // Test 2: Search functionality with "Supriyanto"
    await evaluate(`
      const input = document.querySelector('#searchInput');
      input.value = 'supriyanto';
      input.dispatchEvent(new Event('input'));
    `);
    await sleep(200);
    const visibleItems = await evaluate(`
      return Array.from(document.querySelectorAll('#sideNav .side-item[data-id]')).map(el => el.textContent.trim());
    `);
    console.log('[PASS] Search results for "supriyanto":', visibleItems.length, 'lessons found');
    if (visibleItems.length === 0) throw new Error('Search failed for Supriyanto');

    // Test 3: Collapsible group for Flutter track
    await evaluate(`
      const input = document.querySelector('#searchInput');
      input.value = '';
      input.dispatchEvent(new Event('input'));
    `);
    await sleep(200);
    const flGroupBefore = await evaluate(`return document.querySelector('.side-group[data-track="flutter"]').classList.contains('collapsed');`);
    await evaluate(`toggleGroup('flutter');`);
    const flGroupAfter = await evaluate(`return document.querySelector('.side-group[data-track="flutter"]').classList.contains('collapsed');`);
    const storedCollapsed = await evaluate(`return localStorage.getItem('rblearn:collapsed');`);
    console.log(`[PASS] Collapsible Flutter group: before=${flGroupBefore}, after=${flGroupAfter}, stored=${storedCollapsed}`);
    if (flGroupAfter === flGroupBefore) throw new Error('Toggle Flutter group failed');

    // Re-open Flutter group
    await evaluate(`toggleGroup('flutter');`);

    // Test 4: React Native Lesson navigation (rn-01: Pengenalan React Native & Expo)
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/m/rn-01' });
    await sleep(400);
    const title = await evaluate(`return document.querySelector('.lesson-title').textContent;`);
    const hasRNContent = await evaluate(`return document.querySelector('.lesson-body').textContent.includes('Expo');`);
    console.log(`[PASS] Lesson navigation to rn-01: "${title}", hasRNContent=${hasRNContent}`);
    if (!hasRNContent) throw new Error('RN content missing in rn-01');

    // Mark done on RN lesson
    await evaluate(`document.querySelector('#btnDone').click();`);
    await sleep(200);
    const isDoneStored = await evaluate(`return JSON.parse(localStorage.getItem('rblearn:progress')).includes('rn-01');`);
    const pctText = await evaluate(`return document.querySelector('#spPct').textContent;`);
    console.log(`[PASS] Progress marked for rn-01: inStorage=${isDoneStored}, UI pct=${pctText}`);
    if (!isDoneStored) throw new Error('Progress saving failed');

    // Test 5: Playground execution with Supriyanto
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/playground' });
    await sleep(400);
    await evaluate(`
      document.querySelector('#pgCode').value = 'const nama = "Supriyanto"; console.log("Halo, " + nama);';
      runPlayground();
    `);
    const pgOutput = await evaluate(`return document.querySelector('#pgOut').textContent;`);
    console.log(`[PASS] Playground execution output: "${pgOutput.trim()}"`);
    if (!pgOutput.includes('Halo, Supriyanto')) throw new Error('Playground execution failed');

    // Test 6: Quiz workflow with Flutter filter
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/quiz' });
    await sleep(400);
    await evaluate(`startQuiz('flutter');`);
    await sleep(200);
    const quizQuestion = await evaluate(`return document.querySelector('.quiz-q').textContent;`);
    const optsCount = await evaluate(`return document.querySelectorAll('.quiz-opt').length;`);
    console.log(`[PASS] Flutter Quiz started: "${quizQuestion.slice(0, 45)}...", ${optsCount} options`);
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
    const themeStored = await evaluate(`return localStorage.getItem('rblearn:theme');`);
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
    server.close();
    chrome.kill();
  }
}

runTests();
