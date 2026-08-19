import React from "react";
import Section from "./Section";
import Card from "./Card";
import { MapPinIcon, SparklesIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

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
          <Card className="h-full flex flex-col justify-between space-y-6 bg-dsg-100/60 dark:bg-[#121b20] border-dsg-200 dark:border-[#1e2c33] hover:border-hb-500/40 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-hb-500" />
                <span className="text-xs font-mono uppercase tracking-widest text-hb-600 dark:text-hb-400 font-bold">
                  Perfil Profesional
                </span>
              </div>
              <p className="text-base sm:text-lg text-dsg-900 dark:text-dsg-100 leading-relaxed font-normal">
                {dict.bio1}
              </p>
              <p className="text-sm sm:text-base text-dsg-600 dark:text-dsg-400 leading-relaxed">
                {dict.bio2}
              </p>
            </div>

            <div className="pt-6 border-t border-dsg-200/80 dark:border-[#1e2c33] flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dsg-200/50 dark:bg-[#162228] border border-dsg-300/60 dark:border-[#22333d]">
                <MapPinIcon className="w-4 h-4 text-hb-500 shrink-0" />
                <span className="text-xs font-mono text-dsg-700 dark:text-dsg-300 font-medium">
                  {dict.locationValue}
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dsg-200/50 dark:bg-[#162228] border border-dsg-300/60 dark:border-[#22333d]">
                <SparklesIcon className="w-4 h-4 text-hb-500 shrink-0" />
                <span className="text-xs font-mono text-dsg-700 dark:text-dsg-300 font-medium">
                  Full Stack Architecture
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Stats Column */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
          <Card className="flex items-center justify-between group hover:border-hb-500/50 transition-all duration-200">
            <div>
              <span className="text-4xl sm:text-5xl font-black text-dsg-950 dark:text-[#edf3f5] tracking-tight block font-mono group-hover:text-hb-600 dark:group-hover:text-hb-400 transition-colors">
                {dict.stat1Number}
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-dsg-500 dark:text-dsg-400 font-medium mt-1 block">
                {dict.stat1Label}
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-hb-500/10 border border-hb-500/25 flex items-center justify-center text-hb-600 dark:text-hb-400">
              <CheckBadgeIcon className="w-5 h-5" />
            </div>
          </Card>

          <Card className="flex items-center justify-between group hover:border-vc-500/50 transition-all duration-200">
            <div>
              <span className="text-4xl sm:text-5xl font-black text-dsg-950 dark:text-[#edf3f5] tracking-tight block font-mono group-hover:text-vc-500 transition-colors">
                {dict.stat2Number}
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-dsg-500 dark:text-dsg-400 font-medium mt-1 block">
                {dict.stat2Label}
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-vc-500/10 border border-vc-500/25 flex items-center justify-center text-vc-600 dark:text-vc-400 font-mono font-bold text-sm">
              &lt;/&gt;
            </div>
          </Card>

          <Card className="flex items-center justify-between group hover:border-hb-400/50 transition-all duration-200">
            <div>
              <span className="text-4xl sm:text-5xl font-black text-dsg-950 dark:text-[#edf3f5] tracking-tight block font-mono group-hover:text-hb-500 transition-colors">
                {dict.stat3Number}
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-dsg-500 dark:text-dsg-400 font-medium mt-1 block">
                {dict.stat3Label}
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-hb-400/10 border border-hb-400/25 flex items-center justify-center text-hb-600 dark:text-hb-400">
              <SparklesIcon className="w-5 h-5" />
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
