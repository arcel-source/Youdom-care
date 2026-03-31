import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({
  executablePath: '/usr/bin/chromium',
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1400, height: 900 });

const pages = [
  { name: 'services', path: '/services' },
  { name: 'fonctionnement', path: '/fonctionnement' },
  { name: 'a-propos', path: '/a-propos' },
  { name: 'temoignages', path: '/temoignages' },
  { name: 'contact', path: '/contact' },
  { name: 'devis', path: '/devis' },
  { name: 'faq', path: '/faq' },
  { name: 'recrutement', path: '/recrutement' },
  { name: 'blog', path: '/blog' },
];

for (const p of pages) {
  await page.goto(`http://localhost:3004${p.path}`, { waitUntil: 'load', timeout: 60000 });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: `page-${p.name}.png` });
  console.log(`✅ ${p.name}`);
}

await browser.close();
console.log('🎉 Terminé !');
