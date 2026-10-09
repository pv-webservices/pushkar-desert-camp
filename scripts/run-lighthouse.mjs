// Usage: node scripts/run-lighthouse.mjs <path-to-lighthouse-cli/index.js>
// Attach Lighthouse to a browser managed by Playwright to avoid Windows temp-profile cleanup errors.
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
const cli=process.argv[2];
if(!cli) throw new Error('Pass the installed Lighthouse CLI entrypoint path.');
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--remote-debugging-port=9224']});
try {
  const code=await new Promise((resolve,reject)=> {
    const processHandle=spawn(process.execPath,[cli,process.env.QA_URL ? process.env.QA_URL + '/' : 'http://127.0.0.1:4321/','--port=9224','--output=json','--output=html','--output-path=output/playwright/lighthouse-mobile-redesign','--only-categories=performance,accessibility,best-practices,seo','--quiet'],{stdio:'inherit',windowsHide:true});
    processHandle.on('error',reject);processHandle.on('exit',resolve);
  });
  process.exitCode=typeof code==='number'?code:1;
} finally {await browser.close();}
