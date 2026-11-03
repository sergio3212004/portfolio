<template>
  <div v-if="profile" class="py-12 sm:py-20">
    <UBadge color="primary" variant="soft" size="lg">{{ profile.currentStatus }}</UBadge>
    <h1 class="mt-8 max-w-5xl text-5xl font-bold tracking-tight text-highlighted sm:text-7xl">
      {{ profile.heroTitle }}
    </h1>
    <p class="mt-7 max-w-3xl text-2xl leading-9 text-toned">{{ profile.heroSubtitle }}</p>
    <p class="mt-5 max-w-2xl text-lg leading-8 text-muted">{{ profile.heroDescription }}</p>

    <div class="mt-8 flex flex-wrap gap-3">
      <UButton :to="localePath('/projects')" size="lg" color="primary">
        {{ t('home.projectsCta') }}
      </UButton>
      <UButton :to="localePath('/about-me')" size="lg" color="neutral" variant="ghost">
        {{ t('home.aboutCta') }}
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const { data: profile } = await usePortfolioProfile()

useSeoMeta({
  title: () => profile.value?.heroTitle ?? t('nav.home'),
  description: () => profile.value?.heroDescription ?? ''
})
</script>
