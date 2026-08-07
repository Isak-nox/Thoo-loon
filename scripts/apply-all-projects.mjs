import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const constantsPath = path.join(__dirname, "..", "src", "lib", "constants.ts");

function imgs(slug, n = 4) {
  return Array.from({ length: n }, (_, i) => `/projects/${slug}/0${i + 1}.png`);
}

function project({
  slug,
  title,
  role,
  demo,
  description,
  detailsIntro,
  category,
  technologies,
  keySkills,
  roleItems,
  techItems,
}) {
  return {
    image: `/projects/${slug}.png`,
    images: imgs(slug),
    platform: ["Website"],
    role,
    title,
    description,
    detailsIntro,
    category,
    detailSections: [
      { title: "Role and scope", items: roleItems },
      { title: "Technical work", items: techItems },
      {
        title: "Key skills",
        items: [technologies.join(", ")],
      },
    ],
    demo,
    technologies,
    keySkills,
  };
}

const PROJECTS = [
  project({
    slug: "cyber-shoe-shop",
    category: "Featured Builds",
    title: "Cyber Shoe Shop - Ecommerce Storefront",
    role: "Full Stack Developer - Product Catalog and Cart UX",
    demo: "https://cyber-shoe-shop-group5-bcs12.vercel.app/",
    description:
      "Modern footwear ecommerce storefront with catalog browsing, product detail pages, and cart-focused shopping flows.",
    detailsIntro:
      "Built a responsive shoe commerce experience focused on product discovery, clear PDP information, and smooth cart interactions.",
    technologies: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Ecommerce UX"],
    keySkills: ["Catalog UX", "PDP layout", "Cart flows", "Responsive UI"],
    roleItems: [
      "Delivered homepage, collection, and product page layouts for a footwear catalog.",
      "Focused on clear product presentation and mobile shopping usability.",
      "Supported demo-ready cart and browsing interactions.",
    ],
    techItems: [
      "Implemented responsive product grids and detail templates.",
      "Structured reusable UI for cards, filters, and cart states.",
      "Validated visual QA across desktop and mobile breakpoints.",
    ],
  }),
  project({
    slug: "elegance",
    category: "Featured Builds",
    title: "Elegance Jewellery - Luxury Storefront",
    role: "Frontend Developer - Brand Presentation and PDP UX",
    demo: "https://elegance-jewellery.vercel.app/",
    description:
      "Luxury jewellery storefront with refined product storytelling, collection browsing, and conversion-minded product pages.",
    detailsIntro:
      "Designed and built a polished jewellery commerce UI emphasizing imagery, category clarity, and premium product detail presentation.",
    technologies: ["React", "Next.js", "CSS", "Responsive Design", "Ecommerce UX"],
    keySkills: ["Luxury brand UI", "Collection browsing", "PDP storytelling", "Mobile polish"],
    roleItems: [
      "Owned visual presentation for jewellery collections and featured products.",
      "Balanced brand aesthetics with clear shopping paths.",
      "Prepared production-ready responsive layouts.",
    ],
    techItems: [
      "Built collection and PDP templates with image-forward layouts.",
      "Refined typography and spacing for a premium look.",
      "Optimized responsive behavior for dense product imagery.",
    ],
  }),
  project({
    slug: "over-clocked",
    category: "Featured Builds",
    title: "Over Clocked - Gaming Hardware Store",
    role: "Full Stack Developer - Catalog and Merchandising UI",
    demo: "https://over-clocked.vercel.app/",
    description:
      "Gaming hardware ecommerce experience with category merchandising, product specs presentation, and high-intent shopping layouts.",
    detailsIntro:
      "Developed a performance-oriented hardware storefront UI for browsing components, comparing products, and moving quickly to purchase.",
    technologies: ["React", "Next.js", "JavaScript", "Catalog UX", "Responsive Design"],
    keySkills: ["Tech catalog UX", "Spec presentation", "Category navigation", "CTA hierarchy"],
    roleItems: [
      "Delivered category and product templates for gaming hardware.",
      "Emphasized specs clarity and purchase intent on PDPs.",
      "Supported responsive shopping journeys end to end.",
    ],
    techItems: [
      "Implemented reusable product cards and category sections.",
      "Structured product detail content for technical shoppers.",
      "Tuned layout density for desktop and mobile catalogs.",
    ],
  }),
  project({
    slug: "voice-ai-agent",
    category: "Featured Builds",
    title: "Voice AI Agent - Shopify App",
    role: "Shopify App Developer - AI Commerce Assistant",
    demo: "https://apps.shopify.com/voice-ai-agent",
    description:
      "Shopify app concept for an AI sales assistant that supports product discovery, shopper questions, and conversion-oriented storefront help.",
    detailsIntro:
      "App-oriented Shopify work covering merchant-facing positioning, AI assistant flows, and storefront integration patterns for conversational commerce.",
    technologies: ["Shopify App", "AI Assistant", "JavaScript", "Storefront UX", "App Bridge"],
    keySkills: ["Shopify app UX", "Conversational commerce", "Merchant onboarding", "AI-assisted shopping"],
    roleItems: [
      "Mapped AI assistant use cases for Shopify merchants and shoppers.",
      "Presented product discovery and sales-support interaction patterns.",
      "Aligned app messaging with Shopify App Store expectations.",
    ],
    techItems: [
      "Documented integration patterns for storefront AI assistance.",
      "Focused on clear merchant value and shopper conversation flows.",
      "Connected product narrative to Shopify app distribution context.",
    ],
  }),
  project({
    slug: "martian-horse",
    category: "Featured Builds",
    title: "Martian Horse - Creative Ecommerce Front End",
    role: "Frontend Developer - Brand Storefront Build",
    demo: "https://martian-horse-front-end.onrender.com/",
    description:
      "Creative brand storefront with expressive product presentation, collection browsing, and responsive ecommerce UI.",
    detailsIntro:
      "Front-end build for a distinctive commerce brand, balancing visual identity with usable product discovery and shopping flows.",
    technologies: ["React", "JavaScript", "CSS", "Ecommerce UX", "Responsive Design"],
    keySkills: ["Brand UI systems", "Product grids", "Responsive layouts", "Front-end delivery"],
    roleItems: [
      "Built storefront pages that reflect a strong creative identity.",
      "Kept shopping paths clear despite expressive visuals.",
      "Delivered responsive layouts for key commerce templates.",
    ],
    techItems: [
      "Implemented homepage, collection, and product UI modules.",
      "Structured reusable components for cards and section layouts.",
      "Validated cross-device presentation and interaction states.",
    ],
  }),
  project({
    slug: "forever",
    category: "Featured Builds",
    title: "Forever - Fashion Ecommerce Front End",
    role: "Frontend Developer - Fashion Catalog UX",
    demo: "https://forever-frontend-hazel.vercel.app/",
    description:
      "Fashion ecommerce front end focused on collection browsing, product cards, and mobile-first shopping presentation.",
    detailsIntro:
      "Implemented a fashion retail UI with clean catalog layouts, product detail hierarchy, and responsive shopping interactions.",
    technologies: ["React", "JavaScript", "CSS", "Fashion UX", "Responsive Design"],
    keySkills: ["Fashion PLP/PDP", "Card systems", "Mobile commerce", "UI polish"],
    roleItems: [
      "Delivered fashion collection and product browsing experiences.",
      "Prioritized mobile shopping clarity and visual hierarchy.",
      "Supported reusable UI patterns across catalog pages.",
    ],
    techItems: [
      "Built product listing and detail templates.",
      "Refined spacing, imagery, and CTA placement for conversion.",
      "Checked responsive behavior across key shopping breakpoints.",
    ],
  }),
  project({
    slug: "flowerdose",
    category: "Featured Builds",
    title: "Flowerdose - Floral Ecommerce Store",
    role: "Shopify Developer - Theme Customization and CRO",
    demo: "https://flowerdose.com.au/",
    description:
      "Floral ecommerce storefront work covering merchandising sections, product presentation, and mobile conversion paths.",
    detailsIntro:
      "Theme and storefront refinement for a floral brand, with attention to campaign-ready sections and clear product-to-cart journeys.",
    technologies: ["Shopify", "Liquid", "JavaScript", "CRO", "Responsive Design"],
    keySkills: ["Theme sections", "Floral merchandising", "Mobile CRO", "Visual QA"],
    roleItems: [
      "Supported storefront presentation for seasonal floral offers.",
      "Improved clarity on collection and product templates.",
      "Focused on mobile usability and conversion cues.",
    ],
    techItems: [
      "Customized Liquid sections for homepage and product storytelling.",
      "Refined product cards and PDP content hierarchy.",
      "Validated responsive shopping flows before release.",
    ],
  }),
  project({
    slug: "thenervebrand",
    category: "Featured Builds",
    title: "The Nerve Brand - Checkout Landing Page",
    role: "Shopify Developer - High-Intent Landing and Checkout UX",
    demo: "https://thenervebrand.com/pages/neuropathycheckoutnosub",
    description:
      "High-intent Shopify landing and checkout-oriented page focused on offer clarity, trust signals, and conversion flow.",
    detailsIntro:
      "Built and refined an advertorial-style commerce landing experience designed to move shoppers quickly through offer understanding to checkout.",
    technologies: ["Shopify", "Liquid", "JavaScript", "CRO", "Landing Pages"],
    keySkills: ["Landing page CRO", "Offer hierarchy", "Trust messaging", "Checkout intent"],
    roleItems: [
      "Structured a conversion-first landing layout for a targeted offer.",
      "Emphasized trust, benefits, and clear purchase CTAs.",
      "Aligned page flow with checkout intent.",
    ],
    techItems: [
      "Implemented Shopify page sections for advertorial content.",
      "Tuned CTA placement and mobile reading order.",
      "Checked form and checkout handoff usability.",
    ],
  }),
  project({
    slug: "livelle",
    category: "Featured Builds",
    title: "Livelle - Advertorial Commerce Page",
    role: "Shopify Developer - Advertorial Conversion Pages",
    demo: "https://livelle.shop/pages/advertorial-1",
    description:
      "Shopify advertorial page focused on long-form offer storytelling, social proof, and conversion-oriented CTA structure.",
    detailsIntro:
      "Delivered an advertorial commerce template that balances persuasive content with clear product offer and purchase actions.",
    technologies: ["Shopify", "Liquid", "JavaScript", "CRO", "Content UX"],
    keySkills: ["Advertorial layouts", "Long-form CRO", "CTA systems", "Mobile reading flow"],
    roleItems: [
      "Owned layout and interaction for a long-form offer page.",
      "Kept persuasive content readable without losing conversion focus.",
      "Optimized for mobile scrolling and repeated CTA access.",
    ],
    techItems: [
      "Built Shopify page sections for narrative and offer blocks.",
      "Organized proof points, benefits, and purchase CTAs.",
      "Validated mobile spacing and click targets.",
    ],
  }),
  project({
    slug: "megannicius",
    category: "Featured Builds",
    title: "Megan Nicius - Jewelry Brand Site",
    role: "Frontend Developer - Brand Site and Product Presentation",
    demo: "https://megannicius.wixstudio.com/jewelry",
    description:
      "Jewelry brand site with elegant product presentation, collection storytelling, and responsive brand pages.",
    detailsIntro:
      "Front-end presentation work for a jewelry brand, emphasizing visual polish, product imagery, and clear browsing structure.",
    technologies: ["Wix Studio", "Responsive Design", "Brand UI", "Ecommerce UX"],
    keySkills: ["Brand storytelling", "Product imagery", "Responsive polish", "Collection layout"],
    roleItems: [
      "Delivered brand-forward jewelry pages and product presentation.",
      "Balanced aesthetic detail with usable navigation.",
      "Ensured responsive presentation across devices.",
    ],
    techItems: [
      "Structured collection and product presentation sections.",
      "Refined spacing and typography for a luxury feel.",
      "Checked mobile and desktop visual consistency.",
    ],
  }),
  project({
    slug: "thruhiminc",
    category: "Featured Builds",
    title: "Thru Him Inc - Faith Brand Storefront",
    role: "Shopify Developer - Theme Build and Brand Storefront",
    demo: "https://thruhiminc.com/",
    description:
      "Brand storefront work covering theme presentation, product merchandising, and responsive shopping templates.",
    detailsIntro:
      "Shopify theme customization for a faith-focused brand, with reusable sections and clear product browsing journeys.",
    technologies: ["Shopify", "Liquid", "JavaScript", "Theme Development", "Responsive Design"],
    keySkills: ["Theme customization", "Brand merchandising", "Section systems", "Mobile UX"],
    roleItems: [
      "Supported storefront theme presentation for brand campaigns.",
      "Improved product and collection clarity.",
      "Delivered responsive shopping templates.",
    ],
    techItems: [
      "Customized Liquid sections and templates.",
      "Refined homepage and product storytelling modules.",
      "Performed visual QA across key storefront pages.",
    ],
  }),
  project({
    slug: "luxraid",
    category: "Featured Builds",
    title: "Luxraid - Premium Commerce Storefront",
    role: "Shopify Developer - Premium Theme and Conversion UX",
    demo: "https://luxraid.com/",
    description:
      "Premium ecommerce storefront work focused on polished product presentation, merchandising sections, and conversion-minded UX.",
    detailsIntro:
      "Theme and storefront engineering for a premium brand, covering homepage storytelling, collections, and product detail clarity.",
    technologies: ["Shopify", "Liquid", "JavaScript", "CRO", "Responsive Design"],
    keySkills: ["Premium UI", "Merchandising sections", "PDP hierarchy", "Conversion UX"],
    roleItems: [
      "Delivered premium storefront presentation across key templates.",
      "Aligned merchandising modules with brand and conversion goals.",
      "Prioritized mobile shopping clarity.",
    ],
    techItems: [
      "Built and refined Liquid sections for campaigns and catalogs.",
      "Improved PDP content structure and CTA prominence.",
      "Optimized responsive layouts for image-forward pages.",
    ],
  }),

  project({
    slug: "minaal",
    category: "Shopify Portfolio",
    title: "Minaal - Travel Commerce Storefront",
    role: "Lead Shopify Developer - Theme Architecture and Conversion UX",
    demo: "https://www.minaal.com/",
    description:
      "Shopify storefront patterns for a travel brand, covering hero merchandising, bag collections, product education, and mobile conversion paths.",
    detailsIntro:
      "Lead Shopify Developer scope for travel commerce: OS 2.0 sections, Liquid templates, and conversion-minded product discovery.",
    technologies: ["Shopify Plus", "Liquid", "Online Store 2.0", "JavaScript", "CRO"],
    keySkills: ["Theme architecture", "Travel catalog UX", "PDP education", "Mobile CRO"],
    roleItems: [
      "Delivered theme architecture for homepage, collections, and PDPs.",
      "Partnered on campaign-ready merchandising modules.",
      "Prioritized conversion on discovery to ATC paths.",
    ],
    techItems: [
      "Built reusable Liquid sections and product card systems.",
      "Structured collection templates for travel categories.",
      "Optimized assets and responsive behavior for catalog pages.",
    ],
  }),
  project({
    slug: "brightland",
    category: "Shopify Portfolio",
    title: "Brightland - DTC Pantry Brand",
    role: "Lead Shopify Developer - Merchandising Systems and Bundle UX",
    demo: "https://brightland.co/",
    description:
      "Shopify merchandising work for a DTC pantry brand, including collection filters, product badges, bundles, and campaign sections.",
    detailsIntro:
      "Storefront engineering for brand-forward grocery commerce with Liquid sections, bundle UX, and conversion signals.",
    technologies: ["Shopify", "Liquid", "JavaScript", "CRO", "Theme Sections"],
    keySkills: ["Bundle UX", "Merchandising badges", "Campaign sections", "Mobile conversion"],
    roleItems: [
      "Implemented merchandising systems for collections and gifts.",
      "Supported bundle and subscription messaging patterns.",
      "Kept conversion signals clear on mobile.",
    ],
    techItems: [
      "Built collection navigation and product card schemas.",
      "Developed bundle and campaign landing sections.",
      "Ran visual QA against brand design direction.",
    ],
  }),
  project({
    slug: "kinto-usa",
    category: "Shopify Portfolio",
    title: "Kinto USA - Lifestyle Catalog",
    role: "Lead Shopify Developer - Brand-Faithful Theme Customization",
    demo: "https://kinto-usa.com/",
    description:
      "Minimal lifestyle Shopify catalog with careful theme customization, clean PLPs, and brand-faithful spacing and typography.",
    detailsIntro:
      "Theme customization for a restrained design system: whitespace, muted chrome, and clear drinkware and tableware browsing.",
    technologies: ["Shopify", "Liquid", "CSS", "Figma", "Responsive Design"],
    keySkills: ["Minimal UI systems", "PLP templates", "Theme settings", "Design QA"],
    roleItems: [
      "Customized theme layout for a minimal brand system.",
      "Delivered clean collection and product browsing.",
      "Preserved design fidelity across breakpoints.",
    ],
    techItems: [
      "Implemented homepage and collection templates.",
      "Standardized reusable product grid components.",
      "Validated spacing and typography against design comps.",
    ],
  }),
  project({
    slug: "pelacase",
    category: "Shopify Portfolio",
    title: "Pela Case - High-Volume Device Catalog",
    role: "Lead Shopify Developer - Guided Shopping and Catalog Performance",
    demo: "https://pelacase.com/",
    description:
      "Shopify Plus catalog work for a high-SKU device accessories brand, including guided shopping, filters, and performance-minded PLPs.",
    detailsIntro:
      "Engineering for dense collections: device fit flows, filter UX, promo badges, and Core Web Vitals on image-heavy templates.",
    technologies: ["Shopify Plus", "Liquid", "JavaScript", "Collection UX", "Core Web Vitals"],
    keySkills: ["Guided shopping", "High-SKU PLPs", "Filter UX", "Catalog performance"],
    roleItems: [
      "Owned guided shopping and dense catalog presentation.",
      "Supported promo badge and campaign merchandising.",
      "Prioritized performance on large collection pages.",
    ],
    techItems: [
      "Implemented filter and device-fit browsing patterns.",
      "Optimized image-heavy PLP templates.",
      "Hardened reusable components for frequent campaigns.",
    ],
  }),
  project({
    slug: "hexclad",
    category: "Shopify Portfolio",
    title: "HexClad - Premium Cookware Storefront",
    role: "Lead Shopify Developer - Premium PDP and Campaign Storefronts",
    demo: "https://hexclad.com/",
    description:
      "Premium Shopify Plus cookware storefront covering hero storytelling, bundle merchandising, education modules, and campaign landings.",
    detailsIntro:
      "Media-heavy theme work for premium cookware: heroes, multi-level nav, sets, and conversion-focused PDP education.",
    technologies: ["Shopify Plus", "Liquid", "JavaScript", "CRO", "Core Web Vitals"],
    keySkills: ["Premium PDP", "Bundle modules", "Campaign landings", "Media performance"],
    roleItems: [
      "Delivered premium homepage and product storytelling.",
      "Supported set and bundle merchandising patterns.",
      "Aligned campaign landings with promo calendars.",
    ],
    techItems: [
      "Built hero, education, and sale sections in Liquid.",
      "Structured multi-level navigation for cookware discovery.",
      "Optimized media delivery for Core Web Vitals.",
    ],
  }),
  project({
    slug: "brooklinen",
    category: "Shopify Portfolio",
    title: "Brooklinen - DTC Bedding Commerce",
    role: "Lead Shopify Developer - Guided Commerce and Sale Conversion",
    demo: "https://brooklinen.com/",
    description:
      "Shopify Plus bedding commerce with guided shopping modules, filtered collections, sale heroes, and conversion-minded PDPs.",
    detailsIntro:
      "Large DTC storefront patterns for education-led shopping, promotional PLPs, and reliable campaign theme updates.",
    technologies: ["Shopify Plus", "Liquid", "JavaScript", "CRO", "Responsive Design"],
    keySkills: ["Guided shopping", "Sale PLPs", "PDP hierarchy", "Campaign releases"],
    roleItems: [
      "Implemented guided shopping and educational modules.",
      "Supported sale and evergreen collection templates.",
      "Kept theme changes release-safe for frequent campaigns.",
    ],
    techItems: [
      "Built filterable collection layouts and promo banners.",
      "Refined PDP offer, rating, and swatch hierarchy.",
      "Performance-checked content-heavy commercial pages.",
    ],
  }),

  project({
    slug: "spellbrite",
    category: "WordPress / WooCommerce",
    title: "Spellbrite - WooCommerce Storefront",
    role: "WooCommerce Developer - Theme and Catalog UX",
    demo: "https://www.spellbrite.com/",
    description:
      "WordPress WooCommerce storefront work covering product catalog presentation, theme customization, and responsive shopping flows.",
    detailsIntro:
      "WooCommerce theme and catalog UX for a consumer brand, with focus on product discovery and mobile purchase paths.",
    technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "Responsive Design"],
    keySkills: ["WooCommerce themes", "Catalog UX", "Checkout readiness", "Mobile storefront"],
    roleItems: [
      "Customized WooCommerce templates for catalog and product pages.",
      "Improved browsing clarity and mobile usability.",
      "Supported storefront presentation for promotions.",
    ],
    techItems: [
      "Refined product listing and detail templates.",
      "Adjusted theme styles for brand consistency.",
      "Validated cart and responsive shopping behavior.",
    ],
  }),
  project({
    slug: "porterandyork",
    category: "WordPress / WooCommerce",
    title: "Porter & York - Premium Food Commerce",
    role: "WooCommerce Developer - Premium Catalog Presentation",
    demo: "https://porterandyork.com/",
    description:
      "Premium WooCommerce food commerce with refined product presentation, category browsing, and brand-forward storefront UX.",
    detailsIntro:
      "Theme and catalog work for a premium food retailer on WordPress WooCommerce, emphasizing imagery and clear purchase paths.",
    technologies: ["WordPress", "WooCommerce", "CSS", "JavaScript", "Ecommerce UX"],
    keySkills: ["Premium PLP/PDP", "Category merchandising", "Brand UI", "Responsive QA"],
    roleItems: [
      "Delivered premium catalog and product presentation.",
      "Supported category merchandising for food products.",
      "Kept shopping flows clear on mobile.",
    ],
    techItems: [
      "Customized WooCommerce templates and styles.",
      "Structured product cards and detail hierarchy.",
      "Checked responsive layouts across key pages.",
    ],
  }),
  project({
    slug: "shoprootscience",
    category: "WordPress / WooCommerce",
    title: "Root Science - Wellness WooCommerce Store",
    role: "WooCommerce Developer - Brand Storefront and PDP UX",
    demo: "https://www.shoprootscience.com/",
    description:
      "Wellness brand WooCommerce storefront covering collection browsing, product education, and conversion-minded product pages.",
    detailsIntro:
      "WordPress WooCommerce development for a wellness brand with education-led PDPs and clean catalog presentation.",
    technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "CRO"],
    keySkills: ["Wellness PDP education", "Collection UX", "Theme customization", "CRO"],
    roleItems: [
      "Owned storefront presentation for wellness products.",
      "Improved product education and offer clarity.",
      "Supported responsive shopping journeys.",
    ],
    techItems: [
      "Built and refined WooCommerce templates.",
      "Organized PDP content for ingredients and benefits.",
      "Validated mobile conversion cues and CTAs.",
    ],
  }),
  project({
    slug: "aprilsoderstrom",
    category: "WordPress / WooCommerce",
    title: "April Soderstrom - Fashion WooCommerce",
    role: "WooCommerce Developer - Fashion Theme and Merchandising",
    demo: "https://www.aprilsoderstrom.com/",
    description:
      "Fashion WooCommerce storefront with collection merchandising, product grids, and brand-led shopping templates.",
    detailsIntro:
      "Theme customization for a fashion retailer on WooCommerce, covering new arrivals, category browsing, and PDP presentation.",
    technologies: ["WordPress", "WooCommerce", "CSS", "JavaScript", "Fashion UX"],
    keySkills: ["Fashion collections", "Product grids", "Theme styling", "Mobile fashion UX"],
    roleItems: [
      "Delivered fashion collection and product templates.",
      "Supported new arrivals and category merchandising.",
      "Prioritized mobile shopping presentation.",
    ],
    techItems: [
      "Customized WooCommerce shop and product templates.",
      "Refined card layouts and visual hierarchy.",
      "Performed responsive visual QA.",
    ],
  }),
  project({
    slug: "scrubdaddy",
    category: "WordPress / WooCommerce",
    title: "Scrub Daddy - Consumer Brand Commerce",
    role: "WooCommerce Developer - High-Traffic Catalog UX",
    demo: "https://scrubdaddy.com/",
    description:
      "High-visibility consumer brand WooCommerce work covering product merchandising, promotional presentation, and conversion paths.",
    detailsIntro:
      "Storefront support for a popular consumer brand: catalog clarity, promo modules, and reliable shopping templates.",
    technologies: ["WordPress", "WooCommerce", "JavaScript", "CRO", "Responsive Design"],
    keySkills: ["Promo merchandising", "Catalog clarity", "Conversion UX", "Responsive templates"],
    roleItems: [
      "Supported high-traffic catalog and promo presentation.",
      "Improved product discovery and offer messaging.",
      "Kept CTAs clear across devices.",
    ],
    techItems: [
      "Refined WooCommerce listing and product pages.",
      "Tuned promotional modules for campaign readiness.",
      "Checked responsive and conversion-critical flows.",
    ],
  }),
  project({
    slug: "thoo-wordpress-woocommerce",
    category: "WordPress / WooCommerce",
    title: "Thoo WooCommerce Demo - Theme Showcase",
    role: "WooCommerce Developer - Theme Architecture Demo",
    demo: "https://thoo-wordpress-woocommerce.vercel.app/",
    description:
      "Personal WooCommerce theme showcase demonstrating catalog layouts, product detail patterns, and responsive commerce UI.",
    detailsIntro:
      "Demo storefront highlighting WooCommerce theme capabilities, reusable templates, and clean shopping UX patterns.",
    technologies: ["WordPress", "WooCommerce", "PHP", "CSS", "Responsive Design"],
    keySkills: ["Theme architecture", "Demo catalog UX", "Template systems", "UI polish"],
    roleItems: [
      "Built a demo WooCommerce storefront for portfolio presentation.",
      "Showcased catalog, PDP, and cart-ready templates.",
      "Documented reusable theme patterns.",
    ],
    techItems: [
      "Implemented shop, product, and content templates.",
      "Styled responsive commerce components.",
      "Prepared screenshots across key shopping states.",
    ],
  }),

  project({
    slug: "allbirds",
    category: "Shopify Storefronts",
    title: "Allbirds - Sustainable Footwear Storefront",
    role: "Lead Shopify Developer - Theme Architecture and Conversion UX",
    demo: "https://www.allbirds.com/",
    description:
      "Shopify Plus storefront work for a sustainability-led footwear brand, covering hero merchandising, gender collections, filters, and product discovery.",
    detailsIntro:
      "Theme architecture and conversion UX for footwear commerce with Liquid, Online Store 2.0, and collection-focused shopping paths.",
    technologies: ["Shopify Plus", "Liquid", "Online Store 2.0", "JavaScript", "Collection UX"],
    keySkills: ["Footwear PLP/PDP", "Filter systems", "Hero merchandising", "Conversion UX"],
    roleItems: [
      "Delivered collection and product discovery patterns.",
      "Supported gender and category merchandising templates.",
      "Focused on conversion from browse to PDP.",
    ],
    techItems: [
      "Built Liquid sections for heroes and collections.",
      "Refined filter and product card presentation.",
      "Validated responsive shopping journeys.",
    ],
  }),
  project({
    slug: "ugmonk",
    category: "Shopify Storefronts",
    title: "Ugmonk - Design-Led Lifestyle Commerce",
    role: "Lead Shopify Developer - Brand Theme and Product Systems",
    demo: "https://ugmonk.com/",
    description:
      "Design-led Shopify storefront with careful product systems, collection storytelling, and brand-faithful theme presentation.",
    detailsIntro:
      "Theme customization for a design-focused lifestyle brand with clean PLPs, product kits, and restrained visual hierarchy.",
    technologies: ["Shopify", "Liquid", "JavaScript", "Figma", "Responsive Design"],
    keySkills: ["Brand theme systems", "Kit merchandising", "Clean PLPs", "Design QA"],
    roleItems: [
      "Owned brand-faithful theme presentation.",
      "Supported kit and collection merchandising.",
      "Kept product discovery calm and clear.",
    ],
    techItems: [
      "Implemented Liquid templates for lifestyle collections.",
      "Structured reusable product card patterns.",
      "Checked spacing and typography consistency.",
    ],
  }),
  project({
    slug: "staycourant",
    category: "Shopify Storefronts",
    title: "Courant - Lifestyle Product Storefront",
    role: "Lead Shopify Developer - Product Storytelling and CRO",
    demo: "https://staycourant.com/",
    description:
      "Shopify storefront for lifestyle products with strong product storytelling, feature education, and conversion-oriented PDPs.",
    detailsIntro:
      "Storefront engineering focused on product education modules, polished PDP hierarchy, and mobile conversion paths.",
    technologies: ["Shopify", "Liquid", "JavaScript", "CRO", "Responsive Design"],
    keySkills: ["Product storytelling", "Feature education", "PDP CRO", "Mobile UX"],
    roleItems: [
      "Delivered storytelling-led product pages.",
      "Supported feature education and trust content.",
      "Prioritized mobile conversion clarity.",
    ],
    techItems: [
      "Built Liquid sections for product narratives.",
      "Refined PDP CTA and content hierarchy.",
      "Validated responsive presentation.",
    ],
  }),
  project({
    slug: "stevemadden",
    category: "Shopify Storefronts",
    title: "Steve Madden - Fashion Footwear Commerce",
    role: "Lead Shopify Developer - High-Volume Fashion Catalog",
    demo: "https://www.stevemadden.com/",
    description:
      "High-volume fashion footwear Shopify storefront covering seasonal collections, dense PLPs, and promotional merchandising.",
    detailsIntro:
      "Catalog and theme work for a large fashion footwear brand with campaign readiness and clear product discovery.",
    technologies: ["Shopify Plus", "Liquid", "JavaScript", "Collection UX", "CRO"],
    keySkills: ["Fashion PLPs", "Seasonal campaigns", "Dense catalogs", "Promo merchandising"],
    roleItems: [
      "Supported high-volume collection and promo templates.",
      "Improved product discovery across seasonal drops.",
      "Kept mobile browsing usable at catalog scale.",
    ],
    techItems: [
      "Refined Liquid collection and product templates.",
      "Tuned card density and promo messaging.",
      "Checked responsive behavior on key shopping pages.",
    ],
  }),
  project({
    slug: "beardbrand",
    category: "Shopify Storefronts",
    title: "Beardbrand - DTC Grooming Storefront",
    role: "Lead Shopify Developer - Merchandising and Subscription UX",
    demo: "https://www.beardbrand.com/",
    description:
      "DTC grooming Shopify storefront with merchandising systems, product education, and conversion-focused shopping flows.",
    detailsIntro:
      "Theme and CRO work for grooming commerce: collections, education content, and clear paths from browse to purchase.",
    technologies: ["Shopify", "Liquid", "JavaScript", "CRO", "Responsive Design"],
    keySkills: ["Grooming catalog UX", "Education modules", "Merchandising", "Mobile CRO"],
    roleItems: [
      "Delivered merchandising and education-led storefront modules.",
      "Supported product discovery for grooming lines.",
      "Focused on conversion cues on mobile.",
    ],
    techItems: [
      "Built Liquid sections for collections and PDPs.",
      "Organized education and offer content.",
      "Validated shopping flows across devices.",
    ],
  }),
  project({
    slug: "mejuri",
    category: "Shopify Storefronts",
    title: "Mejuri - Fine Jewelry Commerce",
    role: "Lead Shopify Developer - Luxury Catalog and PDP UX",
    demo: "https://mejuri.com/",
    description:
      "Fine jewelry Shopify Plus storefront covering luxury collection browsing, refined PDPs, and conversion-minded product presentation.",
    detailsIntro:
      "Theme architecture for jewelry commerce with image-forward collections, polished PDP hierarchy, and mobile shopping clarity.",
    technologies: ["Shopify Plus", "Liquid", "JavaScript", "CRO", "Responsive Design"],
    keySkills: ["Luxury PLP/PDP", "Jewelry merchandising", "Image-forward UX", "Mobile conversion"],
    roleItems: [
      "Owned luxury collection and product presentation patterns.",
      "Supported refined merchandising for jewelry categories.",
      "Prioritized mobile polish and purchase clarity.",
    ],
    techItems: [
      "Implemented Liquid templates for jewelry catalogs.",
      "Refined PDP imagery and content hierarchy.",
      "Optimized responsive layouts for dense product photography.",
    ],
  }),

  project({
    slug: "nour-hammour",
    category: "Recent Storefronts",
    title: "Nour Hammour - Fashion Storefront",
    role: "Lead Shopify Developer - Theme Architecture and Storefront UX",
    demo: "https://nour-hammour.com/",
    description:
      "Shopify storefront work for a fashion brand, covering theme sections, collection browsing, product presentation, and mobile shopping UX.",
    detailsIntro:
      "Lead Shopify Developer patterns for a fashion ecommerce storefront using Liquid, Online Store 2.0 sections, and conversion-minded product discovery.",
    technologies: ["Shopify Plus", "Liquid", "Online Store 2.0", "JavaScript", "CRO"],
    keySkills: ["Theme architecture", "Fashion collection UX", "PDP presentation", "Mobile storefront UX"],
    roleItems: [
      "Delivered theme architecture for homepage, collections, and product pages.",
      "Partnered with design and merchandising on campaign-ready modules.",
      "Prioritized mobile usability and clear shopping paths.",
    ],
    techItems: [
      "Built reusable Liquid sections, blocks, and templates.",
      "Refined collection and PDP layouts for product discovery.",
      "Optimized frontend assets and responsive behavior.",
    ],
  }),
  project({
    slug: "factorbikes",
    category: "Recent Storefronts",
    title: "Factor Bikes - Performance Cycling Store",
    role: "Lead Shopify Developer - Catalog UX and Performance",
    demo: "https://factorbikes.com/",
    description:
      "Shopify Plus catalog and storefront work for a performance bike brand, including product education, collection templates, and high-intent shopping flows.",
    detailsIntro:
      "Storefront engineering for a technical product catalog with Liquid theme systems, merchandising modules, and performance-minded media delivery.",
    technologies: ["Shopify Plus", "Liquid", "JavaScript", "Collection UX", "Core Web Vitals"],
    keySkills: ["Technical catalog UX", "Product education modules", "Theme performance", "Responsive storefront QA"],
    roleItems: [
      "Owned catalog and product education UX for cycling storefronts.",
      "Supported merchandising updates through reusable sections.",
      "Focused on clarity for complex product options.",
    ],
    techItems: [
      "Implemented Liquid collection and PDP templates.",
      "Built reusable sections for product storytelling.",
      "Optimized image-heavy templates for Core Web Vitals.",
    ],
  }),
  project({
    slug: "kotn",
    category: "Recent Storefronts",
    title: "Kotn - Sustainable Fashion Storefront",
    role: "Lead Shopify Developer - Brand Theme and Merchandising",
    demo: "https://kotn.com/",
    description:
      "Shopify storefront work for a sustainable fashion brand with collection storytelling, product discovery, and brand-led theme presentation.",
    detailsIntro:
      "Theme and merchandising systems for fashion commerce using Liquid sections, clean PLPs, and conversion-minded product pages.",
    technologies: ["Shopify Plus", "Liquid", "Online Store 2.0", "JavaScript", "CRO"],
    keySkills: ["Fashion merchandising", "Brand theme systems", "Collection UX", "Mobile shopping"],
    roleItems: [
      "Delivered brand-led collection and product templates.",
      "Supported sustainable fashion storytelling modules.",
      "Kept mobile shopping paths clear.",
    ],
    techItems: [
      "Built Liquid OS 2.0 sections for campaigns and catalogs.",
      "Refined product card and PDP hierarchy.",
      "Validated responsive QA across key templates.",
    ],
  }),
  project({
    slug: "bitetoothpastebits",
    category: "Recent Storefronts",
    title: "Bite - DTC Oral Care Storefront",
    role: "Lead Shopify Developer - Subscription and Conversion UX",
    demo: "https://bitetoothpastebits.com/",
    description:
      "DTC Shopify storefront for oral care with product education, offer clarity, and conversion-oriented shopping templates.",
    detailsIntro:
      "Storefront engineering for DTC health commerce: education-led PDPs, merchandising sections, and mobile conversion focus.",
    technologies: ["Shopify Plus", "Liquid", "JavaScript", "CRO", "Responsive Design"],
    keySkills: ["DTC PDP education", "Offer clarity", "Merchandising sections", "Mobile CRO"],
    roleItems: [
      "Delivered education-led product and offer presentation.",
      "Supported campaign merchandising modules.",
      "Prioritized conversion on mobile shopping paths.",
    ],
    techItems: [
      "Implemented Liquid sections for homepage and PDPs.",
      "Structured offer and education content hierarchy.",
      "Optimized responsive shopping templates.",
    ],
  }),
  project({
    slug: "shocksurplus",
    category: "Recent Storefronts",
    title: "Shock Surplus - Performance Parts Catalog",
    role: "Lead Shopify Developer - Technical Catalog and Filters",
    demo: "https://www.shocksurplus.com/",
    description:
      "Shopify Plus technical catalog for performance parts with filter-heavy browsing, product specs, and high-intent purchase flows.",
    detailsIntro:
      "Catalog engineering for a complex parts storefront: filters, technical PDPs, and performance-minded collection templates.",
    technologies: ["Shopify Plus", "Liquid", "JavaScript", "Collection UX", "Core Web Vitals"],
    keySkills: ["Technical filters", "Specs-led PDPs", "High-SKU catalogs", "Storefront performance"],
    roleItems: [
      "Owned filter and technical catalog presentation.",
      "Supported specs-heavy product detail pages.",
      "Focused on performance for dense collection views.",
    ],
    techItems: [
      "Built Liquid templates for filtered collections.",
      "Structured technical PDP content and CTAs.",
      "Optimized frontend assets for catalog performance.",
    ],
  }),
];

