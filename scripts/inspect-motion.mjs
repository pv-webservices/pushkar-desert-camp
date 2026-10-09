import { chromium } from 'playwright';
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:900},reducedMotion:'no-preference'});
await page.goto('http://127.0.0.1:4321/');
await page.evaluate(()=>document.fonts.ready);
for(let y=0;y<await page.evaluate(()=>document.documentElement.scrollHeight);y+=500){await page.evaluate(y=>scrollTo(0,y),y);await page.waitForTimeout(200);}
await page.waitForTimeout(1000);
console.log(await page.locator('.reveal-ready:not(.revealed)').evaluateAll(els=>els.map(el=>({tag:el.tagName,class:el.className,mode:el.getAttribute('data-reveal'),clip:getComputedStyle(el).clipPath,photo:el.querySelector('img')?.alt}))));
await browser.close();
