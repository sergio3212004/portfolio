<template>
  <div v-if="contact" class="py-8">
    <PageIntro
      icon="i-lucide-mail"
      :eyebrow="t('nav.contact')"
      :title="contact.title"
      :description="contact.intro"
    />

    <div class="mx-auto max-w-3xl">
      <ContactForm />
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
