<template>
  <HeroSection
    v-if="profile"
    :current-status="profile.currentStatus"
    :title="profile.heroTitle"
    :subtitle="profile.heroSubtitle"
    :description="profile.heroDescription"
  />
</template>

<script setup lang="ts">
const { t } = useI18n()
const { data: profile } = await usePortfolioProfile()

useSeoMeta({
  title: () => profile.value?.heroTitle ?? t('nav.home'),
  description: () => profile.value?.heroDescription ?? ''
})
</script>
