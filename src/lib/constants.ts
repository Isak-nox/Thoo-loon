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
  category: string;
  detailSections: ProjectDetailSection[];
  demo: string;
  technologies: string[];
  keySkills: string[];
};

export const PROJECT_CATEGORIES = [
  "Featured Builds",
  "Shopify Portfolio",
  "WordPress / WooCommerce",
  "Shopify Storefronts",
  "Recent Storefronts"
] as const;

export type WORKFLOW = {
  title: string;
  description: string;
};

export const PROJECTS: Project[] = [
  {
    "image": "/projects/cyber-shoe-shop.png",
    "images": [
      "/projects/cyber-shoe-shop/01.png",
      "/projects/cyber-shoe-shop/02.png",
      "/projects/cyber-shoe-shop/03.png",
      "/projects/cyber-shoe-shop/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Full Stack Developer - Product Catalog and Cart UX",
    "title": "Cyber Shoe Shop - Ecommerce Storefront",
    "description": "Modern footwear ecommerce storefront with catalog browsing, product detail pages, and cart-focused shopping flows.",
    "detailsIntro": "Built a responsive shoe commerce experience focused on product discovery, clear PDP information, and smooth cart interactions.",
    "category": "Featured Builds",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Delivered homepage, collection, and product page layouts for a footwear catalog.",
          "Focused on clear product presentation and mobile shopping usability.",
          "Supported demo-ready cart and browsing interactions."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Implemented responsive product grids and detail templates.",
          "Structured reusable UI for cards, filters, and cart states.",
          "Validated visual QA across desktop and mobile breakpoints."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "React, Next.js, JavaScript, Tailwind CSS, Ecommerce UX"
        ]
      }
    ],
    "demo": "https://cyber-shoe-shop-group5-bcs12.vercel.app/",
    "technologies": [
      "React",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Ecommerce UX"
    ],
    "keySkills": [
      "Catalog UX",
      "PDP layout",
      "Cart flows",
      "Responsive UI"
    ]
  },
  {
    "image": "/projects/elegance.png",
    "images": [
      "/projects/elegance/01.png",
      "/projects/elegance/02.png",
      "/projects/elegance/03.png",
      "/projects/elegance/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Frontend Developer - Brand Presentation and PDP UX",
    "title": "Elegance Jewellery - Luxury Storefront",
    "description": "Luxury jewellery storefront with refined product storytelling, collection browsing, and conversion-minded product pages.",
    "detailsIntro": "Designed and built a polished jewellery commerce UI emphasizing imagery, category clarity, and premium product detail presentation.",
    "category": "Featured Builds",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Owned visual presentation for jewellery collections and featured products.",
          "Balanced brand aesthetics with clear shopping paths.",
          "Prepared production-ready responsive layouts."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Built collection and PDP templates with image-forward layouts.",
          "Refined typography and spacing for a premium look.",
          "Optimized responsive behavior for dense product imagery."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "React, Next.js, CSS, Responsive Design, Ecommerce UX"
        ]
      }
    ],
    "demo": "https://elegance-jewellery.vercel.app/",
    "technologies": [
      "React",
      "Next.js",
      "CSS",
      "Responsive Design",
      "Ecommerce UX"
    ],
    "keySkills": [
      "Luxury brand UI",
      "Collection browsing",
      "PDP storytelling",
      "Mobile polish"
    ]
  },
  {
    "image": "/projects/over-clocked.png",
    "images": [
      "/projects/over-clocked/01.png",
      "/projects/over-clocked/02.png",
      "/projects/over-clocked/03.png",
      "/projects/over-clocked/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Full Stack Developer - Catalog and Merchandising UI",
    "title": "Over Clocked - Gaming Hardware Store",
    "description": "Gaming hardware ecommerce experience with category merchandising, product specs presentation, and high-intent shopping layouts.",
    "detailsIntro": "Developed a performance-oriented hardware storefront UI for browsing components, comparing products, and moving quickly to purchase.",
    "category": "Featured Builds",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Delivered category and product templates for gaming hardware.",
          "Emphasized specs clarity and purchase intent on PDPs.",
          "Supported responsive shopping journeys end to end."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Implemented reusable product cards and category sections.",
          "Structured product detail content for technical shoppers.",
          "Tuned layout density for desktop and mobile catalogs."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "React, Next.js, JavaScript, Catalog UX, Responsive Design"
        ]
      }
    ],
    "demo": "https://over-clocked.vercel.app/",
    "technologies": [
      "React",
      "Next.js",
      "JavaScript",
      "Catalog UX",
      "Responsive Design"
    ],
    "keySkills": [
      "Tech catalog UX",
      "Spec presentation",
      "Category navigation",
      "CTA hierarchy"
    ]
  },
  {
    "image": "/projects/voice-ai-agent.png",
    "images": [
      "/projects/voice-ai-agent/01.png",
      "/projects/voice-ai-agent/02.png",
      "/projects/voice-ai-agent/03.png",
      "/projects/voice-ai-agent/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Shopify App Developer - AI Commerce Assistant",
    "title": "Voice AI Agent - Shopify App",
    "description": "Shopify app concept for an AI sales assistant that supports product discovery, shopper questions, and conversion-oriented storefront help.",
    "detailsIntro": "App-oriented Shopify work covering merchant-facing positioning, AI assistant flows, and storefront integration patterns for conversational commerce.",
    "category": "Featured Builds",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Mapped AI assistant use cases for Shopify merchants and shoppers.",
          "Presented product discovery and sales-support interaction patterns.",
          "Aligned app messaging with Shopify App Store expectations."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Documented integration patterns for storefront AI assistance.",
          "Focused on clear merchant value and shopper conversation flows.",
          "Connected product narrative to Shopify app distribution context."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "Shopify App, AI Assistant, JavaScript, Storefront UX, App Bridge"
        ]
      }
    ],
    "demo": "https://apps.shopify.com/voice-ai-agent",
    "technologies": [
      "Shopify App",
      "AI Assistant",
      "JavaScript",
      "Storefront UX",
      "App Bridge"
    ],
    "keySkills": [
      "Shopify app UX",
      "Conversational commerce",
      "Merchant onboarding",
      "AI-assisted shopping"
    ]
  },
  {
    "image": "/projects/martian-horse.png",
    "images": [
      "/projects/martian-horse/01.png",
      "/projects/martian-horse/02.png",
      "/projects/martian-horse/03.png",
      "/projects/martian-horse/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Frontend Developer - Brand Storefront Build",
    "title": "Martian Horse - Creative Ecommerce Front End",
    "description": "Creative brand storefront with expressive product presentation, collection browsing, and responsive ecommerce UI.",
    "detailsIntro": "Front-end build for a distinctive commerce brand, balancing visual identity with usable product discovery and shopping flows.",
    "category": "Featured Builds",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Built storefront pages that reflect a strong creative identity.",
          "Kept shopping paths clear despite expressive visuals.",
          "Delivered responsive layouts for key commerce templates."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Implemented homepage, collection, and product UI modules.",
          "Structured reusable components for cards and section layouts.",
          "Validated cross-device presentation and interaction states."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "React, JavaScript, CSS, Ecommerce UX, Responsive Design"
        ]
      }
    ],
    "demo": "https://martian-horse-front-end.onrender.com/",
    "technologies": [
      "React",
      "JavaScript",
      "CSS",
      "Ecommerce UX",
      "Responsive Design"
    ],
    "keySkills": [
      "Brand UI systems",
      "Product grids",
      "Responsive layouts",
      "Front-end delivery"
    ]
  },
  {
    "image": "/projects/forever.png",
    "images": [
      "/projects/forever/01.png",
      "/projects/forever/02.png",
      "/projects/forever/03.png",
      "/projects/forever/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Frontend Developer - Fashion Catalog UX",
    "title": "Forever - Fashion Ecommerce Front End",
    "description": "Fashion ecommerce front end focused on collection browsing, product cards, and mobile-first shopping presentation.",
    "detailsIntro": "Implemented a fashion retail UI with clean catalog layouts, product detail hierarchy, and responsive shopping interactions.",
    "category": "Featured Builds",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Delivered fashion collection and product browsing experiences.",
          "Prioritized mobile shopping clarity and visual hierarchy.",
          "Supported reusable UI patterns across catalog pages."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Built product listing and detail templates.",
          "Refined spacing, imagery, and CTA placement for conversion.",
          "Checked responsive behavior across key shopping breakpoints."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "React, JavaScript, CSS, Fashion UX, Responsive Design"
        ]
      }
    ],
    "demo": "https://forever-frontend-hazel.vercel.app/",
    "technologies": [
      "React",
      "JavaScript",
      "CSS",
      "Fashion UX",
      "Responsive Design"
    ],
    "keySkills": [
      "Fashion PLP/PDP",
      "Card systems",
      "Mobile commerce",
      "UI polish"
    ]
  },
  {
    "image": "/projects/flowerdose.png",
    "images": [
      "/projects/flowerdose/01.png",
      "/projects/flowerdose/02.png",
      "/projects/flowerdose/03.png",
      "/projects/flowerdose/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Shopify Developer - Theme Customization and CRO",
    "title": "Flowerdose - Floral Ecommerce Store",
    "description": "Floral ecommerce storefront work covering merchandising sections, product presentation, and mobile conversion paths.",
    "detailsIntro": "Theme and storefront refinement for a floral brand, with attention to campaign-ready sections and clear product-to-cart journeys.",
    "category": "Featured Builds",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Supported storefront presentation for seasonal floral offers.",
          "Improved clarity on collection and product templates.",
          "Focused on mobile usability and conversion cues."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Customized Liquid sections for homepage and product storytelling.",
          "Refined product cards and PDP content hierarchy.",
          "Validated responsive shopping flows before release."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "Shopify, Liquid, JavaScript, CRO, Responsive Design"
        ]
      }
    ],
    "demo": "https://flowerdose.com.au/",
    "technologies": [
      "Shopify",
      "Liquid",
      "JavaScript",
      "CRO",
      "Responsive Design"
    ],
    "keySkills": [
      "Theme sections",
      "Floral merchandising",
      "Mobile CRO",
      "Visual QA"
    ]
  },
  {
    "image": "/projects/thenervebrand.png",
    "images": [
      "/projects/thenervebrand/01.png",
      "/projects/thenervebrand/02.png",
      "/projects/thenervebrand/03.png",
      "/projects/thenervebrand/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Shopify Developer - High-Intent Landing and Checkout UX",
    "title": "The Nerve Brand - Checkout Landing Page",
    "description": "High-intent Shopify landing and checkout-oriented page focused on offer clarity, trust signals, and conversion flow.",
    "detailsIntro": "Built and refined an advertorial-style commerce landing experience designed to move shoppers quickly through offer understanding to checkout.",
    "category": "Featured Builds",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Structured a conversion-first landing layout for a targeted offer.",
          "Emphasized trust, benefits, and clear purchase CTAs.",
          "Aligned page flow with checkout intent."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Implemented Shopify page sections for advertorial content.",
          "Tuned CTA placement and mobile reading order.",
          "Checked form and checkout handoff usability."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "Shopify, Liquid, JavaScript, CRO, Landing Pages"
        ]
      }
    ],
    "demo": "https://thenervebrand.com/pages/neuropathycheckoutnosub",
    "technologies": [
      "Shopify",
      "Liquid",
      "JavaScript",
      "CRO",
      "Landing Pages"
    ],
    "keySkills": [
      "Landing page CRO",
      "Offer hierarchy",
      "Trust messaging",
      "Checkout intent"
    ]
  },
  {
    "image": "/projects/livelle.png",
    "images": [
      "/projects/livelle/01.png",
      "/projects/livelle/02.png",
      "/projects/livelle/03.png",
      "/projects/livelle/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Shopify Developer - Advertorial Conversion Pages",
    "title": "Livelle - Advertorial Commerce Page",
    "description": "Shopify advertorial page focused on long-form offer storytelling, social proof, and conversion-oriented CTA structure.",
    "detailsIntro": "Delivered an advertorial commerce template that balances persuasive content with clear product offer and purchase actions.",
    "category": "Featured Builds",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Owned layout and interaction for a long-form offer page.",
          "Kept persuasive content readable without losing conversion focus.",
          "Optimized for mobile scrolling and repeated CTA access."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Built Shopify page sections for narrative and offer blocks.",
          "Organized proof points, benefits, and purchase CTAs.",
          "Validated mobile spacing and click targets."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "Shopify, Liquid, JavaScript, CRO, Content UX"
        ]
      }
    ],
    "demo": "https://livelle.shop/pages/advertorial-1",
    "technologies": [
      "Shopify",
      "Liquid",
      "JavaScript",
      "CRO",
      "Content UX"
    ],
    "keySkills": [
      "Advertorial layouts",
      "Long-form CRO",
      "CTA systems",
      "Mobile reading flow"
    ]
  },
  {
    "image": "/projects/megannicius.png",
    "images": [
      "/projects/megannicius/01.png",
      "/projects/megannicius/02.png",
      "/projects/megannicius/03.png",
      "/projects/megannicius/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Frontend Developer - Brand Site and Product Presentation",
    "title": "Megan Nicius - Jewelry Brand Site",
    "description": "Jewelry brand site with elegant product presentation, collection storytelling, and responsive brand pages.",
    "detailsIntro": "Front-end presentation work for a jewelry brand, emphasizing visual polish, product imagery, and clear browsing structure.",
    "category": "Featured Builds",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Delivered brand-forward jewelry pages and product presentation.",
          "Balanced aesthetic detail with usable navigation.",
          "Ensured responsive presentation across devices."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Structured collection and product presentation sections.",
          "Refined spacing and typography for a luxury feel.",
          "Checked mobile and desktop visual consistency."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "Wix Studio, Responsive Design, Brand UI, Ecommerce UX"
        ]
      }
    ],
    "demo": "https://megannicius.wixstudio.com/jewelry",
    "technologies": [
      "Wix Studio",
      "Responsive Design",
      "Brand UI",
      "Ecommerce UX"
    ],
    "keySkills": [
      "Brand storytelling",
      "Product imagery",
      "Responsive polish",
      "Collection layout"
    ]
  },
  {
    "image": "/projects/thruhiminc.png",
    "images": [
      "/projects/thruhiminc/01.png",
      "/projects/thruhiminc/02.png",
      "/projects/thruhiminc/03.png",
      "/projects/thruhiminc/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Shopify Developer - Theme Build and Brand Storefront",
    "title": "Thru Him Inc - Faith Brand Storefront",
    "description": "Brand storefront work covering theme presentation, product merchandising, and responsive shopping templates.",
    "detailsIntro": "Shopify theme customization for a faith-focused brand, with reusable sections and clear product browsing journeys.",
    "category": "Featured Builds",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Supported storefront theme presentation for brand campaigns.",
          "Improved product and collection clarity.",
          "Delivered responsive shopping templates."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Customized Liquid sections and templates.",
          "Refined homepage and product storytelling modules.",
          "Performed visual QA across key storefront pages."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "Shopify, Liquid, JavaScript, Theme Development, Responsive Design"
        ]
      }
    ],
    "demo": "https://thruhiminc.com/",
    "technologies": [
      "Shopify",
      "Liquid",
      "JavaScript",
      "Theme Development",
      "Responsive Design"
    ],
    "keySkills": [
      "Theme customization",
      "Brand merchandising",
      "Section systems",
      "Mobile UX"
    ]
  },
  {
    "image": "/projects/luxraid.png",
    "images": [
      "/projects/luxraid/01.png",
      "/projects/luxraid/02.png",
      "/projects/luxraid/03.png",
      "/projects/luxraid/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Shopify Developer - Premium Theme and Conversion UX",
    "title": "Luxraid - Premium Commerce Storefront",
    "description": "Premium ecommerce storefront work focused on polished product presentation, merchandising sections, and conversion-minded UX.",
    "detailsIntro": "Theme and storefront engineering for a premium brand, covering homepage storytelling, collections, and product detail clarity.",
    "category": "Featured Builds",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Delivered premium storefront presentation across key templates.",
          "Aligned merchandising modules with brand and conversion goals.",
          "Prioritized mobile shopping clarity."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Built and refined Liquid sections for campaigns and catalogs.",
          "Improved PDP content structure and CTA prominence.",
          "Optimized responsive layouts for image-forward pages."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "Shopify, Liquid, JavaScript, CRO, Responsive Design"
        ]
      }
    ],
    "demo": "https://luxraid.com/",
    "technologies": [
      "Shopify",
      "Liquid",
      "JavaScript",
      "CRO",
      "Responsive Design"
    ],
    "keySkills": [
      "Premium UI",
      "Merchandising sections",
      "PDP hierarchy",
      "Conversion UX"
    ]
  },
  {
    "image": "/projects/minaal.png",
    "images": [
      "/projects/minaal/01.png",
      "/projects/minaal/02.png",
      "/projects/minaal/03.png",
      "/projects/minaal/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Lead Shopify Developer - Theme Architecture and Conversion UX",
    "title": "Minaal - Travel Commerce Storefront",
    "description": "Shopify storefront patterns for a travel brand, covering hero merchandising, bag collections, product education, and mobile conversion paths.",
    "detailsIntro": "Lead Shopify Developer scope for travel commerce: OS 2.0 sections, Liquid templates, and conversion-minded product discovery.",
    "category": "Shopify Portfolio",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Delivered theme architecture for homepage, collections, and PDPs.",
          "Partnered on campaign-ready merchandising modules.",
          "Prioritized conversion on discovery to ATC paths."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Built reusable Liquid sections and product card systems.",
          "Structured collection templates for travel categories.",
          "Optimized assets and responsive behavior for catalog pages."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "Shopify Plus, Liquid, Online Store 2.0, JavaScript, CRO"
        ]
      }
    ],
    "demo": "https://www.minaal.com/",
    "technologies": [
      "Shopify Plus",
      "Liquid",
      "Online Store 2.0",
      "JavaScript",
      "CRO"
    ],
    "keySkills": [
      "Theme architecture",
      "Travel catalog UX",
      "PDP education",
      "Mobile CRO"
    ]
  },
  {
    "image": "/projects/brightland.png",
    "images": [
      "/projects/brightland/01.png",
      "/projects/brightland/02.png",
      "/projects/brightland/03.png",
      "/projects/brightland/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Lead Shopify Developer - Merchandising Systems and Bundle UX",
    "title": "Brightland - DTC Pantry Brand",
    "description": "Shopify merchandising work for a DTC pantry brand, including collection filters, product badges, bundles, and campaign sections.",
    "detailsIntro": "Storefront engineering for brand-forward grocery commerce with Liquid sections, bundle UX, and conversion signals.",
    "category": "Shopify Portfolio",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Implemented merchandising systems for collections and gifts.",
          "Supported bundle and subscription messaging patterns.",
          "Kept conversion signals clear on mobile."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Built collection navigation and product card schemas.",
          "Developed bundle and campaign landing sections.",
          "Ran visual QA against brand design direction."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "Shopify, Liquid, JavaScript, CRO, Theme Sections"
        ]
      }
    ],
    "demo": "https://brightland.co/",
    "technologies": [
      "Shopify",
      "Liquid",
      "JavaScript",
      "CRO",
      "Theme Sections"
    ],
    "keySkills": [
      "Bundle UX",
      "Merchandising badges",
      "Campaign sections",
      "Mobile conversion"
    ]
  },
  {
    "image": "/projects/kinto-usa.png",
    "images": [
      "/projects/kinto-usa/01.png",
      "/projects/kinto-usa/02.png",
      "/projects/kinto-usa/03.png",
      "/projects/kinto-usa/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Lead Shopify Developer - Brand-Faithful Theme Customization",
    "title": "Kinto USA - Lifestyle Catalog",
    "description": "Minimal lifestyle Shopify catalog with careful theme customization, clean PLPs, and brand-faithful spacing and typography.",
    "detailsIntro": "Theme customization for a restrained design system: whitespace, muted chrome, and clear drinkware and tableware browsing.",
    "category": "Shopify Portfolio",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Customized theme layout for a minimal brand system.",
          "Delivered clean collection and product browsing.",
          "Preserved design fidelity across breakpoints."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Implemented homepage and collection templates.",
          "Standardized reusable product grid components.",
          "Validated spacing and typography against design comps."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "Shopify, Liquid, CSS, Figma, Responsive Design"
        ]
      }
    ],
    "demo": "https://kinto-usa.com/",
    "technologies": [
      "Shopify",
      "Liquid",
      "CSS",
      "Figma",
      "Responsive Design"
    ],
    "keySkills": [
      "Minimal UI systems",
      "PLP templates",
      "Theme settings",
      "Design QA"
    ]
  },
  {
    "image": "/projects/pelacase.png",
    "images": [
      "/projects/pelacase/01.png",
      "/projects/pelacase/02.png",
      "/projects/pelacase/03.png",
      "/projects/pelacase/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Lead Shopify Developer - Guided Shopping and Catalog Performance",
    "title": "Pela Case - High-Volume Device Catalog",
    "description": "Shopify Plus catalog work for a high-SKU device accessories brand, including guided shopping, filters, and performance-minded PLPs.",
    "detailsIntro": "Engineering for dense collections: device fit flows, filter UX, promo badges, and Core Web Vitals on image-heavy templates.",
    "category": "Shopify Portfolio",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Owned guided shopping and dense catalog presentation.",
          "Supported promo badge and campaign merchandising.",
          "Prioritized performance on large collection pages."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Implemented filter and device-fit browsing patterns.",
          "Optimized image-heavy PLP templates.",
          "Hardened reusable components for frequent campaigns."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "Shopify Plus, Liquid, JavaScript, Collection UX, Core Web Vitals"
        ]
      }
    ],
    "demo": "https://pelacase.com/",
    "technologies": [
      "Shopify Plus",
      "Liquid",
      "JavaScript",
      "Collection UX",
      "Core Web Vitals"
    ],
    "keySkills": [
      "Guided shopping",
      "High-SKU PLPs",
      "Filter UX",
      "Catalog performance"
    ]
  },
  {
    "image": "/projects/hexclad.png",
    "images": [
      "/projects/hexclad/01.png",
      "/projects/hexclad/02.png",
      "/projects/hexclad/03.png",
      "/projects/hexclad/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Lead Shopify Developer - Premium PDP and Campaign Storefronts",
    "title": "HexClad - Premium Cookware Storefront",
    "description": "Premium Shopify Plus cookware storefront covering hero storytelling, bundle merchandising, education modules, and campaign landings.",
    "detailsIntro": "Media-heavy theme work for premium cookware: heroes, multi-level nav, sets, and conversion-focused PDP education.",
    "category": "Shopify Portfolio",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Delivered premium homepage and product storytelling.",
          "Supported set and bundle merchandising patterns.",
          "Aligned campaign landings with promo calendars."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Built hero, education, and sale sections in Liquid.",
          "Structured multi-level navigation for cookware discovery.",
          "Optimized media delivery for Core Web Vitals."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "Shopify Plus, Liquid, JavaScript, CRO, Core Web Vitals"
        ]
      }
    ],
    "demo": "https://hexclad.com/",
    "technologies": [
      "Shopify Plus",
      "Liquid",
      "JavaScript",
      "CRO",
      "Core Web Vitals"
    ],
    "keySkills": [
      "Premium PDP",
      "Bundle modules",
      "Campaign landings",
      "Media performance"
    ]
  },
  {
    "image": "/projects/brooklinen.png",
    "images": [
      "/projects/brooklinen/01.png",
      "/projects/brooklinen/02.png",
      "/projects/brooklinen/03.png",
      "/projects/brooklinen/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Lead Shopify Developer - Guided Commerce and Sale Conversion",
    "title": "Brooklinen - DTC Bedding Commerce",
    "description": "Shopify Plus bedding commerce with guided shopping modules, filtered collections, sale heroes, and conversion-minded PDPs.",
    "detailsIntro": "Large DTC storefront patterns for education-led shopping, promotional PLPs, and reliable campaign theme updates.",
    "category": "Shopify Portfolio",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Implemented guided shopping and educational modules.",
          "Supported sale and evergreen collection templates.",
          "Kept theme changes release-safe for frequent campaigns."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Built filterable collection layouts and promo banners.",
          "Refined PDP offer, rating, and swatch hierarchy.",
          "Performance-checked content-heavy commercial pages."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "Shopify Plus, Liquid, JavaScript, CRO, Responsive Design"
        ]
      }
    ],
    "demo": "https://brooklinen.com/",
    "technologies": [
      "Shopify Plus",
      "Liquid",
      "JavaScript",
      "CRO",
      "Responsive Design"
    ],
    "keySkills": [
      "Guided shopping",
      "Sale PLPs",
      "PDP hierarchy",
      "Campaign releases"
    ]
  },
  {
    "image": "/projects/spellbrite.png",
    "images": [
      "/projects/spellbrite/01.png",
      "/projects/spellbrite/02.png",
      "/projects/spellbrite/03.png",
      "/projects/spellbrite/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "WooCommerce Developer - Theme and Catalog UX",
    "title": "Spellbrite - WooCommerce Storefront",
    "description": "WordPress WooCommerce storefront work covering product catalog presentation, theme customization, and responsive shopping flows.",
    "detailsIntro": "WooCommerce theme and catalog UX for a consumer brand, with focus on product discovery and mobile purchase paths.",
    "category": "WordPress / WooCommerce",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Customized WooCommerce templates for catalog and product pages.",
          "Improved browsing clarity and mobile usability.",
          "Supported storefront presentation for promotions."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Refined product listing and detail templates.",
          "Adjusted theme styles for brand consistency.",
          "Validated cart and responsive shopping behavior."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "WordPress, WooCommerce, PHP, JavaScript, Responsive Design"
        ]
      }
    ],
    "demo": "https://www.spellbrite.com/",
    "technologies": [
      "WordPress",
      "WooCommerce",
      "PHP",
      "JavaScript",
      "Responsive Design"
    ],
    "keySkills": [
      "WooCommerce themes",
      "Catalog UX",
      "Checkout readiness",
      "Mobile storefront"
    ]
  },
  {
    "image": "/projects/porterandyork.png",
    "images": [
      "/projects/porterandyork/01.png",
      "/projects/porterandyork/02.png",
      "/projects/porterandyork/03.png",
      "/projects/porterandyork/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "WooCommerce Developer - Premium Catalog Presentation",
    "title": "Porter & York - Premium Food Commerce",
    "description": "Premium WooCommerce food commerce with refined product presentation, category browsing, and brand-forward storefront UX.",
    "detailsIntro": "Theme and catalog work for a premium food retailer on WordPress WooCommerce, emphasizing imagery and clear purchase paths.",
    "category": "WordPress / WooCommerce",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Delivered premium catalog and product presentation.",
          "Supported category merchandising for food products.",
          "Kept shopping flows clear on mobile."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Customized WooCommerce templates and styles.",
          "Structured product cards and detail hierarchy.",
          "Checked responsive layouts across key pages."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "WordPress, WooCommerce, CSS, JavaScript, Ecommerce UX"
        ]
      }
    ],
    "demo": "https://porterandyork.com/",
    "technologies": [
      "WordPress",
      "WooCommerce",
      "CSS",
      "JavaScript",
      "Ecommerce UX"
    ],
    "keySkills": [
      "Premium PLP/PDP",
      "Category merchandising",
      "Brand UI",
      "Responsive QA"
    ]
  },
  {
    "image": "/projects/shoprootscience.png",
    "images": [
      "/projects/shoprootscience/01.png",
      "/projects/shoprootscience/02.png",
      "/projects/shoprootscience/03.png",
      "/projects/shoprootscience/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "WooCommerce Developer - Brand Storefront and PDP UX",
    "title": "Root Science - Wellness WooCommerce Store",
    "description": "Wellness brand WooCommerce storefront covering collection browsing, product education, and conversion-minded product pages.",
    "detailsIntro": "WordPress WooCommerce development for a wellness brand with education-led PDPs and clean catalog presentation.",
    "category": "WordPress / WooCommerce",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Owned storefront presentation for wellness products.",
          "Improved product education and offer clarity.",
          "Supported responsive shopping journeys."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Built and refined WooCommerce templates.",
          "Organized PDP content for ingredients and benefits.",
          "Validated mobile conversion cues and CTAs."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "WordPress, WooCommerce, PHP, JavaScript, CRO"
        ]
      }
    ],
    "demo": "https://www.shoprootscience.com/",
    "technologies": [
      "WordPress",
      "WooCommerce",
      "PHP",
      "JavaScript",
      "CRO"
    ],
    "keySkills": [
      "Wellness PDP education",
      "Collection UX",
      "Theme customization",
      "CRO"
    ]
  },
  {
    "image": "/projects/aprilsoderstrom.png",
    "images": [
      "/projects/aprilsoderstrom/01.png",
      "/projects/aprilsoderstrom/02.png",
      "/projects/aprilsoderstrom/03.png",
      "/projects/aprilsoderstrom/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "WooCommerce Developer - Fashion Theme and Merchandising",
    "title": "April Soderstrom - Fashion WooCommerce",
    "description": "Fashion WooCommerce storefront with collection merchandising, product grids, and brand-led shopping templates.",
    "detailsIntro": "Theme customization for a fashion retailer on WooCommerce, covering new arrivals, category browsing, and PDP presentation.",
    "category": "WordPress / WooCommerce",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Delivered fashion collection and product templates.",
          "Supported new arrivals and category merchandising.",
          "Prioritized mobile shopping presentation."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Customized WooCommerce shop and product templates.",
          "Refined card layouts and visual hierarchy.",
          "Performed responsive visual QA."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "WordPress, WooCommerce, CSS, JavaScript, Fashion UX"
        ]
      }
    ],
    "demo": "https://www.aprilsoderstrom.com/",
    "technologies": [
      "WordPress",
      "WooCommerce",
      "CSS",
      "JavaScript",
      "Fashion UX"
    ],
    "keySkills": [
      "Fashion collections",
      "Product grids",
      "Theme styling",
      "Mobile fashion UX"
    ]
  },
  {
    "image": "/projects/scrubdaddy.png",
    "images": [
      "/projects/scrubdaddy/01.png",
      "/projects/scrubdaddy/02.png",
      "/projects/scrubdaddy/03.png",
      "/projects/scrubdaddy/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "WooCommerce Developer - High-Traffic Catalog UX",
    "title": "Scrub Daddy - Consumer Brand Commerce",
    "description": "High-visibility consumer brand WooCommerce work covering product merchandising, promotional presentation, and conversion paths.",
    "detailsIntro": "Storefront support for a popular consumer brand: catalog clarity, promo modules, and reliable shopping templates.",
    "category": "WordPress / WooCommerce",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Supported high-traffic catalog and promo presentation.",
          "Improved product discovery and offer messaging.",
          "Kept CTAs clear across devices."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Refined WooCommerce listing and product pages.",
          "Tuned promotional modules for campaign readiness.",
          "Checked responsive and conversion-critical flows."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "WordPress, WooCommerce, JavaScript, CRO, Responsive Design"
        ]
      }
    ],
    "demo": "https://scrubdaddy.com/",
    "technologies": [
      "WordPress",
      "WooCommerce",
      "JavaScript",
      "CRO",
      "Responsive Design"
    ],
    "keySkills": [
      "Promo merchandising",
      "Catalog clarity",
      "Conversion UX",
      "Responsive templates"
    ]
  },
  {
    "image": "/projects/thoo-wordpress-woocommerce.png",
    "images": [
      "/projects/thoo-wordpress-woocommerce/01.png",
      "/projects/thoo-wordpress-woocommerce/02.png",
      "/projects/thoo-wordpress-woocommerce/03.png",
      "/projects/thoo-wordpress-woocommerce/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "WooCommerce Developer - Theme Architecture Demo",
    "title": "Thoo WooCommerce Demo - Theme Showcase",
    "description": "Personal WooCommerce theme showcase demonstrating catalog layouts, product detail patterns, and responsive commerce UI.",
    "detailsIntro": "Demo storefront highlighting WooCommerce theme capabilities, reusable templates, and clean shopping UX patterns.",
    "category": "WordPress / WooCommerce",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Built a demo WooCommerce storefront for portfolio presentation.",
          "Showcased catalog, PDP, and cart-ready templates.",
          "Documented reusable theme patterns."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Implemented shop, product, and content templates.",
          "Styled responsive commerce components.",
          "Prepared screenshots across key shopping states."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "WordPress, WooCommerce, PHP, CSS, Responsive Design"
        ]
      }
    ],
    "demo": "https://thoo-wordpress-woocommerce.vercel.app/",
    "technologies": [
      "WordPress",
      "WooCommerce",
      "PHP",
      "CSS",
      "Responsive Design"
    ],
    "keySkills": [
      "Theme architecture",
      "Demo catalog UX",
      "Template systems",
      "UI polish"
    ]
  },
  {
    "image": "/projects/allbirds.png",
    "images": [
      "/projects/allbirds/01.png",
      "/projects/allbirds/02.png",
      "/projects/allbirds/03.png",
      "/projects/allbirds/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Lead Shopify Developer - Theme Architecture and Conversion UX",
    "title": "Allbirds - Sustainable Footwear Storefront",
    "description": "Shopify Plus storefront work for a sustainability-led footwear brand, covering hero merchandising, gender collections, filters, and product discovery.",
    "detailsIntro": "Theme architecture and conversion UX for footwear commerce with Liquid, Online Store 2.0, and collection-focused shopping paths.",
    "category": "Shopify Storefronts",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Delivered collection and product discovery patterns.",
          "Supported gender and category merchandising templates.",
          "Focused on conversion from browse to PDP."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Built Liquid sections for heroes and collections.",
          "Refined filter and product card presentation.",
          "Validated responsive shopping journeys."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "Shopify Plus, Liquid, Online Store 2.0, JavaScript, Collection UX"
        ]
      }
    ],
    "demo": "https://www.allbirds.com/",
    "technologies": [
      "Shopify Plus",
      "Liquid",
      "Online Store 2.0",
      "JavaScript",
      "Collection UX"
    ],
    "keySkills": [
      "Footwear PLP/PDP",
      "Filter systems",
      "Hero merchandising",
      "Conversion UX"
    ]
  },
  {
    "image": "/projects/ugmonk.png",
    "images": [
      "/projects/ugmonk/01.png",
      "/projects/ugmonk/02.png",
      "/projects/ugmonk/03.png",
      "/projects/ugmonk/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Lead Shopify Developer - Brand Theme and Product Systems",
    "title": "Ugmonk - Design-Led Lifestyle Commerce",
    "description": "Design-led Shopify storefront with careful product systems, collection storytelling, and brand-faithful theme presentation.",
    "detailsIntro": "Theme customization for a design-focused lifestyle brand with clean PLPs, product kits, and restrained visual hierarchy.",
    "category": "Shopify Storefronts",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Owned brand-faithful theme presentation.",
          "Supported kit and collection merchandising.",
          "Kept product discovery calm and clear."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Implemented Liquid templates for lifestyle collections.",
          "Structured reusable product card patterns.",
          "Checked spacing and typography consistency."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "Shopify, Liquid, JavaScript, Figma, Responsive Design"
        ]
      }
    ],
    "demo": "https://ugmonk.com/",
    "technologies": [
      "Shopify",
      "Liquid",
      "JavaScript",
      "Figma",
      "Responsive Design"
    ],
    "keySkills": [
      "Brand theme systems",
      "Kit merchandising",
      "Clean PLPs",
      "Design QA"
    ]
  },
  {
    "image": "/projects/staycourant.png",
    "images": [
      "/projects/staycourant/01.png",
      "/projects/staycourant/02.png",
      "/projects/staycourant/03.png",
      "/projects/staycourant/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Lead Shopify Developer - Product Storytelling and CRO",
    "title": "Courant - Lifestyle Product Storefront",
    "description": "Shopify storefront for lifestyle products with strong product storytelling, feature education, and conversion-oriented PDPs.",
    "detailsIntro": "Storefront engineering focused on product education modules, polished PDP hierarchy, and mobile conversion paths.",
    "category": "Shopify Storefronts",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Delivered storytelling-led product pages.",
          "Supported feature education and trust content.",
          "Prioritized mobile conversion clarity."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Built Liquid sections for product narratives.",
          "Refined PDP CTA and content hierarchy.",
          "Validated responsive presentation."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "Shopify, Liquid, JavaScript, CRO, Responsive Design"
        ]
      }
    ],
    "demo": "https://staycourant.com/",
    "technologies": [
      "Shopify",
      "Liquid",
      "JavaScript",
      "CRO",
      "Responsive Design"
    ],
    "keySkills": [
      "Product storytelling",
      "Feature education",
      "PDP CRO",
      "Mobile UX"
    ]
  },
  {
    "image": "/projects/stevemadden.png",
    "images": [
      "/projects/stevemadden/01.png",
      "/projects/stevemadden/02.png",
      "/projects/stevemadden/03.png",
      "/projects/stevemadden/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Lead Shopify Developer - High-Volume Fashion Catalog",
    "title": "Steve Madden - Fashion Footwear Commerce",
    "description": "High-volume fashion footwear Shopify storefront covering seasonal collections, dense PLPs, and promotional merchandising.",
    "detailsIntro": "Catalog and theme work for a large fashion footwear brand with campaign readiness and clear product discovery.",
    "category": "Shopify Storefronts",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Supported high-volume collection and promo templates.",
          "Improved product discovery across seasonal drops.",
          "Kept mobile browsing usable at catalog scale."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Refined Liquid collection and product templates.",
          "Tuned card density and promo messaging.",
          "Checked responsive behavior on key shopping pages."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "Shopify Plus, Liquid, JavaScript, Collection UX, CRO"
        ]
      }
    ],
    "demo": "https://www.stevemadden.com/",
    "technologies": [
      "Shopify Plus",
      "Liquid",
      "JavaScript",
      "Collection UX",
      "CRO"
    ],
    "keySkills": [
      "Fashion PLPs",
      "Seasonal campaigns",
      "Dense catalogs",
      "Promo merchandising"
    ]
  },
  {
    "image": "/projects/beardbrand.png",
    "images": [
      "/projects/beardbrand/01.png",
      "/projects/beardbrand/02.png",
      "/projects/beardbrand/03.png",
      "/projects/beardbrand/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Lead Shopify Developer - Merchandising and Subscription UX",
    "title": "Beardbrand - DTC Grooming Storefront",
    "description": "DTC grooming Shopify storefront with merchandising systems, product education, and conversion-focused shopping flows.",
    "detailsIntro": "Theme and CRO work for grooming commerce: collections, education content, and clear paths from browse to purchase.",
    "category": "Shopify Storefronts",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Delivered merchandising and education-led storefront modules.",
          "Supported product discovery for grooming lines.",
          "Focused on conversion cues on mobile."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Built Liquid sections for collections and PDPs.",
          "Organized education and offer content.",
          "Validated shopping flows across devices."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "Shopify, Liquid, JavaScript, CRO, Responsive Design"
        ]
      }
    ],
    "demo": "https://www.beardbrand.com/",
    "technologies": [
      "Shopify",
      "Liquid",
      "JavaScript",
      "CRO",
      "Responsive Design"
    ],
    "keySkills": [
      "Grooming catalog UX",
      "Education modules",
      "Merchandising",
      "Mobile CRO"
    ]
  },
  {
    "image": "/projects/mejuri.png",
    "images": [
      "/projects/mejuri/01.png",
      "/projects/mejuri/02.png",
      "/projects/mejuri/03.png",
      "/projects/mejuri/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Lead Shopify Developer - Luxury Catalog and PDP UX",
    "title": "Mejuri - Fine Jewelry Commerce",
    "description": "Fine jewelry Shopify Plus storefront covering luxury collection browsing, refined PDPs, and conversion-minded product presentation.",
    "detailsIntro": "Theme architecture for jewelry commerce with image-forward collections, polished PDP hierarchy, and mobile shopping clarity.",
    "category": "Shopify Storefronts",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Owned luxury collection and product presentation patterns.",
          "Supported refined merchandising for jewelry categories.",
          "Prioritized mobile polish and purchase clarity."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Implemented Liquid templates for jewelry catalogs.",
          "Refined PDP imagery and content hierarchy.",
          "Optimized responsive layouts for dense product photography."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "Shopify Plus, Liquid, JavaScript, CRO, Responsive Design"
        ]
      }
    ],
    "demo": "https://mejuri.com/",
    "technologies": [
      "Shopify Plus",
      "Liquid",
      "JavaScript",
      "CRO",
      "Responsive Design"
    ],
    "keySkills": [
      "Luxury PLP/PDP",
      "Jewelry merchandising",
      "Image-forward UX",
      "Mobile conversion"
    ]
  },
  {
    "image": "/projects/nour-hammour.png",
    "images": [
      "/projects/nour-hammour/01.png",
      "/projects/nour-hammour/02.png",
      "/projects/nour-hammour/03.png",
      "/projects/nour-hammour/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Lead Shopify Developer - Theme Architecture and Storefront UX",
    "title": "Nour Hammour - Fashion Storefront",
    "description": "Shopify storefront work for a fashion brand, covering theme sections, collection browsing, product presentation, and mobile shopping UX.",
    "detailsIntro": "Lead Shopify Developer patterns for a fashion ecommerce storefront using Liquid, Online Store 2.0 sections, and conversion-minded product discovery.",
    "category": "Recent Storefronts",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Delivered theme architecture for homepage, collections, and product pages.",
          "Partnered with design and merchandising on campaign-ready modules.",
          "Prioritized mobile usability and clear shopping paths."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Built reusable Liquid sections, blocks, and templates.",
          "Refined collection and PDP layouts for product discovery.",
          "Optimized frontend assets and responsive behavior."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "Shopify Plus, Liquid, Online Store 2.0, JavaScript, CRO"
        ]
      }
    ],
    "demo": "https://nour-hammour.com/",
    "technologies": [
      "Shopify Plus",
      "Liquid",
      "Online Store 2.0",
      "JavaScript",
      "CRO"
    ],
    "keySkills": [
      "Theme architecture",
      "Fashion collection UX",
      "PDP presentation",
      "Mobile storefront UX"
    ]
  },
  {
    "image": "/projects/factorbikes.png",
    "images": [
      "/projects/factorbikes/01.png",
      "/projects/factorbikes/02.png",
      "/projects/factorbikes/03.png",
      "/projects/factorbikes/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Lead Shopify Developer - Catalog UX and Performance",
    "title": "Factor Bikes - Performance Cycling Store",
    "description": "Shopify Plus catalog and storefront work for a performance bike brand, including product education, collection templates, and high-intent shopping flows.",
    "detailsIntro": "Storefront engineering for a technical product catalog with Liquid theme systems, merchandising modules, and performance-minded media delivery.",
    "category": "Recent Storefronts",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Owned catalog and product education UX for cycling storefronts.",
          "Supported merchandising updates through reusable sections.",
          "Focused on clarity for complex product options."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Implemented Liquid collection and PDP templates.",
          "Built reusable sections for product storytelling.",
          "Optimized image-heavy templates for Core Web Vitals."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "Shopify Plus, Liquid, JavaScript, Collection UX, Core Web Vitals"
        ]
      }
    ],
    "demo": "https://factorbikes.com/",
    "technologies": [
      "Shopify Plus",
      "Liquid",
      "JavaScript",
      "Collection UX",
      "Core Web Vitals"
    ],
    "keySkills": [
      "Technical catalog UX",
      "Product education modules",
      "Theme performance",
      "Responsive storefront QA"
    ]
  },
  {
    "image": "/projects/kotn.png",
    "images": [
      "/projects/kotn/01.png",
      "/projects/kotn/02.png",
      "/projects/kotn/03.png",
      "/projects/kotn/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Lead Shopify Developer - Brand Theme and Merchandising",
    "title": "Kotn - Sustainable Fashion Storefront",
    "description": "Shopify storefront work for a sustainable fashion brand with collection storytelling, product discovery, and brand-led theme presentation.",
    "detailsIntro": "Theme and merchandising systems for fashion commerce using Liquid sections, clean PLPs, and conversion-minded product pages.",
    "category": "Recent Storefronts",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Delivered brand-led collection and product templates.",
          "Supported sustainable fashion storytelling modules.",
          "Kept mobile shopping paths clear."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Built Liquid OS 2.0 sections for campaigns and catalogs.",
          "Refined product card and PDP hierarchy.",
          "Validated responsive QA across key templates."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "Shopify Plus, Liquid, Online Store 2.0, JavaScript, CRO"
        ]
      }
    ],
    "demo": "https://kotn.com/",
    "technologies": [
      "Shopify Plus",
      "Liquid",
      "Online Store 2.0",
      "JavaScript",
      "CRO"
    ],
    "keySkills": [
      "Fashion merchandising",
      "Brand theme systems",
      "Collection UX",
      "Mobile shopping"
    ]
  },
  {
    "image": "/projects/bitetoothpastebits.png",
    "images": [
      "/projects/bitetoothpastebits/01.png",
      "/projects/bitetoothpastebits/02.png",
      "/projects/bitetoothpastebits/03.png",
      "/projects/bitetoothpastebits/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Lead Shopify Developer - Subscription and Conversion UX",
    "title": "Bite - DTC Oral Care Storefront",
    "description": "DTC Shopify storefront for oral care with product education, offer clarity, and conversion-oriented shopping templates.",
    "detailsIntro": "Storefront engineering for DTC health commerce: education-led PDPs, merchandising sections, and mobile conversion focus.",
    "category": "Recent Storefronts",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Delivered education-led product and offer presentation.",
          "Supported campaign merchandising modules.",
          "Prioritized conversion on mobile shopping paths."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Implemented Liquid sections for homepage and PDPs.",
          "Structured offer and education content hierarchy.",
          "Optimized responsive shopping templates."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "Shopify Plus, Liquid, JavaScript, CRO, Responsive Design"
        ]
      }
    ],
    "demo": "https://bitetoothpastebits.com/",
    "technologies": [
      "Shopify Plus",
      "Liquid",
      "JavaScript",
      "CRO",
      "Responsive Design"
    ],
    "keySkills": [
      "DTC PDP education",
      "Offer clarity",
      "Merchandising sections",
      "Mobile CRO"
    ]
  },
  {
    "image": "/projects/shocksurplus.png",
    "images": [
      "/projects/shocksurplus/01.png",
      "/projects/shocksurplus/02.png",
      "/projects/shocksurplus/03.png",
      "/projects/shocksurplus/04.png"
    ],
    "platform": [
      "Website"
    ],
    "role": "Lead Shopify Developer - Technical Catalog and Filters",
    "title": "Shock Surplus - Performance Parts Catalog",
    "description": "Shopify Plus technical catalog for performance parts with filter-heavy browsing, product specs, and high-intent purchase flows.",
    "detailsIntro": "Catalog engineering for a complex parts storefront: filters, technical PDPs, and performance-minded collection templates.",
    "category": "Recent Storefronts",
    "detailSections": [
      {
        "title": "Role and scope",
        "items": [
          "Owned filter and technical catalog presentation.",
          "Supported specs-heavy product detail pages.",
          "Focused on performance for dense collection views."
        ]
      },
      {
        "title": "Technical work",
        "items": [
          "Built Liquid templates for filtered collections.",
          "Structured technical PDP content and CTAs.",
          "Optimized frontend assets for catalog performance."
        ]
      },
      {
        "title": "Key skills",
        "items": [
          "Shopify Plus, Liquid, JavaScript, Collection UX, Core Web Vitals"
        ]
      }
    ],
    "demo": "https://www.shocksurplus.com/",
    "technologies": [
      "Shopify Plus",
      "Liquid",
      "JavaScript",
      "Collection UX",
      "Core Web Vitals"
    ],
    "keySkills": [
      "Technical filters",
      "Specs-led PDPs",
      "High-SKU catalogs",
      "Storefront performance"
    ]
  }
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
