import LinkedinLogo from "@/components/logo/linkedin-logo";
import ReactLogo from "@/components/logo/react-logo";
import NextjsLogo from "@/components/logo/nextjs-logo";
import ShopifyLogo from "@/components/logo/shopify-logo";
import FigmaLogo from "@/components/logo/figma-logo";
import LiquidLogo from "@/components/logo/liquid-logo";
import { ComponentType } from "react";

export const PROFILE_NAME = "Thoo Kok Loon";
export const PROFILE_TITLE = "Senior Shopify Developer";
export const CONTACT_EMAIL = "ThLoon.micro@outlook.com";
export const CONTACT_PHONE = "+1 (214) 393-1307";
export const CONTACT_LOCATION = "Houston, TX";
export const CONTACT_BIO =
  "I'm always open to discussing Shopify storefront work, integrations, or collaboration with design, marketing, and product teams. Feel free to reach out if you'd like to connect!";

export type SocialLink = {
  href: string;
  icon: ComponentType<{ width: number; height: number; className?: string }>;
  label: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/t-loon-79710741a/",
    icon: LinkedinLogo,
    label: "LinkedIn",
  },
];

export type MainSkill = {
  icon: ComponentType<{ width: number; height: number; className?: string }>;
  name: string;
};

export const MAIN_SKILLS: MainSkill[] = [
  { icon: ShopifyLogo, name: "Shopify" },
  { icon: LiquidLogo, name: "Liquid" },
  { icon: FigmaLogo, name: "Figma" },
  { icon: ReactLogo, name: "React" },
  { icon: NextjsLogo, name: "Next.js" },
];

export const CERTIFICATIONS = [
  "Shopify Development Fundamentals",
  "Shopify Theme Development",
  "JavaScript Certification",
  "HTML/CSS Certification",
];

export type SpecialThanks = {
  href: string;
  label: string;
};

export const SPECIAL_THANKS: SpecialThanks[] = [
  { href: "https://nextjs.org", label: "Next.js" },
  { href: "https://ui.shadcn.com", label: "Shadcn UI" },
  { href: "https://magicui.design/", label: "Magic UI" },
  { href: "https://ui.aceternity.com", label: "Aceternity UI" },
];

export type SkillLevel = "Basic" | "Intermediate" | "Experienced" | "Expert";

