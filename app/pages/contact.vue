<template>
  <div v-if="contact" class="py-8">
    <PageIntro :eyebrow="t('nav.contact')" :title="contact.title" :description="contact.intro" />

    <div class="flex flex-wrap gap-3">
      <UButton v-if="contact.email" :to="`mailto:${contact.email}`" color="primary" size="lg">
        {{ t('contact.email') }}
      </UButton>
      <UButton v-if="contact.github" :to="contact.github" target="_blank" color="neutral" variant="soft" size="lg">
        GitHub
      </UButton>
      <UButton v-if="contact.linkedin" :to="contact.linkedin" target="_blank" color="neutral" variant="soft" size="lg">
        LinkedIn
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { data: contact } = await useContactContent()

useSeoMeta({
  title: () => `${t('nav.contact')} · ${t('site.title')}`,
  description: () => contact.value?.intro ?? ''
})
</script>
