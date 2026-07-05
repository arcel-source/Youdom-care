/**
 * Génère les PDF des guides (lead magnets) à partir de scripts/guide-content.json.
 * Rendu HTML brandé Youdom Care → PDF via Chrome (puppeteer-core).
 *
 * Usage : node scripts/generate-guides.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer-core";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "guides");
const CONTENT = JSON.parse(fs.readFileSync(path.join(__dirname, "guide-content.json"), "utf8"));

const CHROME =
  process.env.CHROME_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const EMOJI = {
  "guide-aides-2026": "📕",
  "checklist-adaptation-domicile": "📗",
  "guide-aidant-familial": "📘",
  "checklist-sortie-hopital": "📙",
  "comprendre-alzheimer": "📕",
  "kit-mdph": "📗",
};

const esc = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

function guideHtml(g) {
  const sections = (g.sections || [])
    .map(
      (s, i) => `
      <section class="sec">
        <h2><span class="num">${String(i + 1).padStart(2, "0")}</span>${esc(s.title)}</h2>
        ${(s.paragraphs || []).map((p) => `<p>${esc(p)}</p>`).join("")}
        ${
          s.keyPoints && s.keyPoints.length
            ? `<div class="keys"><div class="keys-t">À retenir</div><ul>${s.keyPoints
                .map((k) => `<li>${esc(k)}</li>`)
                .join("")}</ul></div>`
            : ""
        }
      </section>`
    )
    .join("");

  const checklist =
    g.checklist && g.checklist.length
      ? `<section class="sec checklist">
          <h2><span class="num">✓</span>Votre checklist récapitulative</h2>
          <ul class="check">${g.checklist.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
        </section>`
      : "";

  return `<!doctype html><html lang="fr"><head><meta charset="utf-8"><style>
    @page { size: A4; margin: 20mm 16mm 18mm 16mm; }
    * { box-sizing: border-box; }
    body { font-family: -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color:#1A1A2E; line-height:1.6; font-size:11.5pt; margin:0; }
    h1,h2,h3 { font-family: Georgia, "Times New Roman", serif; color:#0F3555; line-height:1.2; }
    /* Couverture */
    .cover { position:relative; height:257mm; margin:-20mm -16mm 0 -16mm; padding:34mm 20mm; color:#fff;
      background:linear-gradient(135deg,#0F3555 0%,#1B4D7A 60%,#2A6FA8 100%); page-break-after:always; display:flex; flex-direction:column; }
    .brand { display:flex; align-items:center; gap:10px; font-weight:800; letter-spacing:.02em; font-size:15pt; }
    .brand .logo { width:34px;height:34px;border-radius:9px;background:#fff;color:#0F3555;display:flex;align-items:center;justify-content:center;font-weight:900; }
    .cover .emoji { font-size:52pt; margin-top:auto; }
    .cover h1 { color:#fff; font-size:34pt; margin:8px 0 10px; }
    .cover .sub { color:rgba(255,255,255,.9); font-size:14pt; max-width:150mm; }
    .cover .badge { display:inline-block; margin-top:22px; background:#E8B931; color:#0F3555; font-weight:800; padding:9px 16px; border-radius:999px; font-size:10.5pt; }
    .cover .foot { margin-top:auto; padding-top:20px; color:rgba(255,255,255,.75); font-size:9.5pt; border-top:1px solid rgba(255,255,255,.2); }
    /* Intro */
    .intro { background:#EEF4FA; border-left:4px solid #2EC4B6; padding:14px 18px; border-radius:0 10px 10px 0; margin:0 0 8px; font-size:12pt; color:#1A1A2E; }
    .sec { page-break-inside:avoid; margin:18px 0; }
    h2 { font-size:16pt; margin:20px 0 8px; display:flex; align-items:baseline; gap:10px; }
    h2 .num { display:inline-flex;align-items:center;justify-content:center; min-width:30px;height:30px; background:#E8B931;color:#0F3555;border-radius:8px;font-size:11pt;font-weight:900; font-family:-apple-system,sans-serif; }
    p { margin:6px 0; }
    .keys { background:#FBF8F3; border:1px solid #EDE5DA; border-radius:10px; padding:12px 16px; margin:10px 0; }
    .keys-t { text-transform:uppercase; letter-spacing:.12em; font-size:8.5pt; font-weight:800; color:#C99A14; margin-bottom:6px; }
    .keys ul { margin:0; padding-left:18px; }
    .keys li { margin:3px 0; }
    .checklist .check { list-style:none; padding:0; }
    .checklist .check li { padding:7px 0 7px 30px; position:relative; border-bottom:1px solid #EEF1F4; }
    .checklist .check li:before { content:"☐"; position:absolute; left:0; color:#1B4D7A; font-size:14pt; top:4px; }
    .cta { margin-top:26px; background:linear-gradient(135deg,#1B4D7A,#0F3555); color:#fff; border-radius:14px; padding:22px 24px; page-break-inside:avoid; }
    .cta h3 { color:#fff; font-size:15pt; margin:0 0 6px; }
    .cta p { color:rgba(255,255,255,.9); margin:4px 0; }
    .cta .phone { display:inline-block; margin-top:10px; background:#E8B931; color:#0F3555; font-weight:800; padding:9px 18px; border-radius:999px; text-decoration:none; }
    .disclaimer { color:#8A8AA0; font-size:8.5pt; margin-top:16px; }
  </style></head><body>
    <div class="cover">
      <div class="brand"><span class="logo">Y</span> Youdom Care</div>
      <div class="emoji">${esc(g.emoji || "📘")}</div>
      <h1>${esc(g.title)}</h1>
      <div class="sub">${esc(g.subtitle)}</div>
      <span class="badge">Guide offert · édition 2026</span>
      <div class="foot">Youdom Care — Aide à domicile à Paris &amp; Île-de-France · 01 84 80 72 97 · youdom-care.com</div>
    </div>

    <p class="intro">${esc(g.intro)}</p>
    ${sections}
    ${checklist}

    <div class="cta">
      <h3>${esc(g.cta || "Besoin d'aide pour passer à l'action ?")}</h3>
      <p>Nos coordinatrices vérifient gratuitement vos droits et montent les dossiers à votre place.</p>
      <p>Réponse en moins de 2 h ouvrées · Visite à domicile gratuite · Sans engagement.</p>
      <a class="phone" href="tel:+33184807297">📞 01 84 80 72 97</a>
    </div>
    <p class="disclaimer">Ce guide est fourni à titre informatif et ne se substitue pas à un conseil personnalisé. Informations à jour en 2026, susceptibles d'évoluer. © Youdom Care.</p>
  </body></html>`;
}

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

let ok = 0;
for (const [slug, g] of Object.entries(CONTENT)) {
  if (!g.file) {
    console.warn("skip (no file):", slug);
    continue;
  }
  g.emoji = g.emoji || EMOJI[slug] || "📘";
  const page = await browser.newPage();
  await page.setContent(guideHtml(g), { waitUntil: "networkidle0" });
  const outPath = path.join(OUT_DIR, g.file);
  await page.pdf({
    path: outPath,
    format: "A4",
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: "<span></span>",
    footerTemplate:
      '<div style="width:100%;font-size:8px;color:#8A8AA0;padding:0 16mm;display:flex;justify-content:space-between;"><span>Youdom Care — youdom-care.com</span><span>Page <span class="pageNumber"></span> / <span class="totalPages"></span></span></div>',
    margin: { top: "20mm", bottom: "18mm", left: "16mm", right: "16mm" },
  });
  await page.close();
  const kb = Math.round(fs.statSync(outPath).size / 1024);
  console.log(`✅ ${g.file} (${kb} Ko)`);
  ok++;
}
await browser.close();
console.log(`\n${ok} PDF générés dans public/guides/`);
