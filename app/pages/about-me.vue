<template>
  <div v-if="profile" class="space-y-14 py-8">
    <PageIntro :eyebrow="t('nav.aboutMe')" :title="profile.journeyTitle" :description="profile.journey" />

    <section>
      <h2 class="text-2xl font-semibold text-highlighted">{{ profile.visionTitle }}</h2>
      <p class="mt-5 max-w-3xl whitespace-pre-line text-xl leading-9 text-toned">{{ profile.vision }}</p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold text-highlighted">{{ profile.interestsTitle }}</h2>
      <div class="mt-5 flex flex-wrap gap-3">
        <UBadge v-for="interest in profile.interests" :key="interest" color="neutral" variant="soft" size="lg">
          {{ interest }}
        </UBadge>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { data: profile } = await usePortfolioProfile()

useSeoMeta({
  title: () => `${t('nav.aboutMe')} · ${t('site.title')}`,
  description: () => profile.value?.journey ?? ''
})
</script>
