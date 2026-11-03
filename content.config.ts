import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const portfolioSchema = z.object({
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
    sourceUrl: z.string().url().optional()
  })),
  faqTitle: z.string(),
  faqIntro: z.string(),
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string()
  })),
  visionTitle: z.string(),
  vision: z.string(),
  skillsTitle: z.string(),
  skillsIntro: z.string(),
  skillGroups: z.array(z.object({
    title: z.string(),
    items: z.array(z.string())
  })),
  projectsTitle: z.string(),
  projectsIntro: z.string(),
  journeyTitle: z.string(),
  journey: z.string(),
  interestsTitle: z.string(),
  interests: z.array(z.string()),
  contactTitle: z.string(),
  contactIntro: z.string(),
  email: z.string().email().optional(),
  github: z.string().url().optional(),
  linkedin: z.string().url().optional()
})

const projectSchema = z.object({
  order: z.number(),
  title: z.string(),
  description: z.string(),
  status: z.string(),
  technologies: z.array(z.string()),
  repository: z.string().url().optional(),
  demo: z.string().url().optional()
})

export default defineContentConfig({
  collections: {
    portfolioEn: defineCollection({
      type: 'data',
      source: 'en/portfolio.yml',
      schema: portfolioSchema
    }),
    portfolioEs: defineCollection({
      type: 'data',
      source: 'es/portfolio.yml',
      schema: portfolioSchema
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
    })
  }
})
