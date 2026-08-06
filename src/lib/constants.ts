import LinkedinLogo from "@/components/logo/linkedin-logo";
import ReactLogo from "@/components/logo/react-logo";
import NextjsLogo from "@/components/logo/nextjs-logo";
import ShopifyLogo from "@/components/logo/shopify-logo";
import FigmaLogo from "@/components/logo/figma-logo";
import LiquidLogo from "@/components/logo/liquid-logo";
import { ComponentType } from "react";

export const PROFILE_NAME = "Thoo Kok Loon";
export const PROFILE_TITLE = "Lead Shopify Developer";
export const CONTACT_EMAIL = "ThLoon.micro@outlook.com";
export const CONTACT_PHONE = "+1 (214) 393-1307";
export const CONTACT_LOCATION = "Houston, TX";
export const CONTACT_BIO =
  "I am always open to discussing Shopify Plus storefront work, app development, integrations, or collaboration with design, merchandising, and product teams. Feel free to reach out if you would like to connect!";

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
  "Shopify Foundations Certification",
  "Shopify Theme Development Certification",
  "Shopify App Development Certification",
  "JavaScript Certification",
  "React Certification",
  "Node.js Certification",
  "REST API Certification",
  "AWS Certification",
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
      { name: "Shopify Plus", level: "Expert" },
      { name: "Shopify Online Store 2.0", level: "Expert" },
      { name: "Shopify Themes", level: "Expert" },
      { name: "Shopify App Extensions", level: "Expert" },
      { name: "Shopify Hydrogen", level: "Experienced" },
      { name: "Shopify Oxygen", level: "Experienced" },
      { name: "Shopify POS", level: "Experienced" },
      { name: "Shopify Markets", level: "Experienced" },
    ],
  },
  {
    title: "Front End",
    skills: [
      { name: "Shopify Liquid", level: "Expert" },
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "TypeScript", level: "Experienced" },
      { name: "HTML5", level: "Expert" },
      { name: "CSS3 / SCSS", level: "Expert" },
      { name: "React.js", level: "Expert" },
      { name: "Node.js", level: "Experienced" },
      { name: "Tailwind CSS", level: "Experienced" },
      { name: "Responsive Design", level: "Expert" },
      { name: "Headless Commerce", level: "Experienced" },
      { name: "WCAG 2.2 Accessibility", level: "Experienced" },
      { name: "Technical SEO / JSON-LD", level: "Experienced" },
      { name: "Core Web Vitals Optimization", level: "Expert" },
    ],
  },
  {
    title: "APIs & Tools",
    skills: [
      { name: "Shopify GraphQL Admin API", level: "Expert" },
      { name: "Shopify Admin API", level: "Expert" },
      { name: "Shopify Storefront API", level: "Expert" },
      { name: "Shopify App Bridge", level: "Experienced" },
      { name: "Shopify Webhooks", level: "Expert" },
      { name: "GraphQL / REST APIs", level: "Expert" },
      { name: "Shopify CLI", level: "Expert" },
      { name: "Git / Jira", level: "Expert" },
      { name: "Lighthouse / Chrome DevTools", level: "Experienced" },
      { name: "Vite / Webpack / Gulp", level: "Experienced" },
      { name: "MySQL / PostgreSQL", level: "Intermediate" },
      { name: "CI/CD / Cloud Platforms", level: "Experienced" },
      { name: "AI-Assisted Development Tools", level: "Experienced" },
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
    image: "/projects/nour-hammour.png",
    images: [
      "/projects/nour-hammour/01.png",
      "/projects/nour-hammour/02.png",
      "/projects/nour-hammour/03.png",
      "/projects/nour-hammour/04.png",
    ],
    platform: ["Website"],
    role: "Lead Shopify Developer - Theme Architecture and Storefront UX",
    title: "Nour Hammour - Fashion Storefront",
    description:
      "Shopify storefront work for a fashion brand, covering theme sections, collection browsing, product presentation, and mobile shopping UX.",
    detailsIntro:
      "Lead Shopify Developer patterns for a fashion ecommerce storefront using Liquid, Online Store 2.0 sections, and conversion-minded product discovery.",
    detailSections: [
      {
        title: "Role and scope",
        items: [
          "Delivered theme architecture for homepage, collections, and product pages.",
          "Partnered with design and merchandising on campaign-ready storefront modules.",
          "Prioritized mobile usability and clear shopping paths.",
        ],
      },
      {
        title: "Technical work",
        items: [
          "Built reusable Liquid sections, blocks, and templates for fashion merchandising.",
          "Refined collection and PDP layouts for clearer product discovery.",
          "Optimized frontend assets and responsive behavior across key shopping templates.",
          "Supported production-ready theme updates with visual QA.",
        ],
      },
      {
        title: "Key skills",
        items: [
          "Shopify Plus, Liquid, Online Store 2.0, JavaScript, Responsive Design, CRO",
        ],
      },
    ],
    demo: "https://nour-hammour.com/",
    technologies: [
      "Shopify Plus",
      "Liquid",
      "Online Store 2.0",
      "JavaScript",
      "Responsive Design",
      "CRO",
    ],
    keySkills: [
      "Theme architecture",
      "Fashion collection UX",
      "PDP presentation",
      "Mobile storefront UX",
    ],
  },
  {
    image: "/projects/factorbikes.png",
    images: [
      "/projects/factorbikes/01.png",
      "/projects/factorbikes/02.png",
      "/projects/factorbikes/03.png",
      "/projects/factorbikes/04.png",
    ],
    platform: ["Website"],
    role: "Lead Shopify Developer - Catalog UX and Performance",
    title: "Factor Bikes - Performance Cycling Store",
    description:
      "Shopify Plus catalog and storefront work for a performance bike brand, including product education, collection templates, and high-intent shopping flows.",
    detailsIntro:
      "Storefront engineering for a technical product catalog with Liquid theme systems, merchandising modules, and performance-minded media delivery.",
    detailSections: [
      {
        title: "Role and scope",
        items: [
          "Owned catalog and product education UX for a high-intent cycling storefront.",
          "Supported merchandising updates through reusable theme sections.",
          "Focused on clarity for complex product options and specifications.",
        ],
      },
      {
        title: "Technical work",
        items: [
          "Implemented Liquid collection and PDP templates for bike merchandising.",
          "Built reusable sections for product storytelling and category browsing.",
          "Optimized image-heavy templates and frontend assets for Core Web Vitals.",
          "Validated responsive QA across desktop and mobile shopping journeys.",
        ],
      },
      {
        title: "Key skills",
        items: [
          "Shopify Plus, Liquid, JavaScript, Collection UX, Core Web Vitals, CRO",
        ],
      },
    ],
    demo: "https://factorbikes.com/",
    technologies: [
      "Shopify Plus",
      "Liquid",
      "JavaScript",
      "Collection UX",
      "Core Web Vitals",
      "CRO",
    ],
    keySkills: [
      "Technical catalog UX",
      "Product education modules",
      "Theme performance",
      "Responsive storefront QA",
    ],
  },
  {
    image: "/projects/kotn.png",
    images: [
      "/projects/kotn/01.png",
      "/projects/kotn/02.png",
      "/projects/kotn/03.png",
      "/projects/kotn/04.png",
    ],
    platform: ["Website"],
    role: "Lead Shopify Developer - DTC Theme and Merchandising Systems",
    title: "Kotn - Sustainable Apparel DTC",
    description:
      "DTC Shopify storefront work for a sustainable apparel brand, covering collection merchandising, campaign modules, and conversion-focused product pages.",
    detailsIntro:
      "Online Store 2.0 theme customization for a design-led apparel brand, with reusable sections that support merchandising and campaign launches.",
    detailSections: [
      {
        title: "Role and scope",
        items: [
          "Delivered DTC theme systems for collections, campaigns, and product discovery.",
          "Collaborated with design and merchandising on brand-consistent shopping UX.",
          "Enabled faster content updates through reusable Liquid modules.",
        ],
      },
      {
        title: "Technical work",
        items: [
          "Built Liquid sections, blocks, and JSON templates for apparel merchandising.",
          "Refined product cards, filters, and PDP hierarchy for clearer buying decisions.",
          "Improved accessibility and responsive behavior across key templates.",
          "Supported SEO-friendly metadata and structured content patterns.",
        ],
      },
      {
        title: "Key skills",
        items: [
          "Shopify Plus, Liquid, Online Store 2.0, JavaScript, CRO, Accessibility",
        ],
      },
    ],
    demo: "https://kotn.com/",
    technologies: [
      "Shopify Plus",
      "Liquid",
      "Online Store 2.0",
      "JavaScript",
      "CRO",
      "Accessibility",
    ],
    keySkills: [
      "DTC merchandising systems",
      "Campaign-ready sections",
      "Apparel collection UX",
      "Accessible storefront UX",
    ],
  },
  {
    image: "/projects/bitetoothpastebits.png",
    images: [
      "/projects/bitetoothpastebits/01.png",
      "/projects/bitetoothpastebits/02.png",
      "/projects/bitetoothpastebits/03.png",
      "/projects/bitetoothpastebits/04.png",
    ],
    platform: ["Website"],
    role: "Lead Shopify Developer - Conversion UX and Theme Customization",
    title: "Bite - DTC Product Storefront",
    description:
      "Shopify DTC storefront for a consumer brand, focused on product storytelling, subscription-friendly merchandising, and conversion-oriented shopping pages.",
    detailsIntro:
      "Theme and storefront customization for a high-growth DTC brand, including hero merchandising, PDP clarity, and mobile conversion paths.",
    detailSections: [
      {
        title: "Role and scope",
        items: [
          "Owned storefront UX for product storytelling and purchase conversion.",
          "Supported marketing campaigns with reusable landing and PDP modules.",
          "Prioritized mobile conversion and clear offer presentation.",
        ],
      },
      {
        title: "Technical work",
        items: [
          "Customized Liquid theme sections for heroes, collections, and PDPs.",
          "Improved product detail hierarchy, CTAs, and trust messaging.",
          "Optimized frontend assets and third-party script impact for performance.",
          "Ran visual QA across campaign and evergreen shopping templates.",
        ],
      },
      {
        title: "Key skills",
        items: [
          "Shopify, Liquid, JavaScript, CRO, Core Web Vitals, Responsive Design",
        ],
      },
    ],
    demo: "https://bitetoothpastebits.com/",
    technologies: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "CRO",
      "Core Web Vitals",
      "Responsive Design",
    ],
    keySkills: [
      "DTC conversion UX",
      "Product storytelling",
      "Campaign landing modules",
      "Performance tuning",
    ],
  },
  {
    image: "/projects/shocksurplus.png",
    images: [
      "/projects/shocksurplus/01.png",
      "/projects/shocksurplus/02.png",
      "/projects/shocksurplus/03.png",
      "/projects/shocksurplus/04.png",
    ],
    platform: ["Website"],
    role: "Lead Shopify Developer - High-volume Catalog and Integrations",
    title: "Shock Surplus - Performance Parts Catalog",
    description:
      "Shopify Plus catalog storefront for performance parts, covering dense product browsing, technical merchandising, and commerce workflow support.",
    detailsIntro:
      "High-volume catalog UX and storefront engineering with Liquid theme systems, filter-friendly collections, and integration-ready commerce patterns.",
    detailSections: [
      {
        title: "Role and scope",
        items: [
          "Owned high-volume catalog browsing and product discovery UX.",
          "Supported technical merchandising for complex parts and fitment-style shopping.",
          "Focused on performance and clarity across dense product grids.",
        ],
      },
      {
        title: "Technical work",
        items: [
          "Built and refined Liquid collection templates, filters, and product cards.",
          "Improved PDP information hierarchy for technical product details.",
          "Optimized Liquid rendering and frontend assets for catalog performance.",
          "Supported API and webhook-friendly commerce workflows where needed.",
        ],
      },
      {
        title: "Key skills",
        items: [
          "Shopify Plus, Liquid, JavaScript, Collection UX, Admin API, Core Web Vitals",
        ],
      },
    ],
    demo: "https://www.shocksurplus.com/",
    technologies: [
      "Shopify Plus",
      "Liquid",
      "JavaScript",
      "Collection UX",
      "Shopify Admin API",
      "Core Web Vitals",
    ],
    keySkills: [
      "High-volume catalog UX",
      "Technical product PDPs",
      "Filter and collection systems",
      "Storefront performance",
    ],
  },
];

