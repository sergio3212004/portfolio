import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const homeSchema = z.object({
  currentStatus: z.string(),
  heroTitle: z.string(),
  heroSubtitle: z.string(),
  heroDescription: z.string(),
  heroCta: z.string(),
  careerTitle: z.string(),
  careerDescription: z.string(),
  careerDetail: z.string(),
  quotesTitle: z.string(),
  quotesIntro: z.string(),
  quotes: z.array(z.object({
    text: z.string(),
    author: z.string(),
    source: z.string(),
    sourceUrl: z.string().url().optional().or(z.literal(''))
  })),
  faqTitle: z.string(),
  faqIntro: z.string(),
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string()
  }))
})

const aboutMeSchema = z.object({
  journeyTitle: z.string(),
  journey: z.string(),
  visionTitle: z.string(),
  vision: z.string(),
  interestsTitle: z.string(),
  interests: z.array(z.object({
    name: z.string(),
    icon: z.string()
  }))
})

const skillItemSchema = z.object({
  name: z.string(),
  icon: z.string()
})

const skillsSchema = z.object({
  title: z.string(),
  intro: z.string(),
  technical: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    groups: z.array(z.object({
      title: z.string(),
      icon: z.string(),
      items: z.array(skillItemSchema)
    }))
  }),
  soft: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    items: z.array(skillItemSchema)
  }),
  english: z.object({
    title: z.string(),
    icon: z.string(),
    level: z.string(),
    levelLabel: z.string(),
    description: z.string()
  })
})

const projectsPageSchema = z.object({
  title: z.string(),
  intro: z.string()
})

const projectSchema = z.object({
  order: z.number(),
  title: z.string(),
  description: z.string(),
  status: z.string(),
  technologies: z.array(z.string()),
  repository: z.string().url().optional().or(z.literal('')),
  demo: z.string().url().optional().or(z.literal(''))
})

const contactSchema = z.object({
  title: z.string(),
  intro: z.string(),
  email: z.string().email().optional().or(z.literal('')),
  github: z.string().url().optional().or(z.literal('')),
  linkedin: z.string().url().optional().or(z.literal(''))
})

export default defineContentConfig({
  collections: {
    homeEn: defineCollection({
      type: 'data',
      source: 'en/home.yml',
      schema: homeSchema
    }),
    homeEs: defineCollection({
      type: 'data',
      source: 'es/home.yml',
      schema: homeSchema
    }),
    aboutMeEn: defineCollection({
      type: 'data',
      source: 'en/about-me.yml',
      schema: aboutMeSchema
    }),
    aboutMeEs: defineCollection({
      type: 'data',
      source: 'es/about-me.yml',
      schema: aboutMeSchema
    }),
    skillsEn: defineCollection({
      type: 'data',
      source: 'en/skills.yml',
      schema: skillsSchema
    }),
    skillsEs: defineCollection({
      type: 'data',
      source: 'es/skills.yml',
      schema: skillsSchema
    }),
    projectsPageEn: defineCollection({
      type: 'data',
      source: 'en/projects.yml',
      schema: projectsPageSchema
    }),
    projectsPageEs: defineCollection({
      type: 'data',
      source: 'es/projects.yml',
      schema: projectsPageSchema
    }),
    projectsEn: defineCollection({
      type: 'data',
      source: 'en/projects/*.yml',
      schema: projectSchema
    }),
    projectsEs: defineCollection({
      type: 'data',
      source: 'es/projects/*.yml',
      schema: projectSchema
    }),
    contactEn: defineCollection({
      type: 'data',
      source: 'en/contact.yml',
      schema: contactSchema
    }),
    contactEs: defineCollection({
      type: 'data',
      source: 'es/contact.yml',
      schema: contactSchema
    })
  }
})