export type Skill = {
  name: string;
  level: SkillLevel;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export const GRADIENT_COLORS = ["#FFA001", "#FE8FB5", "#FC4100"];

export const SKILLS: SkillCategory[] = [
  {
    title: "Platforms",
    skills: [
      { name: "Shopify", level: "Expert" },
      { name: "Shopify Plus", level: "Expert" },
      { name: "Shopify Online Store 2.0", level: "Expert" },
      { name: "Shopify Themes / Sections / Blocks", level: "Expert" },
      { name: "JSON Templates / Snippets", level: "Expert" },
      { name: "Metafields / Metaobjects", level: "Expert" },
      { name: "Theme App Extensions", level: "Experienced" },
      { name: "Shopify Apps", level: "Experienced" },
      { name: "Shopify POS", level: "Experienced" },
      { name: "Shopify Markets", level: "Experienced" },
    ],
  },
  {
    title: "Front End",
    skills: [
      { name: "Liquid", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "TypeScript", level: "Experienced" },
      { name: "HTML5", level: "Expert" },
      { name: "CSS3 / SCSS", level: "Expert" },
      { name: "React.js", level: "Experienced" },
      { name: "Next.js", level: "Experienced" },
      { name: "Vue.js", level: "Intermediate" },
      { name: "Node.js / Express.js", level: "Experienced" },
      { name: "Responsive / Mobile-First Design", level: "Expert" },
      { name: "Component-Based UI Development", level: "Expert" },
      { name: "Accessibility (WCAG)", level: "Experienced" },
      { name: "CRO & UX Optimization", level: "Expert" },
      { name: "SEO Optimization", level: "Experienced" },
      { name: "Core Web Vitals Optimization", level: "Expert" },
    ],
  },
  {
    title: "APIs & Tools",
    skills: [
      { name: "Shopify Admin API", level: "Expert" },
      { name: "Shopify Storefront API", level: "Expert" },
      { name: "Shopify GraphQL API", level: "Expert" },
      { name: "Shopify Webhooks", level: "Expert" },
      { name: "REST APIs / Third-Party Integrations", level: "Expert" },
      { name: "Payment Gateway Integrations", level: "Experienced" },
      { name: "Shopify CLI", level: "Expert" },
      { name: "Git / GitHub", level: "Expert" },
      { name: "Figma", level: "Experienced" },
      { name: "Lighthouse / WebPageTest", level: "Experienced" },
      { name: "Chrome DevTools / Postman", level: "Experienced" },
      { name: "Claude / Cursor AI / GitHub Copilot", level: "Experienced" },
      { name: "MySQL / PostgreSQL", level: "Intermediate" },
      { name: "Inventory Synchronization", level: "Experienced" },
    ],
  },
];

export type Platform = "Website" | "Mobile" | "Desktop";

export type ProjectDetailSection = {
  title: string;
  items: string[];
};

export type Project = {
  image: string;
  images: string[];
  platform: Platform[];
  role: string;
  title: string;
  description: string;
  detailsIntro: string;
  detailSections: ProjectDetailSection[];
  demo: string;
  technologies: string[];
  keySkills: string[];
};

export type WORKFLOW = {
  title: string;
  description: string;
};

export const PROJECTS: Project[] = [
  {
    image: "/projects/allbirds.png",
    images: [
      "/projects/allbirds/01.png",
      "/projects/allbirds/02.png",
      "/projects/allbirds/03.png",
      "/projects/allbirds/04.png",
    ],
    platform: ["Website"],
    role: "Senior Shopify Developer — Theme Architecture & Conversion UX",
    title: "Allbirds — Sustainable Footwear Storefront",
    description:
      "Showcase of Shopify Plus storefront patterns for a sustainability-led footwear brand—hero merchandising, gender collection templates, filters, and conversion-focused product discovery.",
    detailsIntro:
      "Case study of Senior Shopify Developer patterns applied to a high-traffic footwear storefront: Online Store 2.0 sections, Liquid collection templates, responsive product grids, and Core Web Vitals–minded media delivery.",
    detailSections: [
      {
        title: "Role & scope",
        items: [
          "Delivered theme architecture for homepage heroes, men’s/women’s collections, and shop-all browsing experiences.",
          "Partnered with design and marketing on campaign messaging, badges, and conversion-oriented CTAs.",
          "Prioritized mobile usability, clear navigation, and performance on image-heavy catalog pages.",
        ],
      },
      {
        title: "Technical work",
        items: [
          "Built and refined Liquid sections, blocks, and JSON templates for heroes, collection banners, and product cards.",
          "Implemented collection UX with filters, sort controls, gender toggles, and sale-price presentation.",
          "Optimized responsive imagery and frontend assets to protect Core Web Vitals on catalog and landing pages.",
          "Supported CRO across discovery → PDP → ATC journeys for high-intent footwear shoppers.",
        ],
      },
      {
        title: "Key skills",
        items: [
          "Shopify Plus · Online Store 2.0 · Liquid · JavaScript · Collection UX · CRO · Core Web Vitals",
        ],
      },
    ],
    demo: "https://www.allbirds.com/",
    technologies: [
      "Shopify Plus",
      "Liquid",
      "Online Store 2.0",
      "JavaScript",
      "Collection UX",
      "CRO",
      "Core Web Vitals",
      "Responsive Design",
    ],
    keySkills: [
      "Theme section architecture",
      "Collection & filter UX",
      "PDP conversion paths",
      "Performance optimization",
      "Campaign merchandising",
      "Visual QA",
    ],
  },
  {
    image: "/projects/ugmonk.png",
    images: [
      "/projects/ugmonk/01.png",
      "/projects/ugmonk/02.png",
      "/projects/ugmonk/03.png",
      "/projects/ugmonk/04.png",
    ],
    platform: ["Website"],
    role: "Senior Shopify Developer — Brand-faithful Theme Customization",
    title: "Ugmonk — Minimal Analog Commerce",
    description:
      "Showcase of minimal Shopify theme customization for a design-led stationery brand—hero storytelling, category navigation, and clean collection templates for pens, analog systems, and objects.",
    detailsIntro:
      "Case study of brand-faithful Shopify theme work: Liquid sections that protect a minimal visual system while improving category discovery, product grids, and campaign-ready storefront modules.",
    detailSections: [
      {
        title: "Role & scope",
        items: [
          "Owned brand-faithful theme customization for a minimal, design-forward DTC storefront.",
          "Translated high-fidelity design direction into Liquid sections with strict typography and spacing fidelity.",
          "Structured category journeys for starter kits, cards, accessories, and journals.",
        ],
      },
      {
        title: "Technical work",
        items: [
          "Customized homepage heroes, trust/as-seen-on modules, and editorial content blocks in Liquid.",
          "Built collection templates with category thumbnail navigation, product grids, and variant swatches.",
          "Standardized reusable snippets for product cards and merchandising modules editable in the theme editor.",
          "Validated responsive behavior and visual QA across desktop and mobile breakpoints.",
        ],
      },
      {
        title: "Key skills",
        items: [
          "Shopify · Liquid · Theme Customization · CSS/SCSS · Figma-to-code · Responsive Design · UX",
        ],
      },
    ],
    demo: "https://ugmonk.com/",
    technologies: [
      "Shopify",
      "Liquid",
      "Theme Customization",
      "JavaScript",
      "CSS / SCSS",
      "Responsive Design",
      "CRO",
    ],
    keySkills: [
      "Minimal brand UX systems",
      "Category navigation UX",
      "Reusable Liquid components",
      "Figma-to-Liquid delivery",
      "Theme editor patterns",
      "Visual QA",
    ],
  },
  {
    image: "/projects/staycourant.png",
    images: [
      "/projects/staycourant/01.png",
      "/projects/staycourant/02.png",
      "/projects/staycourant/03.png",
      "/projects/staycourant/04.png",
    ],
    platform: ["Website"],
    role: "Senior Shopify Developer — Merchandising Systems & Product Storytelling",
    title: "Courant — Premium Wireless Charging",
    description:
      "Showcase of premium Shopify merchandising for lifestyle tech—collection grids mixing product and lifestyle tiles, MagSafe category templates, sale badges, and brand storytelling sections.",
    detailsIntro:
      "Case study of Senior Shopify Developer delivery for a design-led hardware brand: Liquid collection systems, promotional pricing presentation, and conversion-focused product storytelling.",
    detailSections: [
      {
        title: "Role & scope",
        items: [
          "Owned merchandising UX for shop-all, MagSafe, and device-focused browsing experiences.",
          "Collaborated with design/marketing on lifestyle storytelling tiles and promotional messaging.",
          "Supported sale campaigns with clear badge and price hierarchy across collection grids.",
        ],
      },
      {
        title: "Technical work",
        items: [
          "Implemented collection templates combining product cards with editorial lifestyle modules.",
          "Configured sale pricing, badges, color swatches, and filter patterns for catalog clarity.",
          "Built MagSafe and device-oriented merchandising paths to reduce purchase friction.",
          "Optimized media-heavy pages and validated responsive layouts for conversion on mobile.",
        ],
      },
      {
        title: "Key skills",
        items: [
          "Shopify · Liquid · Merchandising UX · CRO · Responsive Design · Theme Architecture",
        ],
      },
    ],
    demo: "https://staycourant.com/",
    technologies: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "Collection UX",
      "CRO",
      "Responsive Design",
      "Theme Architecture",
    ],
    keySkills: [
      "Premium product storytelling",
      "Collection grid architecture",
      "Promo & sale presentation",
      "Category merchandising",
      "Mobile conversion UX",
      "Visual QA",
    ],
  },
  {
    image: "/projects/stevemadden.png",
    images: [
      "/projects/stevemadden/01.png",
      "/projects/stevemadden/02.png",
      "/projects/stevemadden/03.png",
      "/projects/stevemadden/04.png",
    ],
    platform: ["Website"],
    role: "Senior Shopify Plus Developer — High-volume Catalog & Campaign UX",
    title: "Steve Madden — Fashion Footwear & Accessories",
    description:
      "Showcase of Shopify Plus catalog UX for a large fashion brand—campaign heroes, high-SKU product grids, quick-add patterns, sale badges, and multi-category merchandising.",
    detailsIntro:
      "Case study of Senior Shopify Plus Developer patterns for a high-volume fashion storefront: campaign landing systems, dense PLPs, and conversion features across shoes, accessories, and seasonal collections.",
    detailSections: [
      {
        title: "Role & scope",
        items: [
          "Owned high-volume catalog and campaign storefront UX for fashion footwear and accessories.",
          "Partnered with marketing on seasonal heroes, NEW badges, and sale messaging.",
          "Prioritized filter/sort usability and quick-add flows for large product catalogs.",
        ],
      },
      {
        title: "Technical work",
        items: [
          "Built homepage campaign heroes and multi-category navigation for women’s, men’s, and accessories journeys.",
          "Refined collection templates with filters, sort, color counts, sale pricing, and quick-add actions.",
          "Supported third-party commerce signals (e.g., loyalty/Prime messaging) within theme components.",
          "Audited Liquid/JS/image performance on dense PLPs to protect shopping speed under campaign traffic.",
        ],
      },
      {
        title: "Key skills",
        items: [
          "Shopify Plus · Liquid · Collection UX · JavaScript · CRO · Performance · Campaign Templates",
        ],
      },
    ],
    demo: "https://www.stevemadden.com/",
    technologies: [
      "Shopify Plus",
      "Liquid",
      "JavaScript",
      "Collection UX",
      "CRO",
      "Core Web Vitals",
      "Responsive Design",
    ],
    keySkills: [
      "High-volume catalog UX",
      "Campaign hero systems",
      "Quick-add & sale badges",
      "Filter & sort UX",
      "Performance under traffic",
      "Visual QA",
    ],
  },
  {
    image: "/projects/beardbrand.png",
    images: [
      "/projects/beardbrand/01.png",
      "/projects/beardbrand/02.png",
      "/projects/beardbrand/03.png",
      "/projects/beardbrand/04.png",
    ],
    platform: ["Website"],
    role: "Senior Shopify Developer — DTC Theme Systems & Category UX",
    title: "Beardbrand — Grooming & Fragrance DTC",
    description:
      "Showcase of DTC Shopify theme systems for a grooming brand—bold homepage storytelling, category collection templates for hair/body/beard, sold-out states, and promo announcement workflows.",
    detailsIntro:
      "Case study of Senior Shopify Developer work for a DTC grooming storefront: custom Liquid layouts, category merchandising, inventory-aware product cards, and campaign announcement patterns.",
    detailSections: [
      {
        title: "Role & scope",
        items: [
          "Owned theme systems for homepage brand storytelling and category-led shopping (beard, hair, body, fragrances).",
          "Supported deals and cologne-set campaigns through announcement bars and collection messaging.",
          "Improved product card clarity for pricing, sold-out states, and fragrance variants.",
        ],
      },
      {
        title: "Technical work",
        items: [
          "Customized Liquid sections for brand hero statements, category headers, and product grids.",
          "Implemented collection templates with inventory badges, sale pricing, and consistent card hierarchy.",
          "Structured category navigation to speed discovery across grooming and fragrance lines.",
          "Refined responsive layouts and frontend interactions for mobile shopping journeys.",
        ],
      },
      {
        title: "Key skills",
        items: [
          "Shopify · Liquid · DTC Theme Systems · Collection UX · JavaScript · CRO · Responsive Design",
        ],
      },
    ],
    demo: "https://www.beardbrand.com/",
    technologies: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "DTC Merchandising",
      "Collection UX",
      "CRO",
      "Responsive Design",
    ],
    keySkills: [
      "Brand storytelling sections",
      "Category collection UX",
      "Inventory-aware product cards",
      "Promo announcement systems",
      "Mobile-first storefront UX",
      "Visual QA",
    ],
  },
  {
    image: "/projects/mejuri.png",
    images: [
      "/projects/mejuri/01.png",
      "/projects/mejuri/02.png",
      "/projects/mejuri/03.png",
      "/projects/mejuri/04.png",
    ],
    platform: ["Website"],
    role: "Senior Shopify Plus Developer — Luxury PDP & Guided Shopping",
    title: "Mejuri — Fine Jewelry Ecommerce",
    description:
      "Showcase of luxury Shopify Plus storefront UX—editorial heroes, jewelry category templates with sub-nav, advanced filters, quick-add grids, and gift/collection merchandising.",
    detailsIntro:
      "Case study of Senior Shopify Plus Developer patterns for a fine-jewelry brand: guided category shopping, high-fidelity collection UX, and conversion features that protect a premium brand experience.",
    detailSections: [
      {
        title: "Role & scope",
        items: [
          "Owned premium storefront and guided shopping UX across earrings, necklaces, rings, gifts, and collections.",
          "Collaborated with design/growth on editorial heroes, summer guides, and campaign landings.",
          "Prioritized filter clarity, quick-add, and wishlist patterns for jewelry discovery.",
        ],
      },
      {
        title: "Technical work",
        items: [
          "Built media-heavy hero sections and editorial CTAs as Liquid theme modules.",
          "Implemented category templates with visual sub-navigation, material/stone filters, and product counts.",
          "Refined product-card interactions including quick-add and favorites for conversion efficiency.",
          "Optimized image-heavy jewelry grids for Core Web Vitals and cross-breakpoint visual QA.",
        ],
      },
      {
        title: "Key skills",
        items: [
          "Shopify Plus · Liquid · Luxury UX · Collection Filters · JavaScript · CRO · Core Web Vitals",
        ],
      },
    ],
    demo: "https://mejuri.com/",
    technologies: [
      "Shopify Plus",
      "Liquid",
      "JavaScript",
      "Collection UX",
      "CRO",
      "Core Web Vitals",
      "Responsive Design",
      "Figma",
    ],
    keySkills: [
      "Luxury brand storefront UX",
      "Guided category shopping",
      "Advanced filter systems",
      "Quick-add conversion UX",
      "Campaign & gift merchandising",
      "Performance & visual QA",
    ],
  },
];


