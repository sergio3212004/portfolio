export interface Skill {
  name: string
  icon: string
  colorClass: string
  hoverBgClass: string
  hoverBorderClass: string
}

export interface SkillCategory {
  id: string
  titleKey: string
  icon: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'lenguajes',
    titleKey: 'skills.categories.languages',
    icon: 'catppuccin:folder-scripts',
    skills: [
      {
        name: 'JavaScript',
        icon: 'catppuccin:javascript',
        colorClass: 'text-[var(--ctp-latte-yellow)] dark:text-[var(--ctp-mocha-yellow)]',
        hoverBgClass: 'hover:bg-[var(--ctp-latte-yellow)]/10 dark:hover:bg-[var(--ctp-mocha-yellow)]/15',
        hoverBorderClass: 'hover:border-[var(--ctp-latte-yellow)]/40 dark:hover:border-[var(--ctp-mocha-yellow)]/50',
      },
      {
        name: 'TypeScript',
        icon: 'catppuccin:typescript',
        colorClass: 'text-[var(--ctp-latte-blue)] dark:text-[var(--ctp-mocha-blue)]',
        hoverBgClass: 'hover:bg-[var(--ctp-latte-blue)]/10 dark:hover:bg-[var(--ctp-mocha-blue)]/15',
        hoverBorderClass: 'hover:border-[var(--ctp-latte-blue)]/40 dark:hover:border-[var(--ctp-mocha-blue)]/50',
      },
      {
        name: 'Python',
        icon: 'catppuccin:python',
        colorClass: 'text-[var(--ctp-latte-sapphire)] dark:text-[var(--ctp-mocha-sapphire)]',
        hoverBgClass: 'hover:bg-[var(--ctp-latte-sapphire)]/10 dark:hover:bg-[var(--ctp-mocha-sapphire)]/15',
        hoverBorderClass: 'hover:border-[var(--ctp-latte-sapphire)]/40 dark:hover:border-[var(--ctp-mocha-sapphire)]/50',
      },
      {
        name: 'PHP',
        icon: 'catppuccin:php',
        colorClass: 'text-[var(--ctp-latte-mauve)] dark:text-[var(--ctp-mocha-mauve)]',
        hoverBgClass: 'hover:bg-[var(--ctp-latte-mauve)]/10 dark:hover:bg-[var(--ctp-mocha-mauve)]/15',
        hoverBorderClass: 'hover:border-[var(--ctp-latte-mauve)]/40 dark:hover:border-[var(--ctp-mocha-mauve)]/50',
      },
      {
        name: 'SQL',
        icon: 'catppuccin:database',
        colorClass: 'text-[var(--ctp-latte-sky)] dark:text-[var(--ctp-mocha-sky)]',
        hoverBgClass: 'hover:bg-[var(--ctp-latte-sky)]/10 dark:hover:bg-[var(--ctp-mocha-sky)]/15',
        hoverBorderClass: 'hover:border-[var(--ctp-latte-sky)]/40 dark:hover:border-[var(--ctp-mocha-sky)]/50',
      },
      {
        name: 'Java',
        icon: 'catppuccin:java',
        colorClass: 'text-[var(--ctp-latte-red)] dark:text-[var(--ctp-mocha-red)]',
        hoverBgClass: 'hover:bg-[var(--ctp-latte-red)]/10 dark:hover:bg-[var(--ctp-mocha-red)]/15',
        hoverBorderClass: 'hover:border-[var(--ctp-latte-red)]/40 dark:hover:border-[var(--ctp-mocha-red)]/50',
      },
    ],
  },
  {
    id: 'backend',
    titleKey: 'skills.categories.backend',
    icon: 'catppuccin:folder-server',
    skills: [
      {
        name: 'Laravel',
        icon: 'catppuccin:laravel',
        colorClass: 'text-[var(--ctp-latte-red)] dark:text-[var(--ctp-mocha-red)]',
        hoverBgClass: 'hover:bg-[var(--ctp-latte-red)]/10 dark:hover:bg-[var(--ctp-mocha-red)]/15',
        hoverBorderClass: 'hover:border-[var(--ctp-latte-red)]/40 dark:hover:border-[var(--ctp-mocha-red)]/50',
      },
      {
        name: 'Spring Boot',
        icon: 'i-simple-icons-springboot',
        colorClass: 'text-[var(--ctp-latte-green)] dark:text-[var(--ctp-mocha-green)]',
        hoverBgClass: 'hover:bg-[var(--ctp-latte-green)]/10 dark:hover:bg-[var(--ctp-mocha-green)]/15',
        hoverBorderClass: 'hover:border-[var(--ctp-latte-green)]/40 dark:hover:border-[var(--ctp-mocha-green)]/50',
      },
      {
        name: 'FastAPI',
        icon: 'i-simple-icons-fastapi',
        colorClass: 'text-[var(--ctp-latte-teal)] dark:text-[var(--ctp-mocha-teal)]',
        hoverBgClass: 'hover:bg-[var(--ctp-latte-teal)]/10 dark:hover:bg-[var(--ctp-mocha-teal)]/15',
        hoverBorderClass: 'hover:border-[var(--ctp-latte-teal)]/40 dark:hover:border-[var(--ctp-mocha-teal)]/50',
      },
      {
        name: 'Django',
        icon: 'catppuccin:django',
        colorClass: 'text-[var(--ctp-latte-green)] dark:text-[var(--ctp-mocha-green)]',
        hoverBgClass: 'hover:bg-[var(--ctp-latte-green)]/10 dark:hover:bg-[var(--ctp-mocha-green)]/15',
        hoverBorderClass: 'hover:border-[var(--ctp-latte-green)]/40 dark:hover:border-[var(--ctp-mocha-green)]/50',
      },
      {
        name: 'PostgreSQL',
        icon: 'i-simple-icons-postgresql',
        colorClass: 'text-[var(--ctp-latte-sapphire)] dark:text-[var(--ctp-mocha-sapphire)]',
        hoverBgClass: 'hover:bg-[var(--ctp-latte-sapphire)]/10 dark:hover:bg-[var(--ctp-mocha-sapphire)]/15',
        hoverBorderClass: 'hover:border-[var(--ctp-latte-sapphire)]/40 dark:hover:border-[var(--ctp-mocha-sapphire)]/50',
      },
      {
        name: 'Express.js',
        icon: 'i-simple-icons-express',
        colorClass: 'text-[var(--ctp-latte-text)] dark:text-[var(--ctp-mocha-text)]',
        hoverBgClass: 'hover:bg-[var(--ctp-latte-text)]/10 dark:hover:bg-[var(--ctp-mocha-text)]/15',
        hoverBorderClass: 'hover:border-[var(--ctp-latte-text)]/40 dark:hover:border-[var(--ctp-mocha-text)]/50',
      },
      {
        name: 'Prisma',
        icon: 'catppuccin:prisma',
        colorClass: 'text-[var(--ctp-latte-teal)] dark:text-[var(--ctp-mocha-teal)]',
        hoverBgClass: 'hover:bg-[var(--ctp-latte-teal)]/10 dark:hover:bg-[var(--ctp-mocha-teal)]/15',
        hoverBorderClass: 'hover:border-[var(--ctp-latte-teal)]/40 dark:hover:border-[var(--ctp-mocha-teal)]/50',
      },
      {
        name: 'SQLAlchemy',
        icon: 'i-simple-icons-sqlalchemy',
        colorClass: 'text-[var(--ctp-latte-maroon)] dark:text-[var(--ctp-mocha-maroon)]',
        hoverBgClass: 'hover:bg-[var(--ctp-latte-maroon)]/10 dark:hover:bg-[var(--ctp-mocha-maroon)]/15',
        hoverBorderClass: 'hover:border-[var(--ctp-latte-maroon)]/40 dark:hover:border-[var(--ctp-mocha-maroon)]/50',
      },
      {
        name: 'Next.js',
        icon: 'catppuccin:next',
        colorClass: 'text-[var(--ctp-latte-text)] dark:text-[var(--ctp-mocha-text)]',
        hoverBgClass: 'hover:bg-[var(--ctp-latte-text)]/10 dark:hover:bg-[var(--ctp-mocha-text)]/15',
        hoverBorderClass: 'hover:border-[var(--ctp-latte-text)]/40 dark:hover:border-[var(--ctp-mocha-text)]/50',
      },
    ],
  },
  {
    id: 'frontend',
    titleKey: 'skills.categories.frontend',
    icon: 'catppuccin:folder-client',
    skills: [
      {
        name: 'React',
        icon: 'catppuccin:javascript-react',
        colorClass: 'text-[var(--ctp-latte-sky)] dark:text-[var(--ctp-mocha-sky)]',
        hoverBgClass: 'hover:bg-[var(--ctp-latte-sky)]/10 dark:hover:bg-[var(--ctp-mocha-sky)]/15',
        hoverBorderClass: 'hover:border-[var(--ctp-latte-sky)]/40 dark:hover:border-[var(--ctp-mocha-sky)]/50',
      },
      {
        name: 'Next.js',
        icon: 'catppuccin:next',
        colorClass: 'text-[var(--ctp-latte-text)] dark:text-[var(--ctp-mocha-text)]',
        hoverBgClass: 'hover:bg-[var(--ctp-latte-text)]/10 dark:hover:bg-[var(--ctp-mocha-text)]/15',
        hoverBorderClass: 'hover:border-[var(--ctp-latte-text)]/40 dark:hover:border-[var(--ctp-mocha-text)]/50',
      },
      {
        name: 'Nuxt.js',
        icon: 'catppuccin:nuxt',
        colorClass: 'text-[var(--ctp-latte-green)] dark:text-[var(--ctp-mocha-green)]',
        hoverBgClass: 'hover:bg-[var(--ctp-latte-green)]/10 dark:hover:bg-[var(--ctp-mocha-green)]/15',
        hoverBorderClass: 'hover:border-[var(--ctp-latte-green)]/40 dark:hover:border-[var(--ctp-mocha-green)]/50',
      },
      {
        name: 'Vue.js',
        icon: 'catppuccin:vue',
        colorClass: 'text-[var(--ctp-latte-green)] dark:text-[var(--ctp-mocha-green)]',
        hoverBgClass: 'hover:bg-[var(--ctp-latte-green)]/10 dark:hover:bg-[var(--ctp-mocha-green)]/15',
        hoverBorderClass: 'hover:border-[var(--ctp-latte-green)]/40 dark:hover:border-[var(--ctp-mocha-green)]/50',
      },
    ],
  },
  {
    id: 'devops',
    titleKey: 'skills.categories.devops',
    icon: 'catppuccin:folder-docker',
    skills: [
      {
        name: 'Git',
        icon: 'i-simple-icons-git',
        colorClass: 'text-[var(--ctp-latte-red)] dark:text-[var(--ctp-mocha-red)]',
        hoverBgClass: 'hover:bg-[var(--ctp-latte-red)]/10 dark:hover:bg-[var(--ctp-mocha-red)]/15',
        hoverBorderClass: 'hover:border-[var(--ctp-latte-red)]/40 dark:hover:border-[var(--ctp-mocha-red)]/50',
      },
      {
        name: 'GitHub',
        icon: 'i-simple-icons-github',
        colorClass: 'text-[var(--ctp-latte-text)] dark:text-[var(--ctp-mocha-text)]',
        hoverBgClass: 'hover:bg-[var(--ctp-latte-text)]/10 dark:hover:bg-[var(--ctp-mocha-text)]/15',
        hoverBorderClass: 'hover:border-[var(--ctp-latte-text)]/40 dark:hover:border-[var(--ctp-mocha-text)]/50',
      },
      {
        name: 'Postman',
        icon: 'i-simple-icons-postman',
        colorClass: 'text-[var(--ctp-latte-peach)] dark:text-[var(--ctp-mocha-peach)]',
        hoverBgClass: 'hover:bg-[var(--ctp-latte-peach)]/10 dark:hover:bg-[var(--ctp-mocha-peach)]/15',
        hoverBorderClass: 'hover:border-[var(--ctp-latte-peach)]/40 dark:hover:border-[var(--ctp-mocha-peach)]/50',
      },
      {
        name: 'Docker',
        icon: 'i-simple-icons-docker',
        colorClass: 'text-[var(--ctp-latte-blue)] dark:text-[var(--ctp-mocha-blue)]',
        hoverBgClass: 'hover:bg-[var(--ctp-latte-blue)]/10 dark:hover:bg-[var(--ctp-mocha-blue)]/15',
        hoverBorderClass: 'hover:border-[var(--ctp-latte-blue)]/40 dark:hover:border-[var(--ctp-mocha-blue)]/50',
      },
      {
        name: 'Linux',
        icon: 'i-simple-icons-linux',
        colorClass: 'text-[var(--ctp-latte-yellow)] dark:text-[var(--ctp-mocha-yellow)]',
        hoverBgClass: 'hover:bg-[var(--ctp-latte-yellow)]/10 dark:hover:bg-[var(--ctp-mocha-yellow)]/15',
        hoverBorderClass: 'hover:border-[var(--ctp-latte-yellow)]/40 dark:hover:border-[var(--ctp-mocha-yellow)]/50',
      },
    ],
  },
]
