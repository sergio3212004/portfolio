<script setup lang="ts">
import { site } from '~/data/site'

const { t } = useI18n()

useSeoMeta({
  title: () => t('seo.title', { name: site.name }),
  description: () => t('seo.description'),
})
</script>

<template>
  <UApp>
    <SiteHeader />

    <UMain>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <AvailabilitySection />
      <ContactSection />
    </UMain>

    <SiteFooter />
  </UApp>
</template>
