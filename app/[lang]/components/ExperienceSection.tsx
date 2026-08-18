import React from "react";
import Section from "./Section";
import Card from "./Card";
import Badge from "./Badge";

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
      role: "Lead Full Stack Developer",
      company: "Tech Systems Studio",
      description:
        "Architecting robust frontend workflows and microservices. Improved core web vitals and overall page response by 45%, coordinating sprint roadmaps and cross-functional deliverables.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    },
    {
      period: "2021 — 2023",
      role: "Frontend Engineer",
      company: "Digital Interfaces Lab",
      description:
        "Engineered scalable web applications and accessible design systems. Built multilingual routing mechanisms and resilient state orchestration for high-traffic products.",
      technologies: ["React", "TypeScript", "REST APIs", "GraphQL", "Tailwind"],
    },
    {
      period: "2020 — 2021",
      role: "Software Developer Intern",
      company: "Cloud Core Inc.",
      description:
        "Implemented interactive dashboard features, performance profiling, and comprehensive unit tests.",
      technologies: ["JavaScript", "Node.js", "MongoDB", "Git"],
    },
  ];

  return (
    <Section
      id="experience"
      tag={dict.tag}
      title={dict.title}
      subtitle={dict.subtitle}
    >
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <Card key={index} className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            {/* Left: Period & Company */}
            <div className="md:w-1/4 shrink-0">
              <span className="text-xs font-mono text-hb-600 dark:text-hb-400 font-bold block mb-1">
                {exp.period}
              </span>
              <span className="text-sm font-semibold text-dsg-950 dark:text-[#edf3f5]">
                {exp.company}
              </span>
            </div>

            {/* Right: Role & Description */}
            <div className="md:w-3/4 space-y-3">
              <h3 className="text-base font-bold text-dsg-950 dark:text-[#edf3f5]">
                {exp.role}
              </h3>
              <p className="text-xs sm:text-sm text-dsg-600 dark:text-dsg-400 leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="neutral" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
