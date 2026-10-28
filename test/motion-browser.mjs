import {chromium} from '../qa/node_modules/playwright/index.mjs';
import {createAemsServer} from '../serve.mjs';
import assert from 'node:assert/strict';
import {mkdir} from 'node:fs/promises';
const server=await createAemsServer();await new Promise(r=>server.listen(0,'127.0.0.1',r));
const origin=`http://127.0.0.1:${server.address().port}`;const browser=await chromium.launch();
const errors=[];await mkdir('outputs/motion-audit',{recursive:true});
try{
 for(const width of [390,1440])for(const preference of ['no-preference','reduce']){
  const context=await browser.newContext({viewport:{width,height:1000},reducedMotion:preference});const page=await context.newPage();page.on('pageerror',e=>{errors.push(e.message);console.log('PAGE ERROR',e.stack);});
  await page.goto(origin+'/');await page.waitForSelector('#solution-tab-1');
  assert.equal(await page.locator('h1').evaluate(e=>getComputedStyle(e).opacity),'1');
  await page.locator('#solution-tab-1').click();
  assert.match(await page.locator('#solution-panel').textContent(),/HVAC/);
  const swapping=await page.locator('#solution-panel').evaluate(e=>e.getAnimations().length);
  assert.equal(swapping>0,preference==='no-preference','Solution swap respects motion preference');
  if(preference==='no-preference'){
   await page.emulateMedia({reducedMotion:'reduce'});await page.waitForFunction(()=>document.querySelector('#solution-panel').getAnimations().length===0,{},{timeout:1000});
   assert.equal(await page.locator('#solution-panel').evaluate(e=>e.getAnimations().length),0);
   await page.emulateMedia({reducedMotion:'no-preference'});
  }
  await page.locator('.faq-list summary').nth(1).click();await page.waitForTimeout(350);
  assert.ok(await page.locator('.faq-list details').nth(1).evaluate(e=>e.open));
  await page.goto(origin+'/labfurniture');await page.locator('[data-equipment="photo"]').click();
  const photo=page.locator('.equipment-stage .photo-viewport');
  assert.equal((await photo.evaluate(e=>e.getAnimations().length))>0,preference==='no-preference');
  await page.waitForTimeout(400);
  assert.equal(await photo.evaluate(e=>getComputedStyle(e).transform),'none');
  await page.locator('[data-equipment="full-size"]').click();assert.ok(await page.locator('.image-dialog').evaluate(e=>e.open));
  await page.keyboard.press('Escape');await page.locator('.equipment-showcase').scrollIntoViewIfNeeded();
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  await page.screenshot({path:`outputs/motion-audit/${width}-${preference}.png`});
  console.log(`PASS ${width}px / ${preference}: readable text, product transitions, FAQ, modal and no overflow`);
  await context.close();
 }
 assert.deepEqual(errors,[]);console.log('No JavaScript page errors');
}finally{await browser.close();await new Promise(r=>server.close(r));}