export const WORKFLOW: WORKFLOW[] = [
  {
    title: "Planning",
    description:
      "Assess merchant needs, performance goals, and technical requirements; audit Shopify Plus storefronts and recommend maintainable theme and integration solutions.",
  },
  {
    title: "Architecture",
    description:
      "Design Online Store 2.0 theme architectures, app extension plans, metafield models, and API integration approaches for Shopify and headless setups.",
  },
  {
    title: "Development",
    description:
      "Build Liquid themes, custom Shopify apps, React interfaces, and Hydrogen storefront features with Shopify CLI, Git, and modern frontend tooling.",
  },
  {
    title: "Integrations",
    description:
      "Connect Admin API, Storefront API, GraphQL, Webhooks, ERP, CRM, and payment systems for reliable commerce data sync.",
  },
  {
    title: "Optimization",
    description:
      "Improve Core Web Vitals, Liquid rendering, accessibility (WCAG 2.2), technical SEO, structured data, and conversion opportunities.",
  },
  {
    title: "Testing",
    description:
      "Validate storefront functionality, checkout flows, responsive behavior, and integration changes before production releases.",
  },
  {
    title: "Deployment",
    description:
      "Ship theme and app updates with Shopify CLI, Git workflows, and consistent release procedures across development, staging, and production.",
  },
  {
    title: "Collaboration",
    description:
      "Partner with designers, merchandisers, and stakeholders; mentor developers, review code, and explain technical trade-offs clearly.",
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
    duration: "Oct 2025 - Mar 2026",
    position: "Lead Shopify Developer - Shopify Plus and Storefront Engineering",
    company: "JustBlinds",
    location: "Houston, TX",
    description: [
      "Optimized a Shopify Plus storefront by refactoring Liquid templates, reducing render-blocking JavaScript, and streamlining theme assets, improving Lighthouse scores by 34% and lowering LCP by 1.6 seconds.",
      "Customized Online Store 2.0 themes with reusable sections, blocks, snippets, and JSON templates, cutting content update time by 60% for merchandising teams.",
      "Built trade-account app features with GraphQL Admin API and webhooks, improved SEO/accessibility (WCAG 2.2), and diagnosed production theme and API issues during active sales periods.",
    ],
    techStack: [
      "Shopify Plus",
      "Liquid",
      "Online Store 2.0",
      "JavaScript",
      "Tailwind CSS",
      "GraphQL Admin API",
      "Webhooks",
      "Shopify CLI",
      "Core Web Vitals",
    ],
  },
  {
    duration: "Apr 2023 - Sep 2025",
    position: "Senior Shopify Developer - Commerce Integrations and Shopify Business Systems",
    company: "Kahuna Workforce Solutions",
    location: "Houston, TX",
    description: [
      "Developed Shopify Plus integration services syncing 120,000+ product, customer, inventory, and order records with internal systems, reducing manual reconciliation by 45%.",
      "Extended workflows through Admin API, Storefront API, GraphQL, and Webhooks, and automated catalog, inventory, and order jobs that removed 30+ hours of admin work each month.",
      "Enhanced React merchant dashboards (32% faster loads), optimized API request handling for thousands of daily transactions, and coordinated Git-based production releases.",
    ],
    techStack: [
      "Shopify Plus",
      "Admin API",
      "Storefront API",
      "GraphQL",
      "Webhooks",
      "React.js",
      "Node.js",
      "Git",
    ],
  },
  {
    duration: "Jun 2022 - Mar 2023",
    position: "Senior Shopify Developer - Headless Commerce and Shopify Plus Engineering",
    company: "Shoebacca",
    location: "Irving, TX",
    description: [
      "Redesigned a Shopify Plus storefront with 45,000+ products using Hydrogen, React, and Storefront API, reducing page transitions by 38%.",
      "Built reusable Liquid OS 2.0 sections and custom apps for subscriptions, shipping rules, and loyalty; integrated Admin/Storefront APIs and Webhooks with ERP/CRM systems.",
      "Configured Shopify Markets, improved JSON-LD SEO, raised Lighthouse scores by 27%, and mentored junior developers on Liquid, GraphQL, and deployment practices.",
    ],
    techStack: [
      "Shopify Plus",
      "Hydrogen",
      "React.js",
      "Liquid",
      "Storefront API",
      "GraphQL",
      "Shopify Markets",
      "Shopify CLI",
    ],
  },
  {
    duration: "Oct 2019 - May 2022",
    position: "Lead Shopify Developer - Shopify Plus, Checkout and Commerce Integrations",
    company: "Volusion",
    location: "Austin, TX",
    description: [
      "Customized Shopify Plus storefronts for 20+ retail merchants, reducing content publishing effort by 40% with extended Liquid themes and merchandising workflows.",
      "Built custom apps and connected Admin/Storefront/GraphQL APIs and Webhooks with ERP, CRM, and fulfillment systems; configured Shopify Scripts checkout and Stripe/PayPal/Square/AfterPay payments.",
      "Enhanced Shopify POS sync, improved Lighthouse scores by 29%, cut page load by 1.3 seconds, and automated catalog/inventory workflows saving 25+ hours monthly.",
    ],
    techStack: [
      "Shopify Plus",
      "Liquid",
      "Shopify Scripts",
      "GraphQL",
      "Webhooks",
      "Stripe",
      "Shopify POS",
      "JavaScript",
    ],
  },
  {
    duration: "Dec 2017 - Oct 2019",
    position: "Shopify Developer - Theme Development and Commerce Integrations",
    company: "IWD Agency",
    location: "Austin, TX",
    description: [
      "Customized Shopify storefronts for 15+ retail clients with Liquid templates, sections, snippets, and responsive layouts built from UX designs.",
      "Extended storefront features (filters, accounts, wishlists), configured Shopify Scripts checkout, and connected payments including Stripe, PayPal, Konbini, PayPay, and Paidy.",
      "Configured Shopify POS, reduced page load times by 35%, maintained Git deployment workflows, and supported junior developers with theme standards and reviews.",
    ],
    techStack: [
      "Shopify",
      "Shopify Plus",
      "Liquid",
      "HTML5",
      "SCSS",
      "JavaScript",
      "Shopify Scripts",
      "Shopify POS",
    ],
  },
];
