import React from "react";
import Section from "./Section";
import Card from "./Card";
import Badge from "./Badge";
import { BriefcaseIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";

export interface ExperienceSectionProps {
  dict: {
    tag: string;
    title: string;
    subtitle: string;
    present: string;
  };
}

interface ExperienceItem {
  period: string;
  isCurrent?: boolean;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  dict,
}) => {
  const experiences: ExperienceItem[] = [
    {
      period: `2023 — ${dict.present}`,
      isCurrent: true,
      role: "Lead Full Stack Developer",
      company: "Tech Systems Studio",
      description:
        "Architecting robust frontend workflows and microservices. Improved core web vitals and overall page response by 45%, coordinating sprint roadmaps and cross-functional deliverables.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "FastAPI"],
    },
    {
      period: "2021 — 2023",
      isCurrent: false,
      role: "Frontend & Full Stack Engineer",
      company: "Digital Interfaces Lab",
      description:
        "Engineered scalable web applications and accessible design systems. Built multilingual routing mechanisms, micro-frontends, and resilient state orchestration for high-traffic products.",
      technologies: ["React", "TypeScript", "Django", "REST APIs", "Tailwind CSS", "Python"],
    },
    {
      period: "2020 — 2021",
      isCurrent: false,
      role: "Software Developer Intern",
      company: "Cloud Core Inc.",
      description:
        "Implemented interactive dashboard features, performance profiling, database migrations, and comprehensive unit tests.",
      technologies: ["JavaScript", "Node.js", "PHP", "Laravel", "HTML5/CSS3", "Git"],
    },
  ];

  return (
    <Section
      id="experience"
      tag={dict.tag}
      title={dict.title}
      subtitle={dict.subtitle}
      alternate
    >
      <div className="relative pl-6 sm:pl-8 border-l-2 border-dsg-300/70 dark:border-[#22333d] space-y-8 ml-2 sm:ml-4">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Timeline Node Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-dsg-100 dark:bg-[#0e161a] border-2 border-hb-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-200">
              {exp.isCurrent ? (
                <span className="w-2 h-2 rounded-full bg-hb-500 animate-ping" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-hb-500" />
              )}
            </div>

            <Card className="hover:border-hb-500/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 sm:gap-6">
                {/* Left: Period & Company */}
                <div className="md:w-1/3 shrink-0">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-hb-500/10 dark:bg-hb-500/15 border border-hb-500/30 text-xs font-mono text-hb-700 dark:text-hb-400 font-bold mb-2">
                    <CalendarDaysIcon className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-dsg-950 dark:text-[#edf3f5] mt-1">
                    <BriefcaseIcon className="w-4 h-4 text-dsg-400 dark:text-dsg-500" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                {/* Right: Role & Description */}
                <div className="md:w-2/3 space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-dsg-950 dark:text-[#edf3f5] group-hover:text-hb-600 dark:group-hover:text-hb-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-xs sm:text-sm text-dsg-600 dark:text-dsg-400 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="neutral"
                        size="sm"
                        className="hover:border-hb-500/40 hover:text-hb-600 dark:hover:text-hb-400 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
