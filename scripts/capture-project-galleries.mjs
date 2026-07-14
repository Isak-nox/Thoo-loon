import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..", "public", "projects");

const SITES = [
  { slug: "minaal", url: "https://www.minaal.com/" },
  { slug: "brightland", url: "https://brightland.co/" },
  { slug: "kinto-usa", url: "https://kinto-usa.com/" },
  { slug: "pelacase", url: "https://pelacase.com/" },
  { slug: "hexclad", url: "https://hexclad.com/" },
  { slug: "brooklinen", url: "https://brooklinen.com/" },
];

const SCROLLS = [0, 900, 1800, 2700, 3600];

const browser = await chromium.launch({ headless: true });

for (const site of SITES) {
  const dir = path.join(ROOT, site.slug);
  fs.mkdirSync(dir, { recursive: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();
  console.log(`Opening ${site.url}`);
  try {
    await page.goto(site.url, { waitUntil: "domcontentloaded", timeout: 90000 });
    await page.waitForTimeout(4500);
    try {
      await page.keyboard.press("Escape");
    } catch {}
    for (let i = 0; i < SCROLLS.length; i++) {
      await page.evaluate((y) => window.scrollTo(0, y), SCROLLS[i]);
      await page.waitForTimeout(900);
      const file = path.join(dir, `${String(i + 1).padStart(2, "0")}.png`);
      await page.screenshot({ path: file, fullPage: false });
      console.log(`Saved ${file}`);
    }
  } catch (err) {
    console.warn(`Failed ${site.slug}:`, err.message);
  }
  await context.close();
}

await browser.close();
console.log("Done");
