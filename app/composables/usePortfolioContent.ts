export function usePortfolioProfile() {
  const { locale } = useI18n()

  return useAsyncData(
    () => `portfolio-profile-${locale.value}`,
    () => locale.value === 'es'
      ? queryCollection('portfolioEs').first()
      : queryCollection('portfolioEn').first()
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
