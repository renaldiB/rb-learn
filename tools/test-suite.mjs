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

    // Test 1: Data integrity & Branding & Track Ordering
    const lessonCount = await evaluate('return ALL.length;');
    const quizCount = await evaluate('return QUIZ_BANK.length;');
    const trackCount = await evaluate('return TRACKS.length;');
    const brandText = await evaluate('return document.querySelector(".brand-text").textContent;');
    const itTrackOrder = await evaluate('return TRACKS.filter(t => t.category === "it" || !t.category).map(t => t.id);');
    console.log(`[PASS] Data integrity: ${lessonCount} lessons, ${quizCount} quiz questions, ${trackCount} tracks, Brand: "${brandText}"`);
    console.log(`[PASS] IT Track Alphabetical Order:`, itTrackOrder);
    if (lessonCount !== 82 || quizCount !== 107 || trackCount !== 7 || !brandText.includes('RB Learning')) throw new Error('Invalid count or brand');
    const expectedOrder = ['flutter', 'js', 'mojo', 'pw', 'py', 'rn'];
    if (JSON.stringify(itTrackOrder) !== JSON.stringify(expectedOrder)) throw new Error(`Wrong IT track order: ${JSON.stringify(itTrackOrder)}`);

    // Test 2: Category Headers & Catalog Filtering
    const sideCatCount = await evaluate('return document.querySelectorAll(".side-category").length;');
    console.log(`[PASS] Sidebar category headers rendered: ${sideCatCount}`);
    if (sideCatCount < 3) throw new Error('Sidebar category headers missing');

    await evaluate(`document.querySelector('#catalogTabs .cat-tab[data-cat="lang"]').click();`);
    await sleep(200);
    const visibleLangCards = await evaluate(`return Array.from(document.querySelectorAll('#trackCardsGrid .track-card')).filter(el => el.style.display !== 'none').length;`);
    console.log(`[PASS] Catalog filtered by "lang": ${visibleLangCards} card visible`);
    if (visibleLangCards !== 1) throw new Error('Catalog filter by lang failed');

    await evaluate(`document.querySelector('#catalogTabs .cat-tab[data-cat="all"]').click();`);
    await sleep(200);

    // Test 3: Search functionality with "Supriyanto"
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

    // Test 4: Collapsible group for Mandarin track
    await evaluate(`
      const input = document.querySelector('#searchInput');
      input.value = '';
      input.dispatchEvent(new Event('input'));
    `);
    await sleep(200);
    const zhGroupBefore = await evaluate(`return document.querySelector('.side-group[data-track="mandarin"]').classList.contains('collapsed');`);
    await evaluate(`toggleGroup('mandarin');`);
    const zhGroupAfter = await evaluate(`return document.querySelector('.side-group[data-track="mandarin"]').classList.contains('collapsed');`);
    const storedCollapsed = await evaluate(`return localStorage.getItem('rblearn:collapsed');`);
    console.log(`[PASS] Collapsible Mandarin group: before=${zhGroupBefore}, after=${zhGroupAfter}, stored=${storedCollapsed}`);
    if (zhGroupAfter === zhGroupBefore) throw new Error('Toggle Mandarin group failed');

    // Re-open Mandarin group
    await evaluate(`toggleGroup('mandarin');`);

    // Test 5: Mandarin Lesson navigation (zh-01: Pinyin & Rahasia 4 Nada Suara)
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/m/zh-01' });
    await sleep(400);
    const title = await evaluate(`return document.querySelector('.lesson-title').textContent;`);
    const hasPinyinContent = await evaluate(`return document.querySelector('.lesson-body').textContent.includes('Nada 1');`);
    const hasAudioBanner = await evaluate(`return !!document.querySelector('.zh-audio-banner');`);
    const speakerButtons = await evaluate(`return document.querySelectorAll('.zh-speak-btn').length;`);
    console.log(`[PASS] Mandarin audio & lesson zh-01: "${title}", banner=${hasAudioBanner}, speakerBtns=${speakerButtons}`);
    if (!hasPinyinContent || !hasAudioBanner || speakerButtons === 0) throw new Error('Mandarin audio buttons missing in zh-01');

    // Click speaker button
    await evaluate(`document.querySelector('.zh-speak-btn').click();`);
    await sleep(100);

    // Test 5b: Verify full sentence speech in dialogue on zh-03
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/m/zh-03' });
    await sleep(400);
    const dialogSpeaks = await evaluate(`
      return Array.from(document.querySelectorAll('.dialog-speak-btn')).map(b => b.dataset.speak);
    `);
    console.log('[PASS] Dialogue speak data in zh-03:', dialogSpeaks);
    if (!dialogSpeaks.some(s => s.includes('你叫什么名字')) || !dialogSpeaks.some(s => s.includes('苏普扬托'))) {
      throw new Error('Dialogue speech in zh-03 is still truncated!');
    }

    // Mark done on Mandarin lesson (zh-03)
    await evaluate(`document.querySelector('#btnDone').click();`);
    await sleep(200);
    const isDoneStored = await evaluate(`return JSON.parse(localStorage.getItem('rblearn:progress')).includes('zh-03');`);
    const pctText = await evaluate(`return document.querySelector('#spPct').textContent;`);
    console.log(`[PASS] Progress marked for zh-03: inStorage=${isDoneStored}, UI pct=${pctText}`);
    if (!isDoneStored) throw new Error('Progress saving failed');

    // Test 6: Quiz workflow with Mandarin filter
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/quiz' });
    await sleep(400);
    await evaluate(`startQuiz('mandarin');`);
    await sleep(200);
    const quizQuestion = await evaluate(`return document.querySelector('.quiz-q').textContent;`);
    const optsCount = await evaluate(`return document.querySelectorAll('.quiz-opt').length;`);
    console.log(`[PASS] Mandarin Quiz started: "${quizQuestion.slice(0, 45)}...", ${optsCount} options`);
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
