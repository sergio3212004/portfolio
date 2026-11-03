<template>
  <div v-if="profile" class="py-8">
    <PageIntro :eyebrow="t('nav.contact')" :title="profile.contactTitle" :description="profile.contactIntro" />

    <div class="flex flex-wrap gap-3">
      <UButton v-if="profile.email" :to="`mailto:${profile.email}`" color="primary" size="lg">
        {{ t('contact.email') }}
      </UButton>
      <UButton v-if="profile.github" :to="profile.github" target="_blank" color="neutral" variant="soft" size="lg">
        GitHub
      </UButton>
      <UButton v-if="profile.linkedin" :to="profile.linkedin" target="_blank" color="neutral" variant="soft" size="lg">
        LinkedIn
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { data: profile } = await usePortfolioProfile()

useSeoMeta({
  title: () => `${t('nav.contact')} · ${t('site.title')}`,
  description: () => profile.value?.contactIntro ?? ''
})
</script>