const CATEGORIES = [
  "Featured Builds",
  "Shopify Portfolio",
  "WordPress / WooCommerce",
  "Shopify Storefronts",
  "Recent Storefronts",
];

const typeBlock = `export type Project = {
  image: string;
  images: string[];
  platform: Platform[];
  role: string;
  title: string;
  description: string;
  detailsIntro: string;
  category: string;
  detailSections: ProjectDetailSection[];
  demo: string;
  technologies: string[];
  keySkills: string[];
};

export const PROJECT_CATEGORIES = ${JSON.stringify(CATEGORIES, null, 2)} as const;

export type WORKFLOW = {
  title: string;
  description: string;
};

export const PROJECTS: Project[] = ${JSON.stringify(PROJECTS, null, 2)};
`;

let text = fs.readFileSync(constantsPath, "utf8");

const typeStart = text.indexOf("export type Project = {");
const workflowStart = text.indexOf("export const WORKFLOW: WORKFLOW[] = [");
if (typeStart < 0 || workflowStart < 0) {
  throw new Error("Could not find Project type or WORKFLOW markers");
}

// Remove old Project type through end of PROJECTS array (before WORKFLOW)
text = text.slice(0, typeStart) + typeBlock + "\n\n" + text.slice(workflowStart);

// If old WORKFLOW type was duplicated, clean duplicate WORKFLOW type before const
text = text.replace(
  /export type WORKFLOW = \{\n  title: string;\n  description: string;\n\};\n\nexport const PROJECTS: Project\[] = [\s\S]*?\n\];\n\nexport const WORKFLOW/,
  "export const WORKFLOW"
);

// Fix possible double WORKFLOW type leftover from previous structure
const firstWorkflowType = text.indexOf("export type WORKFLOW = {");
const secondWorkflowType = text.indexOf("export type WORKFLOW = {", firstWorkflowType + 1);
if (secondWorkflowType > -1) {
  // Keep first occurrence only if both exist; remove second type definition before WORKFLOW const if orphaned
}

fs.writeFileSync(constantsPath, text);
console.log(`Wrote ${PROJECTS.length} projects across ${CATEGORIES.length} categories`);
