import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "..", "public", "projects", "pelacase");

const urls = [
  "https://pelacase.com/collections/all",
  "https://pelacase.com/collections/best-sellers",
  "https://pelacase.com/collections/watch-bands",
];

async function dismiss(page) {
  await page.keyboard.press("Escape").catch(() => {});
  await page.waitForTimeout(400);
  const selectors = [
    'button:has-text("Team iPhone")',
    'button:has-text("Team Android")',
    'button:has-text("No thanks")',
    'button:has-text("No Thanks")',
    'button:has-text("Close")',
    'button[aria-label*="Close" i]',
    'button:has-text("Accept Cookies")',
    'button:has-text("Reject All")',
  ];
  for (const sel of selectors) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 700 })) {
        await el.click({ force: true, timeout: 2000 });
        await page.waitForTimeout(900);
      }
    } catch {}
  }
  await page.keyboard.press("Escape").catch(() => {});
}

async function waitForProductImages(page) {
  await page
    .waitForFunction(
      () => {
        const imgs = [...document.querySelectorAll("img")].filter(
          (img) => img.offsetWidth > 80 && img.naturalWidth > 40
        );
        return imgs.length >= 3;
      },
      { timeout: 20000 }
    )
    .catch(() => {});
}

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
const page = await context.newPage();

let shot = 1; // keep existing 01.png hero
for (const url of urls) {
  console.log(`Opening ${url}`);
  const res = await page.goto(url, {
    waitUntil: "domcontentloaded",
    timeout: 75000,
  });
  if (!res || res.status() >= 400) {
    console.warn(`skip ${url}`);
    continue;
  }
  await page.waitForTimeout(5000);
  await dismiss(page);
  await page.waitForTimeout(2000);
  await dismiss(page);
  await waitForProductImages(page);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);

  shot += 1;
  const file = path.join(dir, `${String(shot).padStart(2, "0")}.png`);
  await page.screenshot({ path: file, fullPage: false });
  console.log(`Saved ${file}`);
}

await browser.close();
console.log("Done");
