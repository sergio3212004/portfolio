export function useHomeContent() {
  const { locale } = useI18n()

  return useAsyncData(
    () => `home-content-${locale.value}`,
    () => locale.value === 'es'
      ? queryCollection('homeEs').first()
      : queryCollection('homeEn').first()
  )
}

export function useAboutContent() {
  const { locale } = useI18n()

  return useAsyncData(
    () => `about-content-${locale.value}`,
    () => locale.value === 'es'
      ? queryCollection('aboutMeEs').first()
      : queryCollection('aboutMeEn').first()
  )
}

export function useSkillsContent() {
  const { locale } = useI18n()

  return useAsyncData(
    () => `skills-content-${locale.value}`,
    () => locale.value === 'es'
      ? queryCollection('skillsEs').first()
      : queryCollection('skillsEn').first()
  )
}

export function useProjectsPageContent() {
  const { locale } = useI18n()

  return useAsyncData(
    () => `projects-page-content-${locale.value}`,
    () => locale.value === 'es'
      ? queryCollection('projectsPageEs').first()
      : queryCollection('projectsPageEn').first()
  )
}

export function usePortfolioProjects() {
  const { locale } = useI18n()

  return useAsyncData(
    () => `portfolio-projects-${locale.value}`,
    () => locale.value === 'es'
      ? queryCollection('projectsEs').order('order', 'ASC').all()
      : queryCollection('projectsEn').order('order', 'ASC').all()
  )
}

export function useContactContent() {
  const { locale } = useI18n()

  return useAsyncData(
    () => `contact-content-${locale.value}`,
    () => locale.value === 'es'
      ? queryCollection('contactEs').first()
      : queryCollection('contactEn').first()
  )
}
