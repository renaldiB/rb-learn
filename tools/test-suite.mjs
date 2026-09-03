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
    if (lessonCount !== 146 || quizCount !== 171 || trackCount !== 12 || !brandText.includes('RB Learning')) {
      throw new Error(`Invalid count: lessons=${lessonCount}, quizzes=${quizCount}, tracks=${trackCount}`);
    }
    const expectedOrder = ['flutter', 'git', 'js', 'mojo', 'pw', 'py', 'rn', 'sql', 'ts'];
    if (JSON.stringify(itTrackOrder) !== JSON.stringify(expectedOrder)) throw new Error(`Wrong IT track order: ${JSON.stringify(itTrackOrder)}`);

    // Test 2: Category Headers & Catalog Filtering
    const sideCatCount = await evaluate('return document.querySelectorAll(".side-category").length;');
    console.log(`[PASS] Sidebar category headers rendered: ${sideCatCount}`);
    if (sideCatCount < 3) throw new Error('Sidebar category headers missing');

    await evaluate(`document.querySelector('#catalogTabs .cat-tab[data-cat="lang"]').click();`);
    await sleep(200);
    const visibleLangCards = await evaluate(`return Array.from(document.querySelectorAll('#trackCardsGrid .track-card')).filter(el => el.style.display !== 'none').length;`);
    console.log(`[PASS] Catalog filtered by "lang": ${visibleLangCards} cards visible`);
    if (visibleLangCards !== 3) throw new Error('Catalog filter by lang failed (expected 3: Mandarin, Korean, Japanese)');

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

    await evaluate(`
      const input = document.querySelector('#searchInput');
      input.value = '';
      input.dispatchEvent(new Event('input'));
    `);
    await sleep(200);

    // Test 4: Bookmark Feature
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/m/git-01' });
    await sleep(400);
    await evaluate(`document.querySelector('#btnBookmark').click();`);
    await sleep(200);
    const bmStored = await evaluate(`return JSON.parse(localStorage.getItem('rblearn:bookmarks')).includes('git-01');`);
    console.log(`[PASS] Bookmark saved for git-01: ${bmStored}`);
    if (!bmStored) throw new Error('Bookmark saving failed');

    // Test 5: Personal Notes Feature
    await evaluate(`
      const area = document.querySelector('#notesArea');
      area.value = 'Catatan belajar Git Supriyanto: selalu commit pesan jelas!';
      area.dispatchEvent(new Event('input'));
    `);
    await sleep(600);
    const notesStored = await evaluate(`return JSON.parse(localStorage.getItem('rblearn:notes'))['git-01'];`);
    console.log(`[PASS] Personal notes saved: "${notesStored}"`);
    if (!notesStored || !notesStored.includes('Supriyanto')) throw new Error('Personal notes saving failed');

    // Test 6: Korean Track Audio & Content
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/m/ko-01' });
    await sleep(400);
    const koTitle = await evaluate(`return document.querySelector('.lesson-title').textContent;`);
    const koSpeakers = await evaluate(`return document.querySelectorAll('.ko-char .zh-speak-btn').length;`);
    console.log(`[PASS] Korean lesson loaded: "${koTitle}", speakerBtns=${koSpeakers}`);
    if (!koTitle.includes('Hangeul') || koSpeakers === 0) throw new Error('Korean lesson elements missing');

    // Test 7: Japanese Track Audio & Content
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/m/ja-01' });
    await sleep(400);
    const jaTitle = await evaluate(`return document.querySelector('.lesson-title').textContent;`);
    const jaSpeakers = await evaluate(`return document.querySelectorAll('.ja-char .zh-speak-btn').length;`);
    console.log(`[PASS] Japanese lesson loaded: "${jaTitle}", speakerBtns=${jaSpeakers}`);
    if (!jaTitle.includes('Hiragana') || jaSpeakers === 0) throw new Error('Japanese lesson elements missing');

    // Test 8: Flashcard View & Controls
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/flashcard' });
    await sleep(400);
    const fcCharBefore = await evaluate(`return document.querySelector('.fc-char').textContent;`);
    const isFlippedBefore = await evaluate(`return document.querySelector('#fcCard').classList.contains('flipped');`);
    await evaluate(`document.querySelector('#fcCard').click();`);
    const isFlippedAfter = await evaluate(`return document.querySelector('#fcCard').classList.contains('flipped');`);
    await evaluate(`document.querySelector('#fcNext').click();`);
    const fcCharAfter = await evaluate(`return document.querySelector('.fc-char').textContent;`);
    console.log(`[PASS] Flashcard: char="${fcCharBefore}", flippedBefore=${isFlippedBefore}, flippedAfter=${isFlippedAfter}, nextChar="${fcCharAfter}"`);
    if (!isFlippedAfter || fcCharBefore === fcCharAfter) throw new Error('Flashcard flip or navigation failed');

    // Test 9: Quiz workflow with TypeScript
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/quiz' });
    await sleep(400);
    await evaluate(`startQuiz('ts');`);
    await sleep(200);
    const quizQuestion = await evaluate(`return document.querySelector('.quiz-q').textContent;`);
    const optsCount = await evaluate(`return document.querySelectorAll('.quiz-opt').length;`);
    console.log(`[PASS] TypeScript Quiz started: "${quizQuestion.slice(0, 45)}...", ${optsCount} options`);
    if (optsCount < 2) throw new Error('Quiz options missing');

    // Answer first question
    await evaluate(`document.querySelector('.quiz-opt[data-i="0"]').click();`);
    await sleep(200);
    const whyVisible = await evaluate(`return document.querySelector('#quizWhy').classList.contains('show');`);
    const nextEnabled = await evaluate(`return !document.querySelector('#quizNext').disabled;`);
    console.log(`[PASS] Quiz answer feedback: whyShown=${whyVisible}, nextEnabled=${nextEnabled}`);
    if (!whyVisible || !nextEnabled) throw new Error('Quiz answer state failed');

    // Test 10: Theme toggle
    const themeBefore = await evaluate(`return document.documentElement.dataset.theme;`);
    await evaluate(`document.querySelector('#themeBtn').click();`);
    const themeAfter = await evaluate(`return document.documentElement.dataset.theme;`);
    const themeStored = await evaluate(`return localStorage.getItem('rblearn:theme');`);
    console.log(`[PASS] Theme toggle: before=${themeBefore}, after=${themeAfter}, stored=${themeStored}`);
    if (themeBefore === themeAfter || themeAfter !== themeStored) throw new Error('Theme toggle failed');

    // Reset theme back to light
    await evaluate(`applyTheme('light');`);
    await evaluate(`localStorage.clear();`);

    console.log('--- ALL 10 AUTOMATED INTEGRATION TESTS PASSED ---');
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