export const WORKFLOW: WORKFLOW[] = [
  {
    title: "Planning",
    description:
      "Assess merchant needs, business goals, and technical requirements; audit Shopify storefronts and recommend maintainable theme and integration solutions.",
  },
  {
    title: "Architecture",
    description:
      "Design Online Store 2.0 theme architectures, section systems, metafield/metaobject models, and API integration plans for Shopify and Shopify Plus.",
  },
  {
    title: "Development",
    description:
      "Build Liquid themes, sections, blocks, JSON templates, and React/Next.js commerce interfaces with Shopify CLI, Git, and modern frontend workflows.",
  },
  {
    title: "Integrations",
    description:
      "Connect Shopify Admin API, Storefront API, GraphQL, Webhooks, and third-party apps for product, order, inventory, and operational sync.",
  },
  {
    title: "Optimization",
    description:
      "Improve Core Web Vitals, Liquid rendering, JavaScript performance, asset delivery, SEO, accessibility, and conversion opportunities.",
  },
  {
    title: "Testing",
    description:
      "Validate storefront functionality, responsive behavior, checkout flows, and cross-browser experiences before production releases.",
  },
  {
    title: "Deployment",
    description:
      "Ship theme and app updates safely with Shopify CLI, GitHub workflows, and production troubleshooting for merchant operations.",
  },
  {
    title: "Collaboration",
    description:
      "Work with designers, marketers, product teams, and stakeholders to translate requirements into reliable Shopify storefront experiences.",
  },
];

