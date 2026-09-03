import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const PORT = 9224;
const HTTP_PORT = 8746;
const BASE_URL = `http://127.0.0.1:${HTTP_PORT}`;
const ROOT_DIR = 'C:/Users/Z Series/MainRB/Code Project/RB Learn';
const SHOTS_DIR = 'C:/Users/Z Series/MainRB/Code Project/RB Learn/tools/shots';

if (!fs.existsSync(SHOTS_DIR)) {
  fs.mkdirSync(SHOTS_DIR, { recursive: true });
}

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

async function run() {
  console.log('Launching Static Server & Chrome...');
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
    await cdp.send('DOM.enable');

    async function capture(filename, width = 1440, height = 900) {
      await cdp.send('Emulation.setDeviceMetricsOverride', {
        width,
        height,
        deviceScaleFactor: 1,
        mobile: width <= 820
      });
      await sleep(400);
      const res = await cdp.send('Page.captureScreenshot', { format: 'png' });
      const filepath = path.join(SHOTS_DIR, filename);
      fs.writeFileSync(filepath, Buffer.from(res.data, 'base64'));
      console.log('Saved screenshot:', filename);
    }

    async function evalCode(expr) {
      return await cdp.send('Runtime.evaluate', { expression: expr, returnByValue: true });
    }

    // 1. Beranda (Light Mode, 4 Tracks)
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/' });
    await sleep(600);
    await evalCode('localStorage.clear(); applyTheme("light"); render(); renderSidebar();');
    await sleep(300);
    await capture('python-1-beranda.png', 1440, 900);

    // 2. Python 01: Pengenalan (Light Mode)
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/m/py-01' });
    await sleep(500);
    await capture('python-2-pengenalan-light.png', 1440, 900);

    // 3. Python 10: Machine Learning (Light Mode)
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/m/py-10' });
    await sleep(500);
    await capture('python-3-ml-light.png', 1440, 900);

    // 4. Python 10 (Dark Mode)
    await evalCode('applyTheme("dark");');
    await sleep(300);
    await capture('python-4-ml-dark.png', 1440, 900);

    // 5. Quiz with Python filter (Light Mode)
    await evalCode('applyTheme("light");');
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/quiz' });
    await sleep(500);
    await evalCode('startQuiz("py");');
    await sleep(300);
    await capture('python-5-quiz.png', 1440, 900);

    // 6. Mobile View Python 10
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/m/py-10' });
    await sleep(500);
    await capture('python-6-mobile.png', 390, 844);

    cdp.close();
    console.log('All Python screenshots captured successfully.');
  } catch (err) {
    console.error('Error during testing:', err);
  } finally {
    server.close();
    chrome.kill();
  }
}

run();
