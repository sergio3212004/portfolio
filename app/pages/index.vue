<template>
  <div v-if="home" class="space-y-20 sm:space-y-28">
    <HeroSection
      :current-status="home.currentStatus"
      :title="home.heroTitle"
      :subtitle="home.heroSubtitle"
      :description="home.heroDescription"
    />

    <CareerSection
      :title="home.careerTitle"
      :description="home.careerDescription"
      :detail="home.careerDetail"
    />

    <QuotesSection
      :title="home.quotesTitle"
      :intro="home.quotesIntro"
      :quotes="home.quotes"
    />

    <FaqSection
      :title="home.faqTitle"
      :intro="home.faqIntro"
      :items="home.faqs"
    />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { data: home } = await useHomeContent()

useSeoMeta({
  title: () => home.value?.heroTitle ?? t('nav.home'),
  description: () => home.value?.heroDescription ?? ''
})
</script>
