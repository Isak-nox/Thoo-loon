import FacebookLogo from "@/components/logo/facebook-logo";
import LinkedinLogo from "@/components/logo/linkedin-logo";
import XLogo from "@/components/logo/x-logo";
import TypescriptLogo from "@/components/logo/typescript-logo";
import NodejsLogo from "@/components/logo/nodejs-logo";
import ReactLogo from "@/components/logo/react-logo";
import NextjsLogo from "@/components/logo/nextjs-logo";
import NestjsLogo from "@/components/logo/nestjs-logo";
import { ComponentType } from "react";

export const CV_URL = "/cv/My Resume.pdf";

export type SocialLink = {
  href: string;
  icon: ComponentType<{ width: number; height: number; className?: string }>;
  label: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/truongthucvan/",
    icon: LinkedinLogo,
    label: "LinkedIn",
  },
  {
    href: "https://www.facebook.com/ttvan1242/",
    icon: FacebookLogo,
    label: "Facebook",
  },
  {
    href: "https://x.com/MeiCloudie1242",
    icon: XLogo,
    label: "X (Twitter)",
  },
];

export type MainSkill = {
  icon: ComponentType<{ width: number; height: number; className?: string }>;
  name: string;
};

export const MAIN_SKILLS: MainSkill[] = [
  {
    icon: TypescriptLogo,
    name: "Typescript",
  },
  {
    icon: NodejsLogo,
    name: "Nodejs",
  },
  {
    icon: ReactLogo,
    name: "React",
  },
  {
    icon: NextjsLogo,
    name: "Next.js",
  },
  {
    icon: NestjsLogo,
    name: "NestJS",
  },
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

export type SkillLevel = "Basic" | "Intermediate" | "Experienced";

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
    title: "CMS & ECommerce",
    skills: [
      { name: "Shopify", level: "Experienced" },
      { name: "Shopify Plus", level: "Experienced" },
      { name: "Shopify App", level: "Intermediate" },
      { name: "Theme Development & Customization", level: "Intermediate" },
      { name: "WooCommerce", level: "Basic" },
      { name: "Contentful", level: "Experienced" },
      { name: "Headless CMS Architecture", level: "Basic" },
      { name: "CRO", level: "Intermediate" },
      { name: "Performance Optimization", level: "Intermediate" },
      { name: "Core Web Vitals", level: "Intermediate" },
      { name: "Adobe Commerce Cloud", level: "Intermediate" },
      { name: "WordPress", level: "Intermediate" },
      { name: "Shopify Hydrogen", level: "Intermediate" },
      { name: "BigCommerce", level: "Intermediate" },
      { name: "EC-Cube", level: "Intermediate" },
      { name: "Magento", level: "Intermediate" },
      { name: "Wagtail", level: "Intermediate" },
      { name: "Sitecore", level: "Intermediate" },
      { name: "Shogun", level: "Intermediate" },
      { name: "PageFly", level: "Intermediate" },
      { name: "Replo", level: "Intermediate" },
    ],
  },
  {
    title: "Front End",
    skills: [
      { name: "React.js", level: "Experienced" },
      { name: "Next.js", level: "Experienced" },
      { name: "Vue.js", level: "Intermediate" },
      { name: "HTML5", level: "Intermediate" },
      { name: "SCSS", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "TypeScript", level: "Basic" },
      { name: "Liquid", level: "Basic" },
      { name: "jQuery", level: "Basic" },
      { name: "UX/UI Design Principles", level: "Experienced" },
      { name: "Responsive Design", level: "Experienced" },
      { name: "Website Accessibility(WCAG 2.1 A/AA)", level: "Experienced" },
      { name: "Semantic HTML", level: "Intermediate" },
      { name: "ARIA roles", level: "Intermediate" },
      { name: "Keyboard Navigation", level: "Basic" },
      { name: "Screen Reader Optimization", level: "Intermediate" },
    ],
  },
  {
    title: "Back End",
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express.js", level: "Basic" },
      { name: "PHP", level: "Basic" },
      { name: "Python", level: "Intermediate" },
      { name: "Laravel", level: "Basic" },
      { name: "GraphQL", level: "Basic" },
      { name: "Shopify Admin API", level: "Basic" },
      { name: "Shopify Storefront API", level: "Basic" },
      { name: "REST APIs", level: "Basic" },
      { name: "EC-Cube API", level: "Basic" },
      { name: "Shopify Webhooks", level: "Basic" },
    ],
  },
];

