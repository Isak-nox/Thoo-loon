import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..", "public", "projects");

/** Only above-the-fold pages with product/brand visuals — no mid-scroll (avoids footers). */
const SITES = [
  {
    slug: "minaal",
    pages: [
      "https://www.minaal.com/",
      "https://www.minaal.com/collections/bags",
      "https://www.minaal.com/collections/accessories",
      "https://www.minaal.com/products/carry-on-3-0",
    ],
  },
  {
    slug: "brightland",
    pages: [
      "https://brightland.co/",
      "https://brightland.co/collections/best-sellers",
      "https://brightland.co/collections/extra-virgin-olive-oils",
      "https://brightland.co/collections/gifts-sets",
    ],
  },
  {
    slug: "kinto-usa",
    pages: [
      "https://kinto-usa.com/",
      "https://kinto-usa.com/collections/drinkware",
      "https://kinto-usa.com/collections/tableware",
      "https://kinto-usa.com/collections/new",
    ],
  },
  {
    slug: "pelacase",
    pages: [
      "https://pelacase.com/",
      "https://pelacase.com/collections/all",
      "https://pelacase.com/collections/phone-cases",
      "https://pelacase.com/collections/best-sellers",
    ],
  },
  {
    slug: "hexclad",
    pages: [
      "https://hexclad.com/",
      "https://hexclad.com/collections/all",
      "https://hexclad.com/collections/cookware",
      "https://hexclad.com/collections/top-picks",
    ],
  },
  {
    slug: "brooklinen",
    pages: [
      "https://brooklinen.com/",
      "https://brooklinen.com/collections/sheets",
      "https://brooklinen.com/collections/best-sellers",
      "https://brooklinen.com/collections/duvet-covers",
    ],
  },
];

async function dismissOverlays(page) {
  await page.keyboard.press("Escape").catch(() => {});
  await page.waitForTimeout(500);

  const selectors = [
    'button:has-text("Accept Cookies")',
    'button:has-text("Accept All")',
    'button:has-text("Accept all")',
    'button:has-text("Reject All")',
    'button:has-text("I Accept")',
    'button:has-text("Got it")',
    'button:has-text("No thanks")',
    'button:has-text("No Thanks")',
    'button:has-text("No, thanks")',
    'button:has-text("Maybe later")',
    'button:has-text("Close")',
    'button[aria-label*="Close" i]',
    'button[aria-label*="Dismiss" i]',
    '[class*="newsletter"] button[aria-label*="Close" i]',
    '[class*="popup"] button[class*="close" i]',
    ".needsclick [aria-label=\"Close dialog\"]",
    "#close-modal",
    ".modal-close",
    '[data-testid="close"]',
    '[aria-label="Close dialog"]',
  ];

  for (const sel of selectors) {
    try {
      const els = page.locator(sel);
      const count = await els.count();
      for (let i = 0; i < Math.min(count, 3); i++) {
        const el = els.nth(i);
        if (await el.isVisible({ timeout: 400 })) {
          await el.click({ timeout: 1000, force: true });
          await page.waitForTimeout(350);
        }
      }
    } catch {}
  }

  await page.keyboard.press("Escape").catch(() => {});
  await page.waitForTimeout(400);
}

const browser = await chromium.launch({ headless: true });

for (const site of SITES) {
  const dir = path.join(ROOT, site.slug);
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  let shot = 0;

  for (const url of site.pages) {
    if (shot >= 5) break;
    console.log(`Opening ${url}`);
    try {
      const res = await page.goto(url, {
        waitUntil: "domcontentloaded",
        timeout: 75000,
      });
      if (!res || res.status() >= 400) {
        console.warn(`Skip bad status ${url}`);
        continue;
      }

      await page.waitForTimeout(4000);
      await dismissOverlays(page);
      await page.waitForTimeout(1200);
      await dismissOverlays(page);

      // Stay at the top — hero / collection grid only
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(600);

      shot += 1;
      const file = path.join(dir, `${String(shot).padStart(2, "0")}.png`);
      await page.screenshot({ path: file, fullPage: false });
      console.log(`Saved ${file}`);
    } catch (err) {
      console.warn(`Failed ${url}:`, err.message);
    }
  }

  await context.close();
}

await browser.close();
console.log("Done");
