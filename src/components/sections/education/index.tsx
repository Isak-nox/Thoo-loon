"use client";

import SectionTitle from "@/components/custom/section-title";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Separator } from "@/components/ui/separator";
import React from "react";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-background-lighter">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-16">
          <SectionTitle title="Education" />
          <div
            id="about-achievements"
            className="mt-0 py-0 bg-background-lighter"
          >
            <div className="container flex flex-col xl:flex-row gap-14 2xl:gap-12">
              {/* Left: Images */}
              {/* Right: Content */}
              <div className="flex-1 xl:basis-3/5 flex flex-col text-center xl:text-left text-sm sm:text-xl xl:text-2xl items-center xl:items-start justify-center gap-3 md:gap-5">
                <h5>Aug 2013 – May 2017</h5>
                <AuroraText
                  className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl"
                  colors={["#FFA001", "#FE8FB5", "#FC4100"]}
                >
                  Bachelor’s Degree in Computer Science
                </AuroraText>
                <div className="flex flex-col sm:flex-row items-end gap-2">
                  <h5>at University of Montana</h5>
                </div>
              </div>
            </div>
          </div>
          <Separator />
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
