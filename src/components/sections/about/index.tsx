import { WordRotate } from "@/components/magicui/word-rotate";
import { MAIN_SKILLS, PROFILE_NAME, PROFILE_TITLE } from "@/lib/constants";
import { Spotlight } from "@/components/ui/spotlight";
import React from "react";

const HIGHLIGHTS = [
  "Shopify Plus storefronts, themes, and headless commerce delivery",
  "Liquid, Storefront/Admin APIs, React, and Next.js implementations",
  "Figma-to-code workflows with strong visual QA and design fidelity",
  "CRO, A/B testing, and performance optimization for conversions",
];

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden pb-16 pt-6 sm:pb-20 sm:pt-10">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      <div id="about-introduction" className="container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* Left: intro */}
          <div className="flex flex-col text-center lg:col-span-6 lg:text-left">
            <div className="mb-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-2xl font-lobster sm:mb-6 sm:text-3xl lg:justify-start xl:text-4xl">
              <h3 className="text-foreground">Hello, I&apos;m</h3>
              <WordRotate
                duration={5000}
                className="text-primary"
                words={[PROFILE_NAME]}
              />
            </div>

            <h1 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl xl:text-5xl">
              I&apos;m a{" "}
              <span className="text-primary">{PROFILE_TITLE}</span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0 xl:text-xl xl:leading-8">
              with 8+ years of experience building, customizing, and optimizing
              Shopify storefronts, landing pages, and digital commerce
              experiences across Shopify, Shopify Plus, WooCommerce, and
              headless commerce. Strong expertise in theme development, Liquid,
              Storefront/Admin APIs, React, Next.js, Figma-to-code workflows,
              CRO, and performance optimization that improve usability, customer
              journeys, and conversions.
            </p>
          </div>

          {/* Right: highlights fill empty space */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-border/60 bg-card/40 p-6 sm:p-8">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                What I focus on
              </p>
              <ul className="space-y-4">
                {HIGHLIGHTS.map((item, index) => (
                  <li key={item} className="flex gap-4 text-left">
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-foreground/90 sm:text-base sm:leading-7">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-border/60 pt-6">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Primary tools
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start sm:gap-5">
                  {MAIN_SKILLS.map(({ icon: Icon, name }) => (
                    <div
                      key={name}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                      title={name}
                    >
                      <Icon width={28} height={28} />
                      <span className="hidden sm:inline">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
