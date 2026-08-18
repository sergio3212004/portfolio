import React from "react";
import Section from "./Section";
import Card from "./Card";
import Badge from "./Badge";

export interface SkillsSectionProps {
  dict: {
    tag: string;
    title: string;
    subtitle: string;
    frontend: string;
    backend: string;
    databases: string;
    tools: string;
  };
}

interface SkillCategory {
  number: string;
  title: string;
  skills: string[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ dict }) => {
  const categories: SkillCategory[] = [
    {
      number: "01",
      title: dict.frontend,
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "State Management",
        "HTML5 / Semantic UI",
        "Performance Optimization",
      ],
    },
    {
      number: "02",
      title: dict.backend,
      skills: [
        "Node.js",
        "Express",
        "REST APIs",
        "GraphQL",
        "Server Actions",
        "Authentication / JWT",
        "Microservices",
      ],
    },
    {
      number: "03",
      title: dict.databases,
      skills: [
        "PostgreSQL",
        "Prisma ORM",
        "MongoDB",
        "Redis",
        "Supabase",
        "Cloud Storage",
      ],
    },
    {
      number: "04",
      title: dict.tools,
      skills: [
        "Git & GitHub",
        "Docker",
        "CI / CD Pipelines",
        "Vercel / Cloudflare",
        "Linux / Shell",
        "Figma to Code",
      ],
    },
  ];

  return (
    <Section
      id="skills"
      tag={dict.tag}
      title={dict.title}
      subtitle={dict.subtitle}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <Card key={category.number} className="flex flex-col">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-dsg-200 dark:border-[#1e2c33]">
              <h3 className="text-base font-bold text-dsg-950 dark:text-[#edf3f5]">
                {category.title}
              </h3>
              <span className="text-xs font-mono text-hb-600 dark:text-hb-400 font-semibold">
                /{category.number}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="neutral"
                  size="sm"
                  className="hover:border-hb-500/50 hover:text-hb-500 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
