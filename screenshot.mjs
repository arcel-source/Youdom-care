import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({
  executablePath: '/usr/bin/chromium',
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
});

const page = await browser.newPage();

const sections = [
  { name: 'hero-desktop', w: 1400, h: 900, scrollY: 0 },
  { name: 'services-desktop', w: 1400, h: 900, scrollY: 950 },
  { name: 'howitworks-desktop', w: 1400, h: 900, scrollY: 2000 },
  { name: 'whyus-desktop', w: 1400, h: 900, scrollY: 2900 },
  { name: 'testimonials-desktop', w: 1400, h: 900, scrollY: 3800 },
  { name: 'faq-footer-desktop', w: 1400, h: 900, scrollY: 5000 },
];

// Desktop
await page.setViewport({ width: 1400, height: 900 });
await page.goto('http://localhost:3003', { waitUntil: 'load', timeout: 60000 });
await new Promise(r => setTimeout(r, 3000));

for (const s of sections) {
  await page.evaluate((y) => window.scrollTo(0, y), s.scrollY);
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: `screenshot-${s.name}.png` });
  console.log(`✅ ${s.name}`);
}

// Mobile
await page.setViewport({ width: 390, height: 844 });
await page.goto('http://localhost:3003', { waitUntil: 'load', timeout: 60000 });
await new Promise(r => setTimeout(r, 3000));
await page.screenshot({ path: 'screenshot-hero-mobile.png' });
console.log('✅ hero-mobile');

await browser.close();
console.log('🎉 Terminé !');
