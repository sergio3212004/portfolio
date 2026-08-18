import React from "react";
import Section from "./Section";
import Card from "./Card";
import Button from "./Button";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export interface ProjectsSectionProps {
  dict: {
    tag: string;
    title: string;
    subtitle: string;
    viewProject: string;
    viewCode: string;
  };
}

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ dict }) => {
  const projects: Project[] = [
    {
      number: "01",
      title: "Core Platform Architecture",
      category: "Full Stack SaaS",
      description:
        "High-performance multi-tenant platform with secure session management, real-time analytics stream, and localized user workflows.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      number: "02",
      title: "Real-time Telemetry Dashboard",
      category: "Data Systems",
      description:
        "Low-latency streaming visualization engine built for financial metrics, featuring custom charts, dark-mode styling, and websocket sync.",
      tags: ["React", "TypeScript", "WebSockets", "D3.js", "Tailwind"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      number: "03",
      title: "Headless Commerce Experience",
      category: "E-Commerce",
      description:
        "Modular commerce storefront focused on sub-second page transitions, dynamic cart state management, and multi-currency checkout.",
      tags: ["Next.js", "GraphQL", "Tailwind CSS", "Zustand"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  return (
    <Section
      id="projects"
      tag={dict.tag}
      title={dict.title}
      subtitle={dict.subtitle}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card
            key={project.number}
            className="flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-dsg-200 dark:border-[#1e2c33]">
                <span className="text-xs font-mono text-hb-600 dark:text-hb-400 font-bold">
                  {project.number}
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-dsg-500 dark:text-dsg-400">
                  {project.category}
                </span>
              </div>

              <h3 className="text-lg font-bold text-dsg-950 dark:text-[#edf3f5] group-hover:text-hb-500 dark:group-hover:text-hb-400 transition-colors mb-3">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm text-dsg-600 dark:text-dsg-400 leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-dsg-200 dark:border-[#1e2c33]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 rounded-sm bg-dsg-200/50 dark:bg-[#182329] text-dsg-700 dark:text-dsg-300 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {project.demoUrl && (
                  <Button
                    href={project.demoUrl}
                    external
                    variant="primary"
                    size="sm"
                    icon={<ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />}
                  >
                    {dict.viewProject}
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    external
                    variant="outline"
                    size="sm"
                    className="font-mono text-[11px]"
                  >
                    {dict.viewCode}
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
