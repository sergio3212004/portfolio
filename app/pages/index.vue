<template>
  <div v-if="home" class="space-y-16 sm:space-y-24">
    <HeroSection :current-status="home.currentStatus" :location="home.location" :title="home.heroTitle" :subtitle="home.heroSubtitle" :description="home.heroDescription" />
    <RevealSection v-if="featuredProjects.length">
      <section aria-labelledby="selected-heading">
        <div class="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p class="section-kicker">{{ t('home.workLabel') }}</p>
            <h2 id="selected-heading" class="mt-4 text-3xl font-bold text-highlighted sm:text-4xl">{{ t('home.selectedTitle') }}</h2>
            <p class="mt-4 text-lg leading-7 text-muted">{{ t('home.selectedIntro') }}</p>
          </div>
          <UButton :to="localePath('/projects')" trailing-icon="i-lucide-arrow-up-right" variant="link">{{ t('home.allProjects') }}</UButton>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <ProjectCard v-for="(project, index) in featuredProjects" :key="project.id" :project="project" :featured="index === 0" :class="{ 'md:col-span-2': index === 0 }" />
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
const featuredProjects = computed(() => projects.value?.filter(project => project.featured).slice(0, 3) ?? [])
useSeoMeta({ title: () => home.value?.heroTitle ?? t('nav.home'), description: () => home.value?.heroDescription ?? '' })
</script>
