// QA helper: node scripts/screenshot.mjs <route> <width> <name> [full=1]
// Requires a running preview (QA_URL, default http://127.0.0.1:4400).
import { chromium } from 'playwright';

const base = process.env.QA_URL || 'http://127.0.0.1:4400';
const [, , route = '/', width = '1440', name = 'shot', full = '1'] = process.argv;
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage({ viewport: { width: Number(width), height: 900 } });
const errors = [];
page.on('pageerror', e => errors.push(e.message));
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
await page.goto(base + route, { waitUntil: 'networkidle' });
if (full === '1') {
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < height; y += 500) {
    await page.evaluate(top => window.scrollTo(0, top), y);
    await page.waitForTimeout(90);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(700);
}
await page.waitForTimeout(800);
const [scrollWidth, innerWidth] = await page.evaluate(() => [document.documentElement.scrollWidth, window.innerWidth]);
await page.screenshot({ path: `output/redesign/${name}.png`, fullPage: full === '1' });
process.stdout.write(`${name}: overflow=${scrollWidth > innerWidth} errors=${JSON.stringify(errors)}\n`);
await browser.close();
