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
      <section v-if="contact.email || contact.github || contact.linkedin" class="mt-8 border-t border-default pt-6">
        <h2 class="text-lg font-semibold">{{ t('contact.direct') }}</h2>
        <div class="mt-4 flex flex-wrap gap-3">
          <UButton v-if="contact.email" :to="`mailto:${contact.email}`" icon="i-lucide-mail" color="neutral" variant="outline">{{ t('social.email') }}</UButton>
          <UButton v-if="contact.github" :to="contact.github" target="_blank" rel="noopener noreferrer" icon="i-simple-icons:github" color="neutral" variant="outline">GitHub</UButton>
          <UButton v-if="contact.linkedin" :to="contact.linkedin" target="_blank" rel="noopener noreferrer" icon="i-simple-icons:linkedin" color="neutral" variant="outline">LinkedIn</UButton>
        </div>
      </section>
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
