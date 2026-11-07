<template>
  <div v-if="home" class="space-y-16 sm:space-y-24">
    <HeroSection :current-status="home.currentStatus" :location="home.location" :title="home.heroTitle" :subtitle="home.heroSubtitle" :description="home.heroDescription" />
    <RevealSection v-if="favoriteProject">
      <section aria-labelledby="selected-heading">
        <div class="mb-8 text-center">
          <div>
            <p class="section-kicker">{{ t('home.workLabel') }}</p>
            <h2 id="selected-heading" class="mt-4 text-3xl font-bold text-highlighted sm:text-4xl">{{ t('home.selectedTitle') }}</h2>
            <p class="mt-4 text-lg leading-7 text-muted">{{ t('home.selectedIntro') }}</p>
          </div>
        </div>
        <ProjectCard :project="favoriteProject" featured />
        <div class="mt-8 flex justify-center">
          <UButton :to="localePath('/projects')" trailing-icon="i-lucide-arrow-up-right" color="neutral" variant="outline" size="lg">{{ t('home.allProjects') }}</UButton>
        </div>
      </section>
    </RevealSection>
    <RevealSection><CareerSection :title="home.careerTitle" :description="home.careerDescription" :detail="home.careerDetail" :milestones="home.milestones" /></RevealSection>
    <RevealSection><FaqSection :title="home.faqTitle" :intro="home.faqIntro" :items="home.faqs" /></RevealSection>
    <RevealSection><ContactCta /></RevealSection>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const { data: home } = await useHomeContent()
const { data: projects } = await usePortfolioProjects()
const favoriteProject = computed(() => projects.value?.find(project => project.featured))
useSeoMeta({ title: () => home.value?.heroTitle ?? t('nav.home'), description: () => home.value?.heroDescription ?? '' })
</script>
