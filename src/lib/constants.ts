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
  "I'm always open to discussing new opportunities, creative projects, or potential collaborations. Feel free to reach out if you'd like to connect!";

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
  "JavaScript Certification",
  "React Certification",
  "UX Design Certification",
  "HTML/CSS Certification",
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
      { name: "Shopify", level: "Expert" },
      { name: "Shopify Plus", level: "Expert" },
      { name: "Shopify Online Store 2.0", level: "Expert" },
      { name: "Shopify Themes", level: "Expert" },
      { name: "Shopify Headless Commerce", level: "Intermediate" },
      { name: "Shopify Theme Development", level: "Expert" },
      { name: "Shopify App Development", level: "Intermediate" },
      { name: "WooCommerce", level: "Intermediate" },
      { name: "BigCommerce", level: "Intermediate" },
    ],
  },
  {
    title: "Front End",
    skills: [
      { name: "Liquid", level: "Expert" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "React.js", level: "Intermediate" },
      { name: "Next.js", level: "Intermediate" },
      { name: "HTML5", level: "Intermediate" },
      { name: "CSS3 / SCSS", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Intermediate" },
      { name: "Vue.js", level: "Intermediate" },
      { name: "Responsive / Mobile-First Design", level: "Expert" },
      { name: "UX/UI Design Principles", level: "Expert" },
      { name: "Accessibility (WCAG 2.1)", level: "Intermediate" },
      { name: "CRO & A/B Testing", level: "Expert" },
      { name: "Conversion Funnel Optimization", level: "Expert" },
      { name: "Customer Journey Optimization", level: "Expert" },
    ],
  },
  {
    title: "APIs & Tools",
    skills: [
      { name: "Figma", level: "Expert" },
      { name: "Figma Auto Layout & Variants", level: "Expert" },
      { name: "Wireframing & Prototyping", level: "Expert" },
      { name: "High-Fidelity UI Design", level: "Expert" },
      { name: "Shopify Storefront API", level: "Intermediate" },
      { name: "Shopify Admin API", level: "Intermediate" },
      { name: "Shopify Webhooks", level: "Intermediate" },
      { name: "REST APIs", level: "Intermediate" },
      { name: "GraphQL", level: "Intermediate" },
      { name: "GA4 / GSC / Hotjar", level: "Intermediate" },
      { name: "Lighthouse / Core Web Vitals", level: "Intermediate" },
      { name: "Git / GitHub / GitLab", level: "Intermediate" },
      { name: "Stripe / PayPal / Square", level: "Intermediate" },
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
    image: "/projects/minaal.png",
    images: [
      "/projects/minaal.png",
      "/projects/minaal/02.png",
      "/projects/minaal/03.png",
    ],
    platform: ["Website"],
    role: "Senior Shopify Developer",
    title: "Minaal — Travel Commerce Theme & Conversion UX",
    description:
      "Delivered Senior Shopify Developer work for Minaal’s premium travel-gear storefront—bag/collection discovery, PDP storytelling, and mobile conversion paths for global shoppers.",
    detailsIntro:
      "As Senior Shopify Developer on this client engagement, owned theme architecture and CRO-focused UX for Minaal’s carry-on and accessory catalog using Shopify Plus, Online Store 2.0 Liquid sections, and Figma-to-theme delivery.",
    detailSections: [
      {
        title: "Role & responsibilities",
        items: [
          "Owned storefront UX delivery for homepage heroes, collections, and PDPs as Senior Shopify Developer.",
          "Partnered with design and marketing to translate Figma into production Liquid sections.",
          "Prioritized conversion, mobile usability, and trust messaging for international purchase journeys.",
        ],
      },
      {
        title: "Technical work performed",
        items: [
          "Built and refined Online Store 2.0 sections with Liquid schemas for heroes, product grids, and CTAs.",
          "Implemented reusable product-card, swatch, and shipping/trust components for bag/accessory merchandising.",
          "Structured collection and PDP templates for clearer discovery and add-to-cart decision-making.",
          "Audited Liquid render cost, third-party scripts, and image delivery to protect Core Web Vitals on catalog pages.",
          "Applied CRO improvements across discovery → PDP → ATC paths with responsive visual QA.",
        ],
      },
      {
        title: "Outcomes & collaboration",
        items: [
          "Improved shopping clarity for high-intent travel products across desktop and mobile.",
          "Left merchandising teams with editable section patterns for campaign and catalog updates.",
        ],
      },
    ],
    demo: "https://www.minaal.com/",
    technologies: [
      "Shopify Plus",
      "Shopify Online Store 2.0",
      "Liquid",
      "Figma",
      "JavaScript",
      "Responsive Design",
      "CRO",
      "Core Web Vitals",
    ],
    keySkills: [
      "Theme section architecture",
      "PDP & collection UX",
      "Figma-to-Liquid delivery",
      "Mobile-first storefront UX",
      "CRO-minded merchandising",
      "Visual QA",
    ],
  },
  {
    image: "/projects/brightland.png",
    images: [
      "/projects/brightland.png",
      "/projects/brightland/02.png",
      "/projects/brightland/03.png",
    ],
    platform: ["Website"],
    role: "Senior Shopify Developer",
    title: "Brightland — DTC Merchandising, Bundles & Storefront UX",
    description:
      "Led Senior Shopify Developer delivery for Brightland’s design-led olive oil commerce experience—bestsellers, gift sets, collection filters, and conversion-ready merchandising.",
    detailsIntro:
      "As Senior Shopify Developer for this DTC client, implemented and refined Brightland’s theme UX for pantry essentials—balancing brand-forward design with Shopify section systems, bundle clarity, and campaign-ready landings.",
    detailSections: [
      {
        title: "Role & responsibilities",
        items: [
          "Owned theme merchandising UX as Senior Shopify Developer for a design-led DTC brand.",
          "Collaborated in Figma workflows to ship production-ready collection and landing modules.",
          "Supported marketing launches with reusable, campaign-safe section patterns.",
        ],
      },
      {
        title: "Technical work performed",
        items: [
          "Implemented collection filter/pill navigation and bestseller grid templates in Liquid.",
          "Refined product-card hierarchy with badges, pricing, ratings, and gift-set presentation.",
          "Improved bundle and multi-SKU merchandising so purchase options stayed clear on mobile and desktop.",
          "Built seasonal/campaign landing sections without breaking the brand design system.",
          "Ran visual QA against Figma comps and validated cart/promo messaging consistency.",
        ],
      },
      {
        title: "Outcomes & collaboration",
        items: [
          "Strengthened shoppability of bestsellers, oils, and gift sets through clearer merchandising UX.",
          "Enabled faster campaign updates via reusable Shopify theme sections.",
        ],
      },
    ],
    demo: "https://brightland.co/",
    technologies: [
      "Shopify",
      "Liquid",
      "Figma",
      "JavaScript",
      "CRO",
      "Responsive Design",
      "Theme Architecture",
    ],
    keySkills: [
      "DTC collection UX",
      "Bundle & gift-set merchandising",
      "Campaign landing delivery",
      "Figma collaboration",
      "Mobile-first storefront UX",
      "Visual QA",
    ],
  },
  {
    image: "/projects/kinto-usa.png",
    images: [
      "/projects/kinto-usa.png",
      "/projects/kinto-usa/02.png",
      "/projects/kinto-usa/03.png",
    ],
    platform: ["Website"],
    role: "Senior Shopify Developer",
    title: "Kinto USA — Minimal Theme Customization & Catalog UX",
    description:
      "Supported Kinto USA as Senior Shopify Developer with minimal catalog architecture, product education modules, and brand-consistent responsive storefront experiences for drinkware and tableware.",
    detailsIntro:
      "As Senior Shopify Developer on this client project, focused on clean Shopify theme customization and UX systems that protect Kinto’s minimal visual language while improving product discovery and mobile shopping usability.",
    detailSections: [
      {
        title: "Role & responsibilities",
        items: [
          "Owned brand-faithful theme customization as Senior Shopify Developer.",
          "Translated high-fidelity Figma into Liquid sections with strict spacing and typography fidelity.",
          "Aligned catalog taxonomy UX across drinkware, tableware, and new arrivals journeys.",
        ],
      },
      {
        title: "Technical work performed",
        items: [
          "Customized theme layout/CSS for minimal heroes, navigation chrome, and lifestyle carousels.",
          "Built PLP templates with sort controls, swatches, pricing, and clean product grids.",
          "Standardized reusable product-grid, header, and education snippets editable in the theme editor.",
          "Refined PDP information hierarchy for materials, care, and use-case education.",
          "Validated responsive behavior where whitespace and sparse layouts break on smaller screens.",
        ],
      },
      {
        title: "Outcomes & collaboration",
        items: [
          "Preserved a minimal brand system while keeping catalogs clearly shoppable.",
          "Improved merchant maintainability through reusable Liquid section patterns.",
        ],
      },
    ],
    demo: "https://kinto-usa.com/",
    technologies: [
      "Shopify",
      "Liquid",
      "Figma",
      "Theme Customization",
      "JavaScript",
      "Responsive Design",
      "UX/UI Design Principles",
    ],
    keySkills: [
      "Minimal brand UX systems",
      "Catalog & taxonomy UX",
      "Figma-to-Liquid implementation",
      "PDP education modules",
      "Visual QA",
      "Theme editor patterns",
    ],
  },
  {
    image: "/projects/pelacase.png",
    images: [
      "/projects/pelacase.png",
      "/projects/pelacase/02.png",
      "/projects/pelacase/03.png",
    ],
    platform: ["Website"],
    role: "Senior Shopify Plus Developer",
    title: "Pela Case — Catalog UX, Guided Fit Discovery & Performance",
    description:
      "Contributed Senior Shopify Plus Developer expertise to Pela Case’s high-volume eco-commerce storefront—device-fit discovery, dense collection UX, promo systems, and mobile conversion performance.",
    detailsIntro:
      "As Senior Shopify Plus Developer for this client, owned storefront UX improvements for a large device-specific catalog—balancing sustainability storytelling with practical filter/fitter flows, PDP clarity, and Core Web Vitals performance.",
    detailSections: [
      {
        title: "Role & responsibilities",
        items: [
          "Owned high-volume catalog and guided shopping UX as Senior Shopify Plus Developer.",
          "Partnered with growth/marketing on promotional badges, banners, and campaign-safe templates.",
          "Prioritized performance work for image-heavy PLPs under peak campaign traffic.",
        ],
      },
      {
        title: "Technical work performed",
        items: [
          "Implemented and refined device/fit guided shopping patterns, filters, and collection pathing.",
          "Optimized dense PLPs for large SKU counts with badges, swatches, and readable naming.",
          "Built promo banner and badge systems that remain clear on mobile breakpoints.",
          "Audited Liquid/JS/image pipelines (lazy-load, srcset, deferral) to improve Core Web Vitals.",
          "Supported CRO experiments on collection → PDP conversion for promotional traffic.",
        ],
      },
      {
        title: "Outcomes & collaboration",
        items: [
          "Helped shoppers reach compatible cases faster across a large catalog.",
          "Stabilized campaign merchandising without sacrificing performance or layout quality.",
        ],
      },
    ],
    demo: "https://pelacase.com/",
    technologies: [
      "Shopify Plus",
      "Liquid",
      "Figma",
      "JavaScript",
      "Collection UX",
      "CRO",
      "Core Web Vitals",
      "Lighthouse",
    ],
    keySkills: [
      "Guided shopping UX",
      "High-volume catalog UX",
      "Promo & badge systems",
      "Shopify Plus development",
      "Performance & CWV",
      "Visual QA",
    ],
  },
  {
    image: "/projects/hexclad.png",
    images: [
      "/projects/hexclad.png",
      "/projects/hexclad/02.png",
      "/projects/hexclad/03.png",
    ],
    platform: ["Website"],
    role: "Senior Shopify Plus Developer",
    title: "HexClad — Premium Cookware UX & Campaign Storefronts",
    description:
      "Advanced HexClad’s premium cookware experience as Senior Shopify Plus Developer through hero merchandising systems, education-led PDPs, set bundling, and conversion-focused promotional templates.",
    detailsIntro:
      "As Senior Shopify Plus Developer on this client engagement, delivered storefront UX and theme work for high-intent cookware journeys—improving set/bundle presentation, product education modules, and campaign landing performance while maintaining brand polish.",
    detailSections: [
      {
        title: "Role & responsibilities",
        items: [
          "Owned premium storefront and campaign template delivery as Senior Shopify Plus Developer.",
          "Collaborated with design and growth on A/B tests for CTAs, social proof, and bundle messaging.",
          "Balanced cinematic brand presentation with measurable conversion and performance goals.",
        ],
      },
      {
        title: "Technical work performed",
        items: [
          "Built media-heavy hero sections (image/video modules, endorsement, Shop CTAs) as Liquid sections.",
          "Structured multi-level navigation and cookware discovery templates for collections and sets.",
          "Implemented set/bundle merchandising and education content hierarchy on PDPs/PLPs.",
          "Created reusable sale and seasonal campaign landing sections tied to promo calendars.",
          "Optimized media-heavy templates for Core Web Vitals and performed cross-breakpoint visual QA.",
        ],
      },
      {
        title: "Outcomes & collaboration",
        items: [
          "Strengthened premium purchase confidence through clearer education and set merchandising.",
          "Enabled faster campaign launches with reusable, brand-safe theme modules.",
        ],
      },
    ],
    demo: "https://hexclad.com/",
    technologies: [
      "Shopify Plus",
      "Liquid",
      "Figma",
      "JavaScript",
      "CRO",
      "A/B Testing",
      "Responsive Design",
      "Lighthouse",
      "GA4",
    ],
    keySkills: [
      "Premium brand UX/UI",
      "Figma-to-code workflows",
      "PDP education design",
      "Bundle & set merchandising",
      "CRO & A/B testing",
      "Campaign landing pages",
    ],
  },
  {
    image: "/projects/brooklinen.png",
    images: [
      "/projects/brooklinen.png",
      "/projects/brooklinen/02.png",
      "/projects/brooklinen/03.png",
      "/projects/brooklinen/04.png",
    ],
    platform: ["Website"],
    role: "Senior Shopify Plus Developer",
    title: "Brooklinen — Guides, Collection UX & Sale Conversion",
    description:
      "Supported Brooklinen as Senior Shopify Plus Developer with sheet-guide experiences, collection storytelling, filter-driven PLPs, and conversion-oriented PDP/cart journeys for a high-scale DTC home brand.",
    detailsIntro:
      "As Senior Shopify Plus Developer for this client, focused on storefront UX systems that help customers choose bedding confidently—enhancing guides, promotional templates, and responsive shopping flows while protecting performance and design consistency.",
    detailSections: [
      {
        title: "Role & responsibilities",
        items: [
          "Owned guided shopping and sale conversion UX as Senior Shopify Plus Developer.",
          "Partnered with marketing on high-traffic sale heroes, offer badges, and campaign-safe theme updates.",
          "Used analytics insights to prioritize UX fixes on drop-off collection and PDP templates.",
        ],
      },
      {
        title: "Technical work performed",
        items: [
          "Implemented fabric/type guide modules and educational collection storytelling in Liquid.",
          "Built and refined filter sidebars, product grids, social-proof badges, and offer messaging.",
          "Delivered sale heroes and evergreen PLP layouts with clear paths into cart/checkout.",
          "Improved PDP content hierarchy for ratings, swatches, limited-time offers, and purchase confidence.",
          "Optimized assets and Liquid patterns on content-heavy commercial pages; validated responsive QA.",
        ],
      },
      {
        title: "Outcomes & collaboration",
        items: [
          "Reduced purchase uncertainty for complex bedding choices through guides and clearer PLPs.",
          "Supported frequent merchandising and sale launches without destabilizing the theme system.",
        ],
      },
    ],
    demo: "https://brooklinen.com/",
    technologies: [
      "Shopify Plus",
      "Liquid",
      "Figma",
      "JavaScript",
      "CRO",
      "GA4",
      "Responsive Design",
      "Core Web Vitals",
      "Theme Architecture",
    ],
    keySkills: [
      "Guided shopping UX",
      "Sale & campaign templates",
      "PDP conversion optimization",
      "Analytics-informed UX",
      "Shopify Plus development",
      "Responsive design",
    ],
  },
];

export const WORKFLOW: WORKFLOW[] = [
  {
    title: "Planning",
    description:
      "Assess client needs, business goals, and technical requirements; perform platform audits and recommend scalable solutions.",
  },
  {
    title: "Architecture",
    description:
      "Design frontend and backend architectures for Shopify, WooCommerce, or headless setups; plan APIs, database schemas, and integrations.",
  },
  {
    title: "Development",
    description:
      "Use Docker, Vercel, Netlify, or cloud-native CI/CD pipelines for smooth releases.",
  },
  {
    title: "Automation",
    description:
      "Develop custom Shopify apps, workflows, and automation with Zapier, Make.com, or custom backend scripts.",
  },
  {
    title: "Optimization",
    description:
      "Audit and improve Core Web Vitals, Lighthouse scores, metadata, accessibility, and page load times.",
  },
  {
    title: "Testing",
    description:
      "Conduct functional, performance, and cross-browser testing using Jest, Cypress, and BrowserStack.",
  },
  {
    title: "Deployment",
    description:
      "Use Docker, Vercel, Netlify, or cloud-native CI/CD pipelines for smooth releases.",
  },
  {
    title: "Monitoring",
    description:
      "Analyze traffic and user behavior via GA4, Hotjar, and Mixpanel; continuously improve UX, CRO, and operational efficiency.",
  },
  {
    title: "Collaboration",
    description:
      "Work closely with designers, product managers, and stakeholders; mentor junior developers and ensure best practices.",
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
    position: "Senior Shopify Developer",
    company: "JustBlinds",
    location: "Houston, TX",
    description: [
      "Owned Shopify storefront UX by refining Liquid themes, product/landing sections, and responsive layouts while translating Figma designs into production with strong visual QA.",
      "Improved performance and operations—cutting page load ~35%, lifting Core Web Vitals, converting 3,500+ assets to WebP, and building React/Next.js tools plus Admin API sync for purchase-order workflows.",
      "Partnered with marketing and ops stakeholders to turn analytics insights into clearer navigation, content, and conversion-oriented storefront updates.",
    ],
    techStack: [
      "Shopify",
      "Liquid",
      "React.js",
      "Next.js",
      "TypeScript",
      "Figma",
      "Core Web Vitals",
    ],
  },
  {
    duration: "Apr 2023 - Sep 2025",
    position: "Senior Front-End Developer",
    company: "Kahuna Workforce Solutions",
    location: "Houston, TX",
    description: [
      "Built React/Next.js workforce applications with reusable dashboards, reporting, and operational UI that simplified complex team workflows.",
      "Shipped TypeScript and Tailwind responsive interfaces, integrated REST APIs, and optimized rendering and data-fetch patterns for better app responsiveness.",
      "Collaborated with design and product through Figma reviews and Agile sprints to deliver iterative customer-facing improvements.",
    ],
    techStack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Figma",
    ],
  },
  {
    duration: "Jun 2022 - Mar 2023",
    position: "Senior Shopify Plus Developer",
    company: "Shoebacca",
    location: "Irving, TX",
    description: [
      "Customized Shopify Plus themes—Liquid sections, PDPs, collections, and landing pages—from Figma into consistent responsive storefront experiences.",
      "Drove CRO and A/B testing on discovery and checkout journeys using GA4/Hotjar insights while optimizing Core Web Vitals on key commercial templates.",
      "Integrated Shopify APIs, webhooks, and third-party apps for subscriptions, loyalty, shipping, and ERP/CRM sync; supported Shopify Markets localization.",
    ],
    techStack: [
      "Shopify Plus",
      "Liquid",
      "React.js",
      "Next.js",
      "GraphQL",
      "GA4",
      "Hotjar",
    ],
  },
  {
    duration: "Oct 2019 - May 2022",
    position: "Lead Shopify Developer",
    company: "Volusion",
    location: "Austin, TX",
    description: [
      "Led Shopify storefront delivery by building reusable Liquid sections, product templates, and frontend components merchants could update efficiently.",
      "Connected commerce systems through Shopify apps, REST/GraphQL APIs, ERP/CRM/inventory sync, and payments (Stripe, PayPal, Square, AfterPay), including POS workflows.",
      "Applied CRO and A/B testing with analytics-informed UX while explaining Shopify constraints and tradeoffs to non-technical clients.",
    ],
    techStack: [
      "Shopify",
      "Shopify Plus",
      "Liquid",
      "React.js",
      "GraphQL",
      "Stripe",
      "WooCommerce",
    ],
  },
  {
    duration: "Dec 2017 - Oct 2019",
    position: "Shopify Full Stack Developer",
    company: "IWD Agency",
    location: "Austin, TX",
    description: [
      "Delivered Shopify, WooCommerce, and EC-Cube client storefronts—Figma concepts to Liquid/React/Next.js themes with responsive product, collection, and promo sections.",
      "Improved shopping flows (discovery, accounts, wishlist, checkout) and integrated regional payments (Konbini, PayPay, Paidy) plus Shopify POS for online/offline ops.",
      "Maintained GitLab CI/CD and AWS release pipelines and supported post-launch performance, analytics, and A/B-driven UX improvements.",
    ],
    techStack: [
      "Shopify",
      "Liquid",
      "React.js",
      "Next.js",
      "WooCommerce",
      "AWS",
      "GitLab CI/CD",
    ],
  },
];
