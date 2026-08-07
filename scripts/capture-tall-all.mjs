import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..", "public", "projects");

const WIDTH = 1440;
const HEIGHT = 4800;
const MAX_SHOTS = 4;

/** Home + key pages. Tall viewport shows the full project, not just the hero. */
const SITES = [
  {
    slug: "cyber-shoe-shop",
    urls: [
      "https://cyber-shoe-shop-group5-bcs12.vercel.app/",
      "https://cyber-shoe-shop-group5-bcs12.vercel.app/",
      "https://thucvan-portfolio.vercel.app/#projects",
    ],
  },
  {
    slug: "elegance",
    urls: ["https://elegance-jewellery.vercel.app/"],
  },
  {
    slug: "over-clocked",
    urls: [
      "https://over-clocked.vercel.app/",
      "https://patelmann.vercel.app/",
    ],
  },
  {
    slug: "voice-ai-agent",
    urls: [
      "https://apps.shopify.com/voice-ai-agent",
      "https://zalt.me/projects/ai-sales-agent-for-shopify",
    ],
  },
  {
    slug: "martian-horse",
    urls: [
      "https://martian-horse-front-end.onrender.com/",
      "https://kelvin-site.vercel.app/projects/martian-horse",
    ],
  },
  {
    slug: "forever",
    urls: [
      "https://forever-frontend-hazel.vercel.app/",
      "https://dhlananh-dev-portfolio.vercel.app/en/projects",
    ],
  },
  {
    slug: "flowerdose",
    urls: [
      "https://flowerdose.com.au/",
      "https://flowerdose.com.au/collections/all",
      "https://flowerdose.com.au/collections/bestsellers",
    ],
  },
  {
    slug: "thenervebrand",
    urls: [
      "https://thenervebrand.com/pages/neuropathycheckoutnosub",
      "https://thenervebrand.com/",
    ],
  },
  {
    slug: "livelle",
    urls: [
      "https://livelle.shop/pages/advertorial-1",
      "https://livelle.shop/",
    ],
  },
  {
    slug: "megannicius",
    urls: ["https://megannicius.wixstudio.com/jewelry"],
  },
  {
    slug: "thruhiminc",
    urls: ["https://thruhiminc.com/"],
  },
  {
    slug: "luxraid",
    urls: ["https://luxraid.com/"],
  },
  {
    slug: "minaal",
    urls: [
      "https://www.minaal.com/",
      "https://www.minaal.com/collections/bags",
      "https://www.minaal.com/collections/accessories",
      "https://www.minaal.com/products/carry-on-3-0",
    ],
  },
  {
    slug: "brightland",
    urls: [
      "https://brightland.co/",
      "https://brightland.co/collections/best-sellers",
      "https://brightland.co/collections/extra-virgin-olive-oils",
      "https://brightland.co/collections/gifts-sets",
    ],
  },
  {
    slug: "kinto-usa",
    urls: [
      "https://kinto-usa.com/",
      "https://kinto-usa.com/collections/drinkware",
      "https://kinto-usa.com/collections/tableware",
      "https://kinto-usa.com/collections/new",
    ],
  },
  {
    slug: "pelacase",
    urls: [
      "https://pelacase.com/",
      "https://pelacase.com/collections/phone-cases",
      "https://pelacase.com/collections/best-sellers",
      "https://pelacase.com/collections/all",
    ],
  },
  {
    slug: "hexclad",
    urls: [
      "https://hexclad.com/",
      "https://hexclad.com/collections/cookware",
      "https://hexclad.com/collections/top-picks",
      "https://hexclad.com/collections/all",
    ],
  },
  {
    slug: "brooklinen",
    urls: [
      "https://brooklinen.com/",
      "https://brooklinen.com/collections/sheets",
      "https://brooklinen.com/collections/best-sellers",
      "https://brooklinen.com/collections/duvet-covers",
    ],
  },
  {
    slug: "spellbrite",
    urls: [
      "https://www.spellbrite.com/",
      "https://www.spellbrite.com/shop/",
      "https://www.spellbrite.com/product-category/toothpaste/",
    ],
  },
  {
    slug: "porterandyork",
    urls: [
      "https://porterandyork.com/",
      "https://porterandyork.com/collections/all",
      "https://porterandyork.com/collections/steaks",
    ],
  },
  {
    slug: "shoprootscience",
    urls: [
      "https://www.shoprootscience.com/",
      "https://www.shoprootscience.com/collections/all",
      "https://www.shoprootscience.com/collections/best-sellers",
    ],
  },
  {
    slug: "aprilsoderstrom",
    urls: [
      "https://www.aprilsoderstrom.com/",
      "https://www.aprilsoderstrom.com/shop/",
      "https://www.aprilsoderstrom.com/product-category/new-arrivals/",
      "https://www.aprilsoderstrom.com/product-category/dresses/",
    ],
  },
  {
    slug: "scrubdaddy",
    urls: [
      "https://scrubdaddy.com/",
      "https://scrubdaddy.com/collections/all",
      "https://scrubdaddy.com/collections/best-sellers",
    ],
  },
  {
    slug: "thoo-wordpress-woocommerce",
    urls: ["https://thoo-wordpress-woocommerce.vercel.app/"],
  },
  {
    slug: "allbirds",
    urls: [
      "https://www.allbirds.com/",
      "https://www.allbirds.com/collections/mens",
      "https://www.allbirds.com/collections/womens",
      "https://www.allbirds.com/collections/sale",
    ],
  },
  {
    slug: "ugmonk",
    urls: [
      "https://ugmonk.com/",
      "https://ugmonk.com/collections/gather",
      "https://ugmonk.com/collections/analog",
      "https://ugmonk.com/collections/starter-kits",
    ],
  },
  {
    slug: "staycourant",
    urls: [
      "https://staycourant.com/",
      "https://staycourant.com/collections/all",
      "https://staycourant.com/collections/best-sellers",
    ],
  },
  {
    slug: "stevemadden",
    urls: [
      "https://www.stevemadden.com/",
      "https://www.stevemadden.com/collections/women",
      "https://www.stevemadden.com/collections/men",
      "https://www.stevemadden.com/collections/sale",
    ],
  },
  {
    slug: "beardbrand",
    urls: [
      "https://www.beardbrand.com/",
      "https://www.beardbrand.com/collections/all",
      "https://www.beardbrand.com/collections/best-sellers",
    ],
  },
  {
    slug: "mejuri",
    urls: [
      "https://mejuri.com/",
      "https://mejuri.com/collections/best-sellers",
      "https://mejuri.com/collections/earrings",
      "https://mejuri.com/collections/necklaces",
    ],
  },
  {
    slug: "nour-hammour",
    urls: [
      "https://nour-hammour.com/",
      "https://nour-hammour.com/collections/all",
      "https://nour-hammour.com/collections/new",
      "https://nour-hammour.com/collections/bags",
    ],
  },
  {
    slug: "factorbikes",
    urls: [
      "https://factorbikes.com/",
      "https://factorbikes.com/collections/all",
      "https://factorbikes.com/collections/road",
      "https://factorbikes.com/collections/gravel",
    ],
  },
  {
    slug: "kotn",
    urls: [
      "https://kotn.com/",
      "https://kotn.com/collections/all",
      "https://kotn.com/collections/womens",
      "https://kotn.com/collections/mens",
    ],
  },
  {
    slug: "bitetoothpastebits",
    urls: [
      "https://bitetoothpastebits.com/",
      "https://bitetoothpastebits.com/collections/all",
      "https://bitetoothpastebits.com/collections/best-sellers",
      "https://bitetoothpastebits.com/products/mint-toothpaste-bits",
    ],
  },
  {
    slug: "shocksurplus",
    urls: [
      "https://www.shocksurplus.com/",
      "https://www.shocksurplus.com/collections/all",
      "https://www.shocksurplus.com/collections/shocks",
      "https://www.shocksurplus.com/collections/springs",
    ],
  },
];

