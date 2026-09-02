#!/usr/bin/env node
const { URL } = require('url');
const http = require('http');
const https = require('https');

function checkOnce(targetUrl, timeoutMs = 10000) {
  return new Promise((resolve, reject) => {
    try {
      const u = new URL(targetUrl);
      const lib = u.protocol === 'https:' ? https : http;
      const req = lib.get(u, { timeout: timeoutMs }, res => {
        resolve({ status: res.statusCode });
        res.resume();
      });
      req.on('error', err => resolve({ error: err.message }));
      req.on('timeout', () => {
        req.destroy();
        resolve({ error: 'timeout' });
      });
    } catch (err) {
      resolve({ error: err.message });
    }
  });
}

async function poll(url, intervalSec = 10, timeoutSec = 300) {
  const start = Date.now();
  const timeoutMs = timeoutSec * 1000;
  console.log(`Checking ${url} every ${intervalSec}s for up to ${timeoutSec}s...`);
  while (Date.now() - start < timeoutMs) {
    const r = await checkOnce(url, 10000);
    if (r.status && r.status >= 200 && r.status < 400) {
      console.log(`OK: ${r.status} — site is live at ${url}`);
      return 0;
    }
    process.stdout.write('.');
    await new Promise(res => setTimeout(res, intervalSec * 1000));
  }
  console.log(`\nTimeout: ${url} did not become available within ${timeoutSec}s`);
  return 2;
}

if (require.main === module) {
  const target = process.argv[2] || process.env.URL;
  const timeout = parseInt(process.argv[3] || process.env.TIMEOUT || '300', 10);
  const interval = parseInt(process.argv[4] || process.env.INTERVAL || '10', 10);
  if (!target) {
    console.error('Usage: node scripts/check-pages.js <url> [timeoutSec] [intervalSec]');
    process.exit(1);
  }
  poll(target, interval, timeout).then(code => process.exit(code));
}
