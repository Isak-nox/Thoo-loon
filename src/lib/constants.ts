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
  /** Public storefront used as a visual showcase — not claimed client/employment work. */
  showcase: boolean;
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
    showcase: true,
    title: "Minaal — Travel Commerce Storefront Patterns",
    description:
      "Showcase study of a premium travel-gear Shopify storefront—product discovery, PDP storytelling, and mobile conversion paths typical of high-intent catalog commerce.",
    detailsIntro:
      "Public showcase storefront (not employment/client attribution). Used to illustrate how I approach Shopify theme UX for travel and lifestyle catalogs grounded in Liquid, OS 2.0 sections, Figma-to-theme fidelity, and CRO-minded merchandising.",
    detailSections: [
      {
        title: "UX patterns highlighted",
        items: [
          "Hero storytelling with clear CTAs into bag/collection discovery.",
          "Collection grids with readable product cards, pricing, and variant cues.",
          "Trust and shipping callouts that support international purchase confidence.",
        ],
      },
      {
        title: "Skills this showcase maps to",
        items: [
          "Shopify Online Store 2.0 section thinking and Liquid component reuse.",
          "Figma-aligned spacing, typography, and responsive QA discipline.",
          "Performance-aware image/asset approaches on product-heavy templates.",
        ],
      },
      {
        title: "Relevant delivery experience",
        items: [
          "Drawn from Senior Shopify work across employers on themes, PDPs, and CRO—not from claimed ownership of this brand.",
          "Same class of problems solved on production Shopify / Shopify Plus builds in my work history.",
        ],
      },
    ],
    demo: "https://www.minaal.com/",
    technologies: [
      "Shopify Plus",
      "Shopify Online Store 2.0",
      "Liquid",
      "Figma",
      "Responsive Design",
      "CRO",
    ],
    keySkills: [
      "Theme section architecture",
      "PDP & collection UX",
      "Figma-to-Liquid fidelity",
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
    showcase: true,
    title: "Brightland — DTC Merchandising & Bundle UX",
    description:
      "Showcase study of a design-led DTC Shopify brand—bestsellers, gift sets, and collection filters that model subscription-friendly pantry commerce layouts.",
    detailsIntro:
      "Public showcase storefront (not employment/client attribution). Focuses on merchandising systems, product-card hierarchy, and campaign-ready collection UX patterns I apply on Shopify builds.",
    detailSections: [
      {
        title: "UX patterns highlighted",
        items: [
          "Category filters and bestseller grids with clear badges and pricing.",
          "Gift-set and multi-SKU merchandising that reduces purchase ambiguity.",
          "Brand-forward heroes with concise CTAs into shoppable collections.",
        ],
      },
      {
        title: "Skills this showcase maps to",
        items: [
          "Shopify theme customization for DTC storytelling.",
          "Bundle / set presentation and subscribe vs one-time clarity patterns.",
          "Visual QA against expressive brand systems without cluttering CRO.",
        ],
      },
      {
        title: "Relevant delivery experience",
        items: [
          "Aligned with theme and landing-page work from my Shopify roles—not claimed work for this brand.",
        ],
      },
    ],
    demo: "https://brightland.co/",
    technologies: [
      "Shopify",
      "Liquid",
      "Figma",
      "CRO",
      "Responsive Design",
    ],
    keySkills: [
      "DTC collection UX",
      "Bundle & gift-set merchandising",
      "Campaign landing patterns",
      "Figma collaboration",
      "Mobile-first storefront UX",
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
    showcase: true,
    title: "Kinto USA — Minimal Catalog & Theme Discipline",
    description:
      "Showcase study of a minimal lifestyle Shopify catalog—whitespace, product grids, and education-friendly PLPs that reward precise theme and typography control.",
    detailsIntro:
      "Public showcase storefront (not employment/client attribution). Used to show how I protect a minimal brand system while keeping drinkware/tableware discovery clear and convertible.",
    detailSections: [
      {
        title: "UX patterns highlighted",
        items: [
          "Lifestyle hero carousel with restrained navigation chrome.",
          "Sparse but legible PLPs with swatches, pricing, and sort controls.",
          "Category framing (drinkware/tableware) that supports tidy taxonomy UX.",
        ],
      },
      {
        title: "Skills this showcase maps to",
        items: [
          "High-fidelity Figma-to-Liquid spacing and type fidelity.",
          "Reusable product-grid and navigation component patterns.",
          "Responsive QA where whitespace can break on small screens.",
        ],
      },
      {
        title: "Relevant delivery experience",
        items: [
          "Reflects theme customization craft from my Shopify positions—not ownership of this brand.",
        ],
      },
    ],
    demo: "https://kinto-usa.com/",
    technologies: [
      "Shopify",
      "Liquid",
      "Figma",
      "Theme Customization",
      "Responsive Design",
      "UX/UI Design Principles",
    ],
    keySkills: [
      "Minimal brand UX systems",
      "Catalog & taxonomy UX",
      "Figma-to-Liquid implementation",
      "PDP education layouts",
      "Visual QA",
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
    showcase: true,
    title: "Pela Case — High-Volume Catalog & Fit Discovery",
    description:
      "Showcase study of a dense eco-commerce catalog—device-aware merchandising, promotional badges, and collection UX suited to large SKU counts.",
    detailsIntro:
      "Public showcase storefront (not employment/client attribution). Demonstrates guided shopping and collection readability patterns I use when optimizing large Shopify catalogs.",
    detailSections: [
      {
        title: "UX patterns highlighted",
        items: [
          "Split heroes for campaigns and new arrivals above the fold.",
          "Dense product grids with badges, swatches, and device-oriented naming.",
          "Bestsellers storytelling that balances impact messaging with shoppability.",
        ],
      },
      {
        title: "Skills this showcase maps to",
        items: [
          "Filter / guided shopping UX for device-specific catalogs.",
          "Promo banner systems and badge patterns that stay readable on mobile.",
          "CWV-minded approaches for image-heavy PLPs.",
        ],
      },
      {
        title: "Relevant delivery experience",
        items: [
          "Maps to Shopify Plus catalog and CRO work across my employers—not claimed affiliation with this brand.",
        ],
      },
    ],
    demo: "https://pelacase.com/",
    technologies: [
      "Shopify Plus",
      "Liquid",
      "Figma",
      "Collection UX",
      "CRO",
      "Core Web Vitals",
    ],
    keySkills: [
      "Guided shopping UX",
      "High-volume catalog UX",
      "Promo & badge systems",
      "Responsive storefront design",
      "Performance awareness",
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
    showcase: true,
    title: "HexClad — Premium Hero & Set Merchandising",
    description:
      "Showcase study of a premium cookware Shopify experience—media-heavy heroes, set storytelling, and dark branded collection templates.",
    detailsIntro:
      "Public showcase storefront (not employment/client attribution). Highlights education-led PDP and campaign-landing patterns relevant to high-intent Shopify Plus commerce.",
    detailSections: [
      {
        title: "UX patterns highlighted",
        items: [
          "Cinematic heroes with endorsement and clear Shop CTAs.",
          "Category sub-nav supporting cookware discovery journeys.",
          "Set/bundle-forward PLPs with dark branded product photography.",
        ],
      },
      {
        title: "Skills this showcase maps to",
        items: [
          "Premium brand UI systems and Figma-to-theme fidelity.",
          "Bundle/set merchandising and education content hierarchy.",
          "Performance care on media-heavy commercial templates.",
        ],
      },
      {
        title: "Relevant delivery experience",
        items: [
          "Same problem class as campaign and PDP work in my Shopify Plus roles—not claimed work for this brand.",
        ],
      },
    ],
    demo: "https://hexclad.com/",
    technologies: [
      "Shopify Plus",
      "Liquid",
      "Figma",
      "CRO",
      "A/B Testing",
      "Responsive Design",
    ],
    keySkills: [
      "Premium brand UX/UI",
      "PDP education design",
      "Bundle & set merchandising",
      "Campaign landing patterns",
      "Visual QA",
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
    showcase: true,
    title: "Brooklinen — Guides, Filters & Sale Conversion UX",
    description:
      "Showcase study of a large DTC bedding storefront—guides, filter sidebars, sale badges, and collection storytelling for high-traffic commerce.",
    detailsIntro:
      "Public showcase storefront (not employment/client attribution). Used to illustrate guided shopping, promo urgency, and analytics-informed collection UX patterns from my Shopify practice.",
    detailSections: [
      {
        title: "UX patterns highlighted",
        items: [
          "Fabric/type guides that reduce bedding purchase uncertainty.",
          "Filter sidebars with clear product cards, social proof, and offer badges.",
          "Sale heroes and countdown messaging layered onto evergreen PLPs.",
        ],
      },
      {
        title: "Skills this showcase maps to",
        items: [
          "Collection + guide modules for complex product choices.",
          "CRO-minded offer messaging without breaking layout systems.",
          "Responsive QA across dense filter + grid templates.",
        ],
      },
      {
        title: "Relevant delivery experience",
        items: [
          "Reflects Shopify Plus conversion and theme work from my career—not claimed ownership of this brand.",
        ],
      },
    ],
    demo: "https://brooklinen.com/",
    technologies: [
      "Shopify Plus",
      "Liquid",
      "Figma",
      "CRO",
      "GA4",
      "Responsive Design",
    ],
    keySkills: [
      "Guided shopping UX",
      "Sale & campaign templates",
      "PDP conversion patterns",
      "Analytics-informed UX",
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