function hashFile(file) {
  return crypto.createHash("md5").update(fs.readFileSync(file)).digest("hex");
}

async function dismissOverlays(page) {
  await page.keyboard.press("Escape").catch(() => {});
  const selectors = [
    "#onetrust-accept-btn-handler",
    'button:has-text("Accept All")',
    'button:has-text("Accept all")',
    'button:has-text("Accept Cookies")',
    'button:has-text("Accept")',
    'button:has-text("Agree")',
    'button:has-text("Got it")',
    'button:has-text("No thanks")',
    'button:has-text("No Thanks")',
    'button:has-text("Maybe later")',
    'button[aria-label*="Close" i]',
    'button[aria-label*="Dismiss" i]',
    '[aria-label="Close dialog"]',
    ".needsclick [aria-label=\"Close dialog\"]",
  ];
  for (const sel of selectors) {
    try {
      const els = page.locator(sel);
      const count = await els.count();
      for (let i = 0; i < Math.min(count, 3); i++) {
        const el = els.nth(i);
        if (await el.isVisible({ timeout: 300 })) {
          await el.click({ timeout: 800, force: true });
          await page.waitForTimeout(250);
        }
      }
    } catch {}
  }
  await page.keyboard.press("Escape").catch(() => {});
}

async function lazyScroll(page) {
  await page.evaluate(async () => {
    const step = Math.max(600, Math.floor(window.innerHeight * 0.7));
    const maxY = Math.min(
      document.documentElement.scrollHeight,
      window.innerHeight
    );
    for (let y = 0; y < maxY; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(500);
}

async function captureUrl(page, url, outFile) {
  const res = await page.goto(url, {
    waitUntil: "domcontentloaded",
    timeout: 90000,
  });
  if (!res || res.status() >= 400) {
    throw new Error(`bad status ${res?.status()}`);
  }
  await page.waitForTimeout(3500);
  await dismissOverlays(page);
  await lazyScroll(page);
  await dismissOverlays(page);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(800);
  await page.screenshot({
    path: outFile,
    fullPage: false,
    type: "png",
  });
}

async function captureSite(browser, site) {
  const dir = path.join(ROOT, site.slug);
  fs.mkdirSync(dir, { recursive: true });

  const context = await browser.newContext({
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: 1,
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  });
  const page = await context.newPage();
  page.setDefaultTimeout(90000);

  const hashes = new Set();
  let shot = 0;
  const urls = [...site.urls];

  // If fewer than 4 unique URLs, scroll offsets on home to get distinct tall frames
  while (shot < MAX_SHOTS && urls.length > 0) {
    const url = urls.shift();
    const tmp = path.join(dir, `_tmp_${shot + 1}.png`);
    try {
      console.log(`[${site.slug}] ${url}`);
      await captureUrl(page, url, tmp);
      const h = hashFile(tmp);
      if (hashes.has(h)) {
        console.warn(`  duplicate visual, skip`);
        fs.unlinkSync(tmp);
        continue;
      }
      hashes.add(h);
      shot += 1;
      const dest = path.join(dir, `${String(shot).padStart(2, "0")}.png`);
      fs.renameSync(tmp, dest);
      console.log(`  saved ${path.basename(dest)} (${Math.round(fs.statSync(dest).size / 1024)}KB)`);
    } catch (err) {
      console.warn(`  failed: ${err.message}`);
      if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
    }
  }

  // Fill remaining shots with scrolled sections of the first successful page
  if (shot > 0 && shot < MAX_SHOTS && site.urls[0]) {
    try {
      await page.goto(site.urls[0], {
        waitUntil: "domcontentloaded",
        timeout: 90000,
      });
      await page.waitForTimeout(3000);
      await dismissOverlays(page);
      const scrollHeights = [0, 1200, 2400, 3600];
      for (const y of scrollHeights) {
        if (shot >= MAX_SHOTS) break;
        await page.evaluate((yy) => window.scrollTo(0, yy), y);
        await page.waitForTimeout(700);
        const dest = path.join(dir, `${String(shot + 1).padStart(2, "0")}.png`);
        const tmp = path.join(dir, `_tmp_scroll.png`);
        await page.screenshot({ path: tmp, fullPage: false });
        const h = hashFile(tmp);
        if (hashes.has(h)) {
          fs.unlinkSync(tmp);
          continue;
        }
        hashes.add(h);
        shot += 1;
        fs.renameSync(tmp, dest);
        console.log(`  scroll-fill ${path.basename(dest)}`);
      }
    } catch (err) {
      console.warn(`  scroll-fill failed: ${err.message}`);
    }
  }

  // Cover from 01
  const coverSrc = path.join(dir, "01.png");
  if (fs.existsSync(coverSrc)) {
    fs.copyFileSync(coverSrc, path.join(ROOT, `${site.slug}.png`));
  }

  await context.close();
  console.log(`[${site.slug}] done (${shot}/${MAX_SHOTS})`);
}

const only = process.argv.slice(2);
const targets = only.length
  ? SITES.filter((s) => only.includes(s.slug))
  : SITES;

console.log(`Capturing tall screenshots for ${targets.length} sites (${WIDTH}x${HEIGHT})`);

const browser = await chromium.launch({ headless: true });
for (const site of targets) {
  try {
    await captureSite(browser, site);
  } catch (err) {
    console.error(`[${site.slug}] FATAL:`, err.message);
  }
}
await browser.close();
console.log("All done");
