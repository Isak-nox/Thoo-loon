"use client";

import SectionTitle from "@/components/custom/section-title";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Separator } from "@/components/ui/separator";
import { CERTIFICATIONS } from "@/lib/constants";
import React from "react";

const EducationSection = () => {
  return (
    <section id="education" className="bg-background-lighter py-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-16">
          <SectionTitle title="Education" />

          <div className="grid w-full max-w-5xl gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="flex flex-col justify-center gap-3 text-center sm:gap-4 lg:text-left">
              <p className="text-sm text-muted-foreground sm:text-base">
                Aug 2013 – May 2017
              </p>
              <AuroraText
                className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
                colors={["#FFA001", "#FE8FB5", "#FC4100"]}
              >
                Bachelor’s Degree in Computer Science
              </AuroraText>
              <p className="text-base text-foreground/90 sm:text-xl">
                Vista College, Killeen, TX
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card/40 p-6 sm:p-8">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Certifications &amp; Licenses
              </p>
              <ul className="grid gap-3 sm:grid-cols-1">
                {CERTIFICATIONS.map((cert) => (
                  <li
                    key={cert}
                    className="flex items-center gap-3 text-sm text-foreground/90 sm:text-base"
                  >
                    <span
                      className="size-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden
                    />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator />
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