export type Supervisor = {
  fullName: string;
  position: string;
  email: string;
};

export type WorkExperience = {
  duration: string;
  position: string;
  company: string;
  location: string;
  description: string[];
  techStack: string[];
};

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    duration: "Oct 2025 – Mar 2026",
    position: "Senior Shopify Developer — Shopify Plus & Storefront Performance Engineering",
    company: "JustBlinds",
    location: "Houston, TX",
    description: [
      "Improved Shopify Plus storefront performance by optimizing theme code, frontend assets, and loading behavior to strengthen Core Web Vitals across key shopping experiences.",
      "Customized Online Store 2.0 themes with Liquid sections, blocks, JSON templates, and reusable components so marketing could update merchandising content with less developer support.",
      "Migrated 3,500+ product and marketing images to WebP, enhanced metafields/metaobjects CMS workflows, and built Shopify-connected tools plus Admin API/Webhook integrations for catalog and trade-account operations.",
    ],
    techStack: [
      "Shopify Plus",
      "Liquid",
      "Online Store 2.0",
      "JavaScript",
      "React.js",
      "Next.js",
      "Shopify Admin API",
      "Core Web Vitals",
    ],
  },
  {
    duration: "Apr 2023 – Sep 2025",
    position: "Shopify Developer — Storefront Integrations & Commerce Applications",
    company: "Kahuna Workforce Solutions",
    location: "Houston, TX",
    description: [
      "Improved Shopify Plus workflows by connecting Admin API, Storefront API, and Webhooks with internal applications for product updates, campaigns, and operations.",
      "Developed React.js and Next.js interfaces with TypeScript to support commerce tools, reporting workflows, and reusable frontend components for Shopify operations teams.",
      "Integrated Shopify data with external REST/third-party services, automated repetitive commerce tasks, and maintained authentication and role-based access for internal applications.",
    ],
    techStack: [
      "Shopify Plus",
      "Shopify Admin API",
      "Shopify Storefront API",
      "Webhooks",
      "React.js",
      "Next.js",
      "TypeScript",
      "REST APIs",
    ],
  },
  {
    duration: "Jun 2022 – Mar 2023",
    position: "Senior Shopify Developer — Headless Commerce & Storefront Engineering",
    company: "Shoebacca",
    location: "Irving, TX",
    description: [
      "Developed Shopify Plus storefront experiences with Liquid, Online Store 2.0 themes, reusable sections, blocks, and JSON templates for flexible merchandising and content management.",
      "Built customized storefront features with Storefront API, GraphQL, React.js, and Next.js, and integrated Admin API/Webhooks with ERP, CRM, fulfillment, and commerce systems.",
      "Improved international experiences via Shopify Markets, optimized Liquid/JS/API performance, and enhanced SEO and conversion through structured data, metadata, and journey updates.",
    ],
    techStack: [
      "Shopify Plus",
      "Liquid",
      "Online Store 2.0",
      "Storefront API",
      "GraphQL",
      "React.js",
      "Next.js",
      "Shopify Markets",
    ],
  },
  {
    duration: "Oct 2019 – May 2022",
    position: "Senior Shopify Developer — Commerce Integrations & Checkout Customization",
    company: "Volusion",
    location: "Austin, TX",
    description: [
      "Customized Shopify themes with Liquid, JavaScript, HTML, and CSS, and built reusable sections, templates, and storefront features for retail client operations.",
      "Integrated Admin API, Storefront API, REST, GraphQL, and Webhooks with ERP, CRM, fulfillment, and marketing systems; connected Stripe, PayPal, Square, and AfterPay.",
      "Enhanced checkout with promotional rules, shipping conditions, and discount logic; configured Shopify POS with inventory sync and barcode workflows for omnichannel retail.",
    ],
    techStack: [
      "Shopify",
      "Shopify Plus",
      "Liquid",
      "JavaScript",
      "GraphQL",
      "REST APIs",
      "Stripe",
      "Shopify POS",
    ],
  },
  {
    duration: "Dec 2017 – Oct 2019",
    position: "Shopify Developer — Theme Development & Storefront Customization",
    company: "IWD Agency",
    location: "Austin, TX",
    description: [
      "Developed and customized Shopify storefront themes with Liquid, HTML5, CSS/SCSS, and JavaScript for product pages, landing pages, and client ecommerce experiences.",
      "Created reusable sections, snippets, templates, and content blocks; customized search, accounts, wishlists, and shopping features; configured Shopify Plus Scripts for checkout rules.",
      "Integrated Shopify APIs, GraphQL, and Webhooks with external systems; supported regional payments (Stripe, PayPal, Konbini, PayPay, Paidy) and Shopify POS omnichannel workflows.",
    ],
    techStack: [
      "Shopify",
      "Shopify Plus",
      "Liquid",
      "HTML5",
      "CSS / SCSS",
      "JavaScript",
      "GraphQL",
      "Shopify Scripts",
    ],
  },
];