export type Platform = "Website" | "Mobile" | "Desktop";

export type Project = {
  image: string;
  platform: Platform[];
  title: string;
  description: string;
  demo: string;
  technologies: string[];
};
export type WORKFLOW = {
  title: string;
  description: string;
};

export const PROJECTS: Project[] = [
  {
    image: "/projects/elegance.png",
    platform: ["Website"],
    title: "Elegance Jewelry",
    description:
      "Elegance Jewelry is a modern e-commerce experience designed to showcase premium jewelry collections through a clean, visually rich interface. The platform emphasizes intuitive product discovery, category-driven navigation, responsive design, and seamless shopping journeys. Special attention was given to performance optimization, mobile-first usability, and conversion-focused user experience, creating an engaging storefront that balances aesthetics with functionality.",
    demo: "https://elegance-jewellery.vercel.app/",
    technologies: [
      "Shopify/WooCommerce",
      "React.js",
      "Next.js",
      "GraphQL/REST APIs",
      "Responsive Design",
    ],
  },
  {
    image: "/projects/over-clocked.png",
    platform: ["Website", "Desktop"],
    title: "OverClocked",
    description:
      "OverClocked is a specialized e-commerce platform built for PC builders, gamers, and hardware enthusiasts. It supports three roles — Customer, Seller, and Admin — each with a dedicated dashboard and experience. Customers can browse GPUs, CPUs, RAM, SSDs, cooling solutions and more, manage their cart and wishlist, and pay securely via Razorpay. Sellers can list hardware with detailed specs, manage inventory, and track orders. Admins get full control over users, seller approvals, and platform analytics.",
    demo: "https://over-clocked.vercel.app/",
    technologies: ["Next.js", "React.js", "Node.js", "Shopify Plus", "Stripe"],
  },
  {
    image: "/projects/martian-horse.png",
    platform: ["Website"],
    title: "Martian Horse",
    description:
      "Martian Horse is a premium e-commerce web application built to deliver a blazing-fast shopping experience. It features a custom-built shopping cart, secure authentication, seamless payment gateway integration, and an intuitive admin dashboard for inventory management.",
    demo: "https://martian-horse-front-end.onrender.com/",
    technologies: [
      "React.js",
      "Node.js / Express.js",
      "Payment Integration",
      "Shopify Plus",
    ],
  },
  {
    image: "/projects/cyber-shoe-shop.png",
    platform: ["Website"],
    title: "Cyber Shoe Shop",
    description:
      "Developed a fashion e-commerce website interface focused on shoe sales, practicing API calls to fetch and render data dynamically. Built using vanilla HTML, SASS, and JavaScript.",
    demo: "https://cyber-shoe-shop-group5-bcs12.vercel.app",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "GraphQL/REST APIs",
      "JavaScript",
      "Next.js",
    ],
  },
  {
    image: "/projects/forever.png",
    platform: ["Website"],
    title: "Forever",
    description:
      "ForeverBuy is a modern, minimalistic e-commerce platform designed to highlight the latest fashion collections with a clean and spacious UI. The project emphasizes product discovery through clear categories, responsive layouts, and visually striking hero sections. Built for performance and seamless user experience, it showcases skills in creating fast-loading, conversion-focused storefronts with elegant design and intuitive navigation for fashion retail",
    demo: "https://forever-frontend-hazel.vercel.app/",
    technologies: [
      "Shopify Plus",
      "Liquid",
      "JavaScript/Typescript",
      "Node.js",
      "SEO Optimization",
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
    duration: "Dec 2025 - Present",
    position: "Senior Ecommerce Full Stack Developer",
    company: "JustBlinds",
    location: "Frisco, TX",
    description: [
      "Led a comprehensive SEO initiative to optimize metadata, schema markup, image handling, and crawlability. Monitored high-value landing pages using Google Search Console and maintained a perfect SEO score, resulting in significant increases in organic traffic and search visibility. ",
      "Conducted in-depth performance audits using Lighthouse, WebPageTest, and Chrome DevTools. Resolved render-blocking resources, JavaScript bottlenecks, and inefficient Liquid patterns. Optimized theme architecture and asset delivery, improving LCP, FID, and CLS metrics, reducing page load times and enhancing user experience. ",
    ],
    techStack: [
      "Shopify Liquid",
      "TypeScript",
      "SEO",
      "Performance Optimization",
      "Node.js",
    ],
  },
  {
    duration: "Apr 2023 - Oct 2025",
    position: "Senior Full Stack Developer",
    company: "Siteminis",
    location: "ATL, GA",
    description: [
      "Blended senior engineering execution with strategic business support and investor communications, working closely with executives and founders.",
      "Collaborated with leadership to align product development with long-term business goals and fundraising objectives. ",
    ],
    techStack: [
      "React",
      "TypeScript",
      "REST APIs",
      "Event-Driven Architecture",
      "Machine Learning",
    ],
  },
  {
    duration: "Dec 2022 - Mar 2023",
    position: "Senior E-Commerce Developer",
    company: "Sweat Pants Agency",
    location: "Owings Mills, MD",
    description: [
      "Spearheaded technical discovery phases for global e-commerce brands, conducting in-depth platform assessments, identifying bottlenecks, and recommending scalable architectures for seamless digital experiences.",
      "Designed and implemented high-traffic, content-rich storefronts using headless commerce strategies powered by Shopify Plus and Next.js, optimizing both performance and user experience. ",
    ],
    techStack: [
      "Shopify Plus",
      "Next.js",
      "React",
      "TypeScript",
      "Shopify Hydrogen",
    ],
  },
  {
    duration: "Oct 2019 - Nov 2022",
    position: "Lead Shopify & WooCommerce Developer",
    company: "Volusion",
    location: "Austin, TX",
    description: [
      "Spearheaded the design, development, and optimization of Shopify and WooCommerce storefronts, ensuring high performance, scalability, and secure operations under heavy user traffic.",
      "•	Architected end-to-end e-commerce solutions, including theme customization, app integrations, and personalized checkout processes, enhancing customer journeys and conversion rates.",
    ],
    techStack: ["Shopify", "Python", "WooCommerce", "GraphQL", "JavaScript"],
  },
  {
    duration: "Dec 2017 - Oct 2019",
    position: "Full Stack Developer",
    company: "Nucleus Commerce",
    location: "Springfield, MO",
    description: [
      "Developed custom full-stack e-commerce solutions on Shopify, WordPress, and EC-Cube, tailoring features to client requirements and regional market demands.",
      "Adapted storefronts to regional compliance needs, including local tax rules, language localization, and consumer behavior, ensuring consistent customer experiences.",
    ],
    techStack: ["Shopify", "WordPress", "Next.js", "PHP", "AWS"],
  },
  // {
  //   duration: 'Nov 2014 - Apr 2017',
  //   position: 'Frontend Developer',
  //   company: 'Velocity Technology Solutions',
  //   location: 'Charlotte, NC',
  //   description: [
  //     '•	Spearheaded the design and development of scalable, responsive e-commerce frontends with React.js, optimized for desktop, tablet, and mobile devices.',
  //     '•	Integrated frontend solutions with multiple CMS platforms and backend systems, enabling dynamic content delivery and seamless management.'
  //   ],
  //   techStack: ['TypeScript', 'Python', 'Data Analysis']
  // }
];
