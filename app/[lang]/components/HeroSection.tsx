import React from "react";
import Button from "./Button";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export interface HeroSectionProps {
  dict: {
    greeting: string;
    nameFirst: string;
    nameLast: string;
    rolePrefix: string;
    roleHighlight: string;
    roleSuffix: string;
    description: string;
    ctaSayHello: string;
    ctaDownloadCv: string;
  };
}

export const HeroSection: React.FC<HeroSectionProps> = ({ dict }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Subtle geometric background crosses */}
      <div className="absolute top-28 left-8 sm:left-16 text-dsg-400 dark:text-dsg-700/40 text-xl font-mono select-none pointer-events-none">
        +
      </div>
      <div className="absolute bottom-20 left-12 text-dsg-400 dark:text-dsg-700/30 text-2xl font-mono select-none pointer-events-none">
        +
      </div>
      <div className="absolute top-24 right-12 sm:right-24 text-dsg-400 dark:text-dsg-700/40 text-2xl font-mono select-none pointer-events-none">
        +
      </div>
      <div className="absolute bottom-32 right-1/3 text-dsg-400 dark:text-dsg-700/30 text-lg font-mono select-none pointer-events-none">
        +
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Call to Action */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left z-10">
            {/* Small Monospace Greeting & Status Pill */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-mono font-medium text-emerald-700 dark:text-emerald-400 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Disponible para proyectos</span>
              </div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-dsg-500 dark:text-dsg-400 font-semibold">
                {dict.greeting}
              </span>
            </div>

            {/* Giant Stacked Name */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-dsg-950 dark:text-[#edf3f5] leading-[0.95] mb-6">
              <span className="block">{dict.nameFirst}</span>
              <span className="block text-dsg-800 dark:text-dsg-200">
                {dict.nameLast}
              </span>
            </h1>

            {/* Role with warm accent */}
            <p className="text-lg sm:text-2xl font-medium text-dsg-700 dark:text-dsg-300 mb-4 tracking-tight">
              {dict.rolePrefix}{" "}
              <span className="text-hb-600 dark:text-hb-400 font-semibold underline decoration-hb-500/40 underline-offset-4">
                {dict.roleHighlight}
              </span>{" "}
              {dict.roleSuffix}
            </p>

            {/* Short Bio Description */}
            <p className="text-sm sm:text-base text-dsg-600 dark:text-dsg-400 max-w-lg mb-8 leading-relaxed">
              {dict.description}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button href="#contact" variant="primary" size="lg">
                {dict.ctaSayHello}
              </Button>
              <Button
                href="#projects"
                variant="outline"
                size="lg"
                className="font-mono text-xs"
              >
                {dict.ctaDownloadCv}
              </Button>
            </div>

            {/* Quick Core Tech Strip */}
            <div className="flex items-center gap-2 text-xs font-mono text-dsg-500 dark:text-dsg-400 pt-4 border-t border-dsg-200/60 dark:border-[#1c2930]">
              <span className="text-[11px] uppercase tracking-wider text-dsg-400 dark:text-dsg-500 font-semibold">
                Stack Core:
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                {["Next.js", "Python", "React", "Node.js", "Laravel", "Tailwind"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-dsg-200/50 dark:bg-[#152229] border border-dsg-300/50 dark:border-[#20323c] text-[11px] text-dsg-700 dark:text-dsg-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Slate Disc Backdrop and Subtle Doodles */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Decorative hand-drawn style doodle above circle */}
            <svg
              className="absolute -top-6 left-12 sm:left-24 w-12 h-12 text-dsg-400 dark:text-dsg-500/50 select-none pointer-events-none hidden sm:block"
              viewBox="0 0 50 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M10 25 Q 25 10, 40 25 T 30 45" />
              <circle cx="42" cy="15" r="2" fill="currentColor" />
              <circle cx="15" cy="40" r="1.5" fill="currentColor" />
            </svg>

            {/* Decorative crosses around circle */}
            <div className="absolute -top-4 right-10 text-dsg-400 dark:text-dsg-600/40 text-xl font-mono select-none">
              ×
            </div>
            <div className="absolute bottom-6 -left-4 text-dsg-400 dark:text-dsg-600/40 text-xl font-mono select-none">
              ×
            </div>

            {/* Central Sober Slate Circle Backdrop */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] rounded-full bg-dsg-200/70 dark:bg-[#152026] border border-dsg-300 dark:border-[#22333b] flex items-center justify-center overflow-hidden shadow-xl dark:shadow-2xl">
              {/* Geometric Grid / Subtle Inner Radial Rings */}
              <div className="absolute inset-4 rounded-full border border-dsg-300/40 dark:border-[#1d2d35] pointer-events-none" />
              <div className="absolute inset-12 rounded-full border border-dsg-300/30 dark:border-[#1a2830] pointer-events-none" />

              {/* Developer Avatar / Silhouette Illustration with Sober Monochromatic Look */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-end">
                <svg
                  viewBox="0 0 400 400"
                  className="w-4/5 h-4/5 text-dsg-600 dark:text-dsg-400/90"
                  fill="currentColor"
                >
                  <circle cx="200" cy="140" r="65" />
                  <path d="M100 360 C100 240, 300 240, 300 360 Z" />
                  <path
                    d="M130 360 L130 300 L270 300 L270 360 Z"
                    fill="currentColor"
                    className="opacity-40"
                  />
                </svg>

                {/* Subtle code signature badge at bottom of circle */}
                <div className="absolute bottom-4 px-3.5 py-1 rounded-full bg-white/90 dark:bg-[#0e161a]/90 border border-dsg-300 dark:border-[#273a44] text-[11px] font-mono text-hb-700 dark:text-hb-400 font-medium tracking-wider shadow-sm">
                  &lt;code /&gt; fullstack
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Vertical Sticky Social Rail (Desktops) */}
      <div className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-5 text-dsg-500 dark:text-dsg-400 z-30">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-hb-600 dark:hover:text-hb-400 transition-colors"
          aria-label="GitHub"
        >
          <SiGithub className="w-5 h-5" />
        </a>
        <span className="w-px h-6 bg-dsg-300 dark:bg-dsg-700/60" />
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-hb-600 dark:hover:text-hb-400 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
        <span className="w-px h-6 bg-dsg-300 dark:bg-dsg-700/60" />
        <a
          href="mailto:sergiom@example.com"
          className="hover:text-hb-600 dark:hover:text-hb-400 transition-colors"
          aria-label="Email"
        >
          <HiOutlineMail className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
