<template>
  <div v-if="profile" class="space-y-20 sm:space-y-28">
    <HeroSection
      :current-status="profile.currentStatus"
      :title="profile.heroTitle"
      :subtitle="profile.heroSubtitle"
      :description="profile.heroDescription"
    />

    <CareerSection
      :title="profile.careerTitle"
      :description="profile.careerDescription"
      :detail="profile.careerDetail"
    />

    <QuotesSection
      :title="profile.quotesTitle"
      :intro="profile.quotesIntro"
      :quotes="profile.quotes"
    />

    <FaqSection
      :title="profile.faqTitle"
      :intro="profile.faqIntro"
      :items="profile.faqs"
    />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { data: profile } = await usePortfolioProfile()

useSeoMeta({
  title: () => profile.value?.heroTitle ?? t('nav.home'),
  description: () => profile.value?.heroDescription ?? ''
})
</script>
