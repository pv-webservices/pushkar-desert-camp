import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs/promises';
import path from 'node:path';
const base=process.env.QA_URL || 'http://127.0.0.1:4321';
const output=path.resolve('output/playwright');
await fs.mkdir(output,{recursive:true});
const routes=['/','/about-us/','/experiences/','/desert-safari/','/camp-stay/','/swiss-tent/','/cultural-experiences/','/gallery/','/contact-us/','/privacy-policy/','/404.html'];
const widths=[320,375,390,640,768,1024,1440,1920];
const report={base,ranAt:new Date().toISOString(),responsive:[],accessibility:[],interactions:[],links:[],errors:[],noJavaScript:[],motion:[]};
const browser=await chromium.launch({channel:'chrome',headless:true});
const context=await browser.newContext({reducedMotion:'reduce'});
const page=await context.newPage();
page.on('pageerror',error=>report.errors.push(error.message));
page.on('console',message=>{if(message.type()==='error') report.errors.push(message.text());});
const links=new Set();
const assert=(condition,message)=>{if(!condition) throw new Error(message);report.interactions.push(message);};
async function loadAllImages(p) {
  await p.evaluate(async()=>{
    for(const img of document.querySelectorAll('img:not(#lightbox-image)')) {
      img.loading='eager';
      await img.decode().catch(()=>{});
    }
  });
}
async function paintFullPage(p) {
  const height=await p.evaluate(()=>document.documentElement.scrollHeight);
  for(let y=0;y<height;y+=750) {await p.evaluate(y=>window.scrollTo(0,y),y);await p.waitForTimeout(40);}
  await p.evaluate(()=>window.scrollTo(0,0));
  await p.waitForTimeout(150);
}
try {
for (const route of routes) {
  for(const width of widths) {
    await page.setViewportSize({width,height:900});
    const response=await page.goto(base+route,{waitUntil:'networkidle'});
    await page.evaluate(()=>document.fonts.ready);
    await loadAllImages(page);
    const state=await page.evaluate(()=>({
      width:innerWidth,scrollWidth:document.documentElement.scrollWidth,
      h1:document.querySelectorAll('h1').length,title:document.title,
      description:document.querySelector('meta[name=description]')?.getAttribute('content'),
      broken:[...document.querySelectorAll('img:not(#lightbox-image)')].filter(i=>!i.complete || !i.naturalWidth).map(i=>i.getAttribute('src')),
      overflow:[...document.querySelectorAll('main *')].filter(el=>{const r=el.getBoundingClientRect();return r.width>0 && (r.right>innerWidth+2 || r.left<-2);}).slice(0,6).map(el=>el.className),
      links:[...document.querySelectorAll('a[href]')].map(a=>a.getAttribute('href')),
    }))
    const pass=response?.status()===200 && state.scrollWidth<=width+1 && state.h1===1 && !!state.description && state.broken.length===0;
    report.responsive.push({route,width,pass,...state});
    state.links.filter(link=>link?.startsWith('/') || link?.startsWith('#')).forEach(link=>links.add(link.startsWith('#')?route+link:link));
    if(!pass) throw new Error(`Responsive failure ${route} @ ${width}: ${JSON.stringify(state)}`);
    if(width===390 || width===1440) {
      const audit=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa','best-practice']).analyze();
      report.accessibility.push({route,width,violations:audit.violations.map(v=>({id:v.id,impact:v.impact,description:v.description,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}))});
      if(route!=='/404.html' && route!=='/privacy-policy/') {
        await paintFullPage(page);
        await page.screenshot({path:path.join(output,`${route==='/'?'home':route.replaceAll('/','')}-${width}.png`),fullPage:true});
      }
    }
  }
  console.log(`Responsive & accessibility checked: ${route}`);
}
for(const href of links) {
  const url=new URL(href,base);
  const response=await page.request.get(url.href.split('#')[0]);
  let fragmentExists=true;
  if(url.hash) {
    const html=await response.text();
    fragmentExists=html.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`);
  }
  report.links.push({href,status:response.status(),fragmentExists});
  if(response.status()!==200 || !fragmentExists) throw new Error(`Broken internal link: ${href}`);
}
await page.setViewportSize({width:390,height:844});
await page.goto(base);
const menu=page.locator('.menu-toggle');
await menu.click();
assert(await menu.getAttribute('aria-expanded')==='true','Mobile navigation opens');
await page.getByRole('button',{name:'Show experience pages'}).click();
await page.locator('#experience-menu').getByRole('link',{name:/^Desert Safari/}).click();
assert(new URL(page.url()).pathname==='/desert-safari/','Mobile dropdown navigates to safari');
await page.getByRole('button',{name:'Open navigation'}).click();
await page.keyboard.press('Escape');
assert(await page.getByRole('button',{name:'Open navigation'}).getAttribute('aria-expanded')==='false','Escape closes mobile navigation');
await page.setViewportSize({width:1440,height:900});
await page.goto(base);
const stayToggle=page.getByRole('button',{name:'Show accommodation pages'});
await stayToggle.focus();
await page.keyboard.press('Enter');
assert(await stayToggle.getAttribute('aria-expanded')==='true','Keyboard opens desktop stay dropdown');
await page.keyboard.press('Escape');
assert(await stayToggle.getAttribute('aria-expanded')==='false','Escape closes desktop dropdown');
await page.goto(base+'/gallery/');
await page.getByRole('button',{name:'Culture',exact:true}).click();
assert(await page.locator('[data-gallery-src]:visible').count()===3,'Culture filter shows three supplied photos');
const selectedPhoto=page.locator('[data-gallery-src]:visible').first();
await selectedPhoto.click();
assert(await page.locator('#lightbox').evaluate(el=>el.open),'Gallery opens fullscreen lightbox');
const initial=await page.locator('#lightbox-image').getAttribute('src');
await page.keyboard.press('ArrowRight');
assert(await page.locator('#lightbox-image').getAttribute('src')!==initial,'Right arrow advances gallery');
await page.keyboard.press('ArrowLeft');
assert(await page.locator('#lightbox-image').getAttribute('src')===initial,'Left arrow returns to previous photo');
await page.getByRole('button',{name:'Next photo'}).click();
await page.getByRole('button',{name:'Previous photo'}).click();
assert(await page.locator('#lightbox-image').getAttribute('src')===initial,'Lightbox previous and next buttons work');
const dialogAudit=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
report.accessibility.push({route:'/gallery/#lightbox',width:1440,violations:dialogAudit.violations});
await page.keyboard.press('Escape');
assert(!await page.locator('#lightbox').evaluate(el=>el.open),'Escape closes the lightbox');
assert(await selectedPhoto.evaluate(el=>el===document.activeElement),'Lightbox returns focus to selected photo');
await page.getByRole('button',{name:'All Moments'}).click();
assert(await page.locator('[data-gallery-src]:visible').count()===12,'All moments restores twelve images');
await page.goto(base+'/contact-us/');
await page.locator('#enquiry-form button[type=submit]').click();
assert(await page.locator('#form-status').textContent()==='','Invalid enquiry does not prepare a message');
await page.getByLabel('Full name').fill('QA Guest');
await page.getByLabel('Phone number').fill('invalid number');
assert(!await page.locator('#phone').evaluate(el=>el.checkValidity()),'Phone validation rejects non-number input');
await page.getByLabel('Phone number').fill('+919999999999');
await page.getByLabel('Email address').fill('qa@example.test');
await page.getByLabel('Interested in').selectOption('Safari & Stay');
await page.getByLabel('Number of guests').fill('4');
await page.getByLabel('Your message').fill('Synthetic verification only. Please do not send.');
await page.locator('#enquiry-form button[type=submit]').click();
const draft=await page.locator('#form-status a').getAttribute('href');
assert(draft?.startsWith('https://wa.me/919116991219?text='),'Enquiry prepares the supplied WhatsApp number');
assert(decodeURIComponent(draft || '').includes('QA Guest') && decodeURIComponent(draft || '').includes('Guests: 4'),'Prepared enquiry includes form details');
assert((await page.locator('#form-status').textContent()).includes('Nothing has been sent yet'),'Form accurately describes message preparation');
assert(await page.locator('a[href="tel:+919116991219"]').count()>0,'Call actions use the supplied phone number');
assert(await page.locator('a[href="mailto:info@pushkardesertcamp.com"]').count()>0,'Email actions use the supplied email');
await page.goto(base+'/contact-us/?service=Desert%20Safari');
assert(await page.locator('#service').inputValue()==='Desert Safari','Service CTAs preselect the enquiry experience');
await page.setViewportSize({width:1440,height:900});
await page.goto(base+'/about-us/');
const strip=page.locator('[data-gallery-track]');
await strip.scrollIntoViewIfNeeded();
assert(await page.locator('[data-strip-prev]').isDisabled(),'Photo strip back button starts disabled');
await page.locator('[data-strip-next]').click();
await page.waitForTimeout(400);
assert(await strip.evaluate(el=>el.scrollLeft>0),'Photo strip forward button scrolls the photographs');
await page.goto(base);
await page.locator('[data-step="3"]').scrollIntoViewIfNeeded();
await page.waitForTimeout(400);
assert(await page.locator('[data-frame].is-active').count()===1,'Sticky story keeps exactly one active frame');
const motionContext=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:'no-preference'});
const motionPage=await motionContext.newPage();
await motionPage.goto(base);
await motionPage.evaluate(()=>document.fonts.ready);
for(let y=0;y<await motionPage.evaluate(()=>document.body.scrollHeight);y+=650) {
  await motionPage.evaluate(y=>window.scrollTo(0,y),y);
  await motionPage.waitForTimeout(150);
}
await motionPage.waitForTimeout(1100);
report.motion.push({allRevealed:await motionPage.locator('.reveal-ready:not(.revealed)').count()===0,parallax:await motionPage.locator('[data-parallax]').first().getAttribute('style')});
assert(report.motion[0].allRevealed,'Normal-motion scroll reveals all homepage sections');
await motionPage.evaluate(()=>window.scrollTo(0,0));
await motionPage.screenshot({path:path.join(output,'home-desktop-motion.png'),fullPage:true});
await motionContext.close();
const noJsContext=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});
const noJsPage=await noJsContext.newPage();
for(const route of ['/', '/swiss-tent/','/contact-us/']) {
  await noJsPage.goto(base+route);
  const invisible=await noJsPage.locator('[data-reveal]').evaluateAll(els=>els.filter(el=>getComputedStyle(el).opacity==='0').length);
  report.noJavaScript.push({route,invisible});
  if(invisible) throw new Error(`Invisible content without JavaScript: ${route}`);
}
await noJsContext.close();
const violations=report.accessibility.reduce((sum,item)=>sum+item.violations.length,0);
report.summary={responsiveChecks:report.responsive.length,accessibilityChecks:report.accessibility.length,violations,interactions:report.interactions.length,links:report.links.length,consoleErrors:report.errors.length};
if(violations || report.errors.length) throw new Error(`QA failures: ${violations} accessibility violations, ${report.errors.length} console errors`);
console.log(JSON.stringify(report.summary,null,2));
} catch(error) { report.failure=String(error); console.error(error); process.exitCode=1; }
finally {await fs.writeFile(path.join(output,'verification.json'),JSON.stringify(report,null,2));await browser.close();}
