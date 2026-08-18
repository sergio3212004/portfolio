import React from "react";
import Section from "./Section";
import Card from "./Card";
import { MapPinIcon, SparklesIcon } from "@heroicons/react/24/outline";

export interface AboutSectionProps {
  dict: {
    tag: string;
    title: string;
    subtitle: string;
    bio1: string;
    bio2: string;
    stat1Number: string;
    stat1Label: string;
    stat2Number: string;
    stat2Label: string;
    stat3Number: string;
    stat3Label: string;
    locationLabel: string;
    locationValue: string;
  };
}

export const AboutSection: React.FC<AboutSectionProps> = ({ dict }) => {
  return (
    <Section
      id="about"
      tag={dict.tag}
      title={dict.title}
      subtitle={dict.subtitle}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Editorial Biography */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <Card className="h-full flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-dsg-800 dark:text-dsg-200 leading-relaxed font-normal">
                {dict.bio1}
              </p>
              <p className="text-sm sm:text-base text-dsg-600 dark:text-dsg-400 leading-relaxed">
                {dict.bio2}
              </p>
            </div>

            <div className="pt-6 border-t border-dsg-200 dark:border-[#1e2c33] flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2.5">
                <MapPinIcon className="w-4 h-4 text-hb-500" />
                <span className="text-xs font-mono text-dsg-500 dark:text-dsg-400">
                  {dict.locationValue}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <SparklesIcon className="w-4 h-4 text-hb-500" />
                <span className="text-xs font-mono text-dsg-500 dark:text-dsg-400">
                  TypeScript • Next.js • React • Node
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Stats Column */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
          <Card className="flex items-center justify-between">
            <div>
              <span className="text-4xl font-extrabold text-dsg-950 dark:text-[#edf3f5] tracking-tight block font-mono">
                {dict.stat1Number}
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-dsg-500 dark:text-dsg-400">
                {dict.stat1Label}
              </span>
            </div>
            <div className="w-2 h-2 rounded-full bg-hb-500" />
          </Card>

          <Card className="flex items-center justify-between">
            <div>
              <span className="text-4xl font-extrabold text-dsg-950 dark:text-[#edf3f5] tracking-tight block font-mono">
                {dict.stat2Number}
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-dsg-500 dark:text-dsg-400">
                {dict.stat2Label}
              </span>
            </div>
            <div className="w-2 h-2 rounded-full bg-vc-500" />
          </Card>

          <Card className="flex items-center justify-between">
            <div>
              <span className="text-4xl font-extrabold text-dsg-950 dark:text-[#edf3f5] tracking-tight block font-mono">
                {dict.stat3Number}
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-dsg-500 dark:text-dsg-400">
                {dict.stat3Label}
              </span>
            </div>
            <div className="w-2 h-2 rounded-full bg-hb-400" />
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
