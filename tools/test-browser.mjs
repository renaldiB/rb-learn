import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const PORT = 9222;
const BASE_URL = 'http://127.0.0.1:8741';
const SHOTS_DIR = 'C:/Users/Z Series/MainRB/Code Project/RB Learn/tools/shots';

if (!fs.existsSync(SHOTS_DIR)) {
  fs.mkdirSync(SHOTS_DIR, { recursive: true });
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

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function run() {
  console.log('Launching Chrome...');
  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=' + PORT,
    '--no-first-run',
    '--no-default-browser-check',
    '--user-data-dir=' + path.join(SHOTS_DIR, 'chrome-profile')
  ]);

  await sleep(1500);

  try {
    const targets = await getJson('http://127.0.0.1:' + PORT + '/json');
    const pageTarget = targets.find(t => t.type === 'page') || targets[0];
    console.log('Connecting to target:', pageTarget.webSocketDebuggerUrl);

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

    // 1. Beranda (Light Mode, Desktop 1440x900)
    console.log('1. Loading Home Light...');
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/' });
    await sleep(600);
    await evalCode('localStorage.clear(); applyTheme(\"light\"); render(); renderSidebar();');
    await sleep(300);
    await capture('verified-1-beranda-light.png', 1440, 900);

    // 2. Materi JS: Array (Light Mode, Desktop)
    console.log('2. Loading JS Array Light...');
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/m/js-array' });
    await sleep(500);
    await capture('verified-2-materi-js-array-light.png', 1440, 900);

    // 3. Materi PW: Modul 03 (Light Mode, Desktop)
    console.log('3. Loading PW Modul 03 Light...');
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/m/pw-03' });
    await sleep(500);
    await capture('verified-3-materi-pw-03-light.png', 1440, 900);

    // 4. Materi JS: Array (Dark Mode, Desktop)
    console.log('4. Loading JS Array Dark...');
    await evalCode('applyTheme(\"dark\");');
    await sleep(300);
    await capture('verified-4-materi-js-array-dark.png', 1440, 900);

    // 5. Materi PW: Modul 03 (Dark Mode, Desktop)
    console.log('5. Loading PW Modul 03 Dark...');
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/m/pw-03' });
    await sleep(500);
    await capture('verified-5-materi-pw-03-dark.png', 1440, 900);

    // 6. Playground (Light Mode, Desktop)
    console.log('6. Loading Playground Light...');
    await evalCode('applyTheme(\"light\");');
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/playground' });
    await sleep(500);
    await evalCode('runPlayground();');
    await sleep(200);
    await capture('verified-6-playground-light.png', 1440, 900);

    // 7. Quiz (Light Mode, Desktop)
    console.log('7. Loading Quiz Light...');
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/quiz' });
    await sleep(500);
    await evalCode('startQuiz(\"all\");');
    await sleep(300);
    await capture('verified-7-quiz-light.png', 1440, 900);

    // 8. Tablet View (768x1024)
    console.log('8. Testing Tablet View 768x1024...');
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/m/pw-03' });
    await sleep(500);
    await capture('verified-8-tablet-pw-03.png', 768, 1024);

    // 9. Mobile View (390x844) - Materi
    console.log('9. Testing Mobile View 390x844...');
    await cdp.send('Page.navigate', { url: BASE_URL + '/#/m/js-array' });
    await sleep(500);
    await capture('verified-9-mobile-js-array.png', 390, 844);

    // 10. Mobile View (390x844) - Offcanvas Sidebar Open
    console.log('10. Testing Mobile Sidebar Open...');
    await evalCode('openSidebar();');
    await sleep(300);
    await capture('verified-10-mobile-sidebar-open.png', 390, 844);

    cdp.close();
    console.log('All screenshots captured successfully.');
  } catch (err) {
    console.error('Error during testing:', err);
  } finally {
    chrome.kill();
  }
}

run();
