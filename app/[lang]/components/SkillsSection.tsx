"use client";

import React, { useState } from "react";
import Section from "./Section";
import Card from "./Card";
import Badge from "./Badge";
import {
  SiPython,
  SiJavascript,
  SiPhp,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxt,
  SiPrisma,
  SiNestjs,
  SiExpress,
  SiNodedotjs,
  SiLaravel,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import {
  CommandLineIcon,
  Squares2X2Icon,
  SparklesIcon,
  CodeBracketIcon,
  ServerStackIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

export interface SkillsSectionProps {
  dict: {
    tag: string;
    title: string;
    subtitle: string;
    all?: string;
    languages?: string;
    languagesDesc?: string;
    pythonFrameworks?: string;
    pythonFrameworksDesc?: string;
    jsFrontend?: string;
    jsFrontendDesc?: string;
    jsBackend?: string;
    jsBackendDesc?: string;
    phpFrameworks?: string;
    phpFrameworksDesc?: string;
    desktopHint?: string;
    mobileHint?: string;
    viewModeCategory?: string;
    viewModeGrid?: string;
    techCount?: string;
    [key: string]: any;
  };
}

export interface SkillItem {
  name: string;
  category: "languages" | "python" | "js-frontend" | "js-backend" | "php";
  categoryKey: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  brandColor: string;
  roleTag: string;
  experienceLevel?: string;
}

export interface SkillCategoryGroup {
  id: "languages" | "python" | "js-frontend" | "js-backend" | "php";
  number: string;
  titleKey: string;
  descKey: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillItem[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ dict }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grouped" | "grid">("grouped");

  const categories: SkillCategoryGroup[] = [
    {
      id: "languages",
      number: "01",
      titleKey: dict.languages || "Lenguajes & Estilos",
      descKey:
        dict.languagesDesc ||
        "Lenguajes base y librerías de estilos para maquetación moderna",
      icon: CodeBracketIcon,
      skills: [
        {
          name: "Python",
          category: "languages",
          categoryKey: "languages",
          icon: SiPython,
          brandColor: "#3776AB",
          roleTag: "Language / Scripting",
        },
        {
          name: "JavaScript",
          category: "languages",
          categoryKey: "languages",
          icon: SiJavascript,
          brandColor: "#F7DF1E",
          roleTag: "Language / ES6+",
        },
        {
          name: "Java",
          category: "languages",
          categoryKey: "languages",
          icon: FaJava,
          brandColor: "#EA2D2E",
          roleTag: "Language / OOP",
        },
        {
          name: "PHP",
          category: "languages",
          categoryKey: "languages",
          icon: SiPhp,
          brandColor: "#777BB4",
          roleTag: "Language / Server",
        },
        {
          name: "HTML5",
          category: "languages",
          categoryKey: "languages",
          icon: SiHtml5,
          brandColor: "#E34F26",
          roleTag: "Semantic Markup",
        },
        {
          name: "CSS3",
          category: "languages",
          categoryKey: "languages",
          icon: SiCss,
          brandColor: "#1572B6",
          roleTag: "Styling & Flex/Grid",
        },
        {
          name: "Tailwind CSS",
          category: "languages",
          categoryKey: "languages",
          icon: SiTailwindcss,
          brandColor: "#06B6D4",
          roleTag: "Utility-First CSS",
        },
        {
          name: "Bootstrap",
          category: "languages",
          categoryKey: "languages",
          icon: SiBootstrap,
          brandColor: "#7952B3",
          roleTag: "Responsive UI Kit",
        },
      ],
    },
    {
      id: "js-frontend",
      number: "02",
      titleKey: dict.jsFrontend || "JavaScript — Frontend",
      descKey:
        dict.jsFrontendDesc ||
        "Interfaces reactivas, SPA y aplicaciones renderizadas en servidor",
      icon: SparklesIcon,
      skills: [
        {
          name: "React",
          category: "js-frontend",
          categoryKey: "jsFrontend",
          icon: SiReact,
          brandColor: "#61DAFB",
          roleTag: "UI Library / Hooks",
        },
        {
          name: "Next.js",
          category: "js-frontend",
          categoryKey: "jsFrontend",
          icon: SiNextdotjs,
          brandColor: "#000000",
          roleTag: "SSR / App Router",
        },
        {
          name: "Vue.js",
          category: "js-frontend",
          categoryKey: "jsFrontend",
          icon: SiVuedotjs,
          brandColor: "#4FC08D",
          roleTag: "Progressive Framework",
        },
        {
          name: "Nuxt.js",
          category: "js-frontend",
          categoryKey: "jsFrontend",
          icon: SiNuxt,
          brandColor: "#00DC82",
          roleTag: "Fullstack Vue / SSR",
        },
      ],
    },
    {
      id: "js-backend",
      number: "03",
      titleKey: dict.jsBackend || "JavaScript — Backend",
      descKey:
        dict.jsBackendDesc ||
        "Servidores escalables, arquitecturas REST, ORMs y microservicios",
      icon: ServerStackIcon,
      skills: [
        {
          name: "Node.js",
          category: "js-backend",
          categoryKey: "jsBackend",
          icon: SiNodedotjs,
          brandColor: "#339933",
          roleTag: "Runtime Engine",
        },
        {
          name: "Express.js",
          category: "js-backend",
          categoryKey: "jsBackend",
          icon: SiExpress,
          brandColor: "#94A3B8",
          roleTag: "REST APIs / Middleware",
        },
        {
          name: "NestJS",
          category: "js-backend",
          categoryKey: "jsBackend",
          icon: SiNestjs,
          brandColor: "#E0234E",
          roleTag: "Enterprise Architecture",
        },
        {
          name: "Prisma",
          category: "js-backend",
          categoryKey: "jsBackend",
          icon: SiPrisma,
          brandColor: "#5A67D8",
          roleTag: "Type-Safe ORM",
        },
      ],
    },
    {
      id: "python",
      number: "04",
      titleKey: dict.pythonFrameworks || "Frameworks Python",
      descKey:
        dict.pythonFrameworksDesc ||
        "Desarrollo ágil de APIs, microservicios y plataformas robustas",
      icon: CpuChipIcon,
      skills: [
        {
          name: "Django",
          category: "python",
          categoryKey: "pythonFrameworks",
          icon: SiDjango,
          brandColor: "#2BA977",
          roleTag: "Fullstack / MVT Batteries",
        },
        {
          name: "Flask",
          category: "python",
          categoryKey: "pythonFrameworks",
          icon: SiFlask,
          brandColor: "#A0AEC0",
          roleTag: "Microframework / APIs",
        },
        {
          name: "FastAPI",
          category: "python",
          categoryKey: "pythonFrameworks",
          icon: SiFastapi,
          brandColor: "#059669",
          roleTag: "High-Perf Async APIs",
        },
      ],
    },
    {
      id: "php",
      number: "05",
      titleKey: dict.phpFrameworks || "Frameworks PHP",
      descKey:
        dict.phpFrameworksDesc ||
        "Desarrollo web MVC robusto y aplicaciones empresariales",
      icon: CommandLineIcon,
      skills: [
        {
          name: "Laravel",
          category: "php",
          categoryKey: "phpFrameworks",
          icon: SiLaravel,
          brandColor: "#FF2D20",
          roleTag: "Web Artisan MVC",
        },
      ],
    },
  ];

  const allSkills = categories.flatMap((cat) => cat.skills);

  const filterOptions = [
    { id: "all", label: dict.all || "Todos", count: allSkills.length },
    {
      id: "languages",
      label: dict.languages || "Lenguajes & Estilos",
      count: categories.find((c) => c.id === "languages")?.skills.length || 0,
    },
    {
      id: "js-frontend",
      label: "JS Frontend",
      count: categories.find((c) => c.id === "js-frontend")?.skills.length || 0,
    },
    {
      id: "js-backend",
      label: "JS Backend",
      count: categories.find((c) => c.id === "js-backend")?.skills.length || 0,
    },
    {
      id: "python",
      label: "Python",
      count: categories.find((c) => c.id === "python")?.skills.length || 0,
    },
    {
      id: "php",
      label: "PHP",
      count: categories.find((c) => c.id === "php")?.skills.length || 0,
    },
  ];

  const filteredCategories =
    selectedFilter === "all"
      ? categories
      : categories.filter((cat) => cat.id === selectedFilter);

  const filteredSkills =
    selectedFilter === "all"
      ? allSkills
      : allSkills.filter((skill) => skill.category === selectedFilter);

  return (
    <Section
      id="skills"
      tag={dict.tag}
      title={dict.title}
      subtitle={dict.subtitle}
      alternate
    >
      {/* Interactive Controls Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-5 border-b border-dsg-200 dark:border-[#1e2c33]">
        {/* Mobile / Desktop Category Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {filterOptions.map((opt) => {
            const isSelected = selectedFilter === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedFilter(opt.id)}
                className={`group shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-dsg-900 text-white dark:bg-[#1a2830] dark:text-hb-400 border border-dsg-700 dark:border-hb-500/40 shadow-xs ring-1 ring-hb-500/30"
                    : "bg-dsg-200/50 dark:bg-[#131c21] text-dsg-700 dark:text-dsg-300 border border-dsg-300/70 dark:border-[#1e2c33] hover:border-hb-500/40 hover:text-dsg-950 dark:hover:text-white"
                }`}
              >
                <span>{opt.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                    isSelected
                      ? "bg-hb-500 text-dsg-950 font-bold"
                      : "bg-dsg-300/60 dark:bg-[#1c2930] text-dsg-600 dark:text-dsg-400"
                  }`}
                >
                  {opt.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* View Mode Toggle (Desktop) & Helper Notice */}
        <div className="hidden lg:flex items-center gap-3">
          <span className="text-xs font-mono text-dsg-500 dark:text-dsg-400">
            {dict.desktopHint || "Hover para interactuar"}
          </span>
          <div className="inline-flex p-1 rounded-lg bg-dsg-200/60 dark:bg-[#11191d] border border-dsg-300/80 dark:border-[#1e2c33]">
            <button
              type="button"
              onClick={() => setViewMode("grouped")}
              className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                viewMode === "grouped"
                  ? "bg-white dark:bg-[#1a2830] text-hb-600 dark:text-hb-400 font-bold shadow-xs"
                  : "text-dsg-600 dark:text-dsg-400 hover:text-dsg-950 dark:hover:text-white"
              }`}
            >
              {dict.viewModeCategory || "Categorías"}
            </button>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                viewMode === "grid"
                  ? "bg-white dark:bg-[#1a2830] text-hb-600 dark:text-hb-400 font-bold shadow-xs"
                  : "text-dsg-600 dark:text-dsg-400 hover:text-dsg-950 dark:hover:text-white"
              }`}
            >
              {dict.viewModeGrid || "Grid Completo"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Notice */}
      <div className="lg:hidden mb-6 flex items-center gap-2 text-xs font-mono text-dsg-500 dark:text-dsg-400 bg-dsg-200/40 dark:bg-[#121b20] px-3.5 py-2 rounded-lg border border-dsg-300/60 dark:border-[#1c2930]">
        <Squares2X2Icon className="w-4 h-4 text-hb-500 shrink-0" />
        <span>
          {dict.mobileHint || "Toca cualquier categoría para filtrar el stack"}
        </span>
      </div>

      {/* VIEW 1: Grouped Modular Layout (Default) */}
      {viewMode === "grouped" && selectedFilter === "all" ? (
        <div className="space-y-8">
          {categories.map((category) => {
            const CatIcon = category.icon;
            return (
              <Card
                key={category.id}
                className="overflow-hidden border border-dsg-200/90 dark:border-[#1e2c33] bg-dsg-100/70 dark:bg-[#121b20]/90 p-6 sm:p-8"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-dsg-200/80 dark:border-[#1c2930]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-dsg-200 dark:bg-[#18242a] border border-dsg-300 dark:border-[#22333b] flex items-center justify-center text-hb-600 dark:text-hb-400 shadow-xs">
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-dsg-950 dark:text-[#edf3f5] tracking-tight">
                        {category.titleKey}
                      </h3>
                      <p className="text-xs text-dsg-500 dark:text-dsg-400 font-mono mt-0.5">
                        {category.descKey}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge variant="neutral" size="sm">
                      {category.skills.length} {dict.techCount || "tecnologías"}
                    </Badge>
                    <span className="text-xs font-mono text-hb-600 dark:text-hb-400 font-bold">
                      /{category.number}
                    </span>
                  </div>
                </div>

                {/* Skills Grid for this Category */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3.5">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="group relative flex flex-col justify-between p-3.5 sm:p-4 rounded-xl bg-dsg-50 dark:bg-[#0e161a] border border-dsg-200/80 dark:border-[#1c2930] hover:border-hb-500/60 dark:hover:border-hb-400/60 transition-all duration-300 transform-gpu hover:-translate-y-1.5 hover:shadow-lg dark:hover:shadow-hb-500/5 active:scale-95 cursor-default select-none"
                      >
                        {/* Top: Icon + Name */}
                        <div className="flex items-center gap-3 mb-2.5">
                          <div
                            className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shrink-0 bg-dsg-200/70 dark:bg-[#162329] border border-dsg-300/60 dark:border-[#22333d] transition-all duration-300 group-hover:scale-115 group-hover:rotate-3 group-hover:shadow-sm"
                            style={{ color: skill.brandColor }}
                          >
                            <SkillIcon className="w-5 h-5 transition-transform duration-300" />
                          </div>
                          <span className="text-xs sm:text-sm font-bold text-dsg-950 dark:text-[#edf3f5] group-hover:text-hb-600 dark:group-hover:text-hb-400 transition-colors truncate">
                            {skill.name}
                          </span>
                        </div>

                        {/* Bottom: Role Tag / Tech badge */}
                        <div className="pt-2 border-t border-dsg-200/50 dark:border-[#182329] flex items-center justify-between">
                          <span className="text-[10px] sm:text-[11px] font-mono text-dsg-500 dark:text-dsg-400 group-hover:text-dsg-800 dark:group-hover:text-dsg-200 transition-colors truncate">
                            {skill.roleTag}
                          </span>
                          <span
                            className="w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover:scale-150 shrink-0"
                            style={{ backgroundColor: skill.brandColor }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            );
          })}
        </div>
      ) : (
        /* VIEW 2: Filtered or Full Grid View */
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => {
            const SkillIcon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative flex flex-col justify-between p-4 rounded-xl bg-dsg-100/80 dark:bg-[#121b20] border border-dsg-200 dark:border-[#1e2c33] hover:border-hb-500/60 dark:hover:border-hb-400/60 transition-all duration-300 transform-gpu hover:-translate-y-1.5 hover:shadow-lg dark:hover:shadow-hb-500/5 active:scale-95 cursor-default select-none"
              >
                {/* Top: Icon + Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-dsg-200/80 dark:bg-[#162329] border border-dsg-300/80 dark:border-[#22333d] transition-all duration-300 group-hover:scale-115 group-hover:rotate-3"
                    style={{ color: skill.brandColor }}
                  >
                    <SkillIcon className="w-5 h-5 transition-transform duration-300" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs sm:text-sm font-bold text-dsg-950 dark:text-[#edf3f5] group-hover:text-hb-600 dark:group-hover:text-hb-400 transition-colors block truncate">
                      {skill.name}
                    </span>
                  </div>
                </div>

                {/* Bottom: Role & Indicator */}
                <div className="pt-2.5 border-t border-dsg-200/60 dark:border-[#182329] flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-mono text-dsg-500 dark:text-dsg-400 truncate">
                    {skill.roleTag}
                  </span>
                  <span
                    className="w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover:scale-150 shrink-0"
                    style={{ backgroundColor: skill.brandColor }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Section>
  );
};

export default SkillsSection;
