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

fs.mkdirSync(ROOT, { recursive: true });

const browser = await chromium.launch({ headless: true });

for (const site of SITES) {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  console.log(`Opening ${site.url}`);
  try {
    await page.goto(site.url, { waitUntil: "domcontentloaded", timeout: 90000 });
    await page.waitForTimeout(5000);
    // Dismiss common cookie banners if present
    try {
      await page.keyboard.press("Escape");
    } catch {}
    await page.waitForTimeout(1000);
    const filePath = path.join(ROOT, `${site.slug}.png`);
    await page.screenshot({ path: filePath, fullPage: false });
    console.log(`Saved ${filePath}`);
  } catch (err) {
    console.warn(`Failed ${site.slug}:`, err.message);
  }
  await context.close();
}

await browser.close();
console.log("Done");
