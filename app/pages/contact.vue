<template>
  <div v-if="contact" class="py-8">
    <PageIntro
      icon="i-lucide-mail"
      :eyebrow="t('nav.contact')"
      :title="contact.title"
      :description="contact.intro"
    />

    <div class="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
      <UCard variant="soft" :ui="{ root: 'divide-y-0', body: 'p-6 sm:p-8' }">
        <h2 class="flex items-center gap-3 text-xl font-semibold text-highlighted">
          <span class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon name="i-lucide-contact" class="size-5" aria-hidden="true" />
          </span>
          {{ t('contact.directTitle') }}
        </h2>
        <p class="mt-3 text-lg leading-8 text-toned">{{ t('contact.directDescription') }}</p>

        <div class="mt-6 flex flex-col gap-3">
          <UButton
            v-if="contact.email"
            :to="`mailto:${contact.email}`"
            icon="i-lucide-mail"
            color="primary"
            size="lg"
            block
            class="justify-start"
          >
            {{ t('contact.email') }}
          </UButton>
          <UButton
            v-if="contact.github"
            :to="contact.github"
            icon="i-lucide-github"
            target="_blank"
            color="neutral"
            variant="soft"
            size="lg"
            block
            class="justify-start"
          >
            GitHub
          </UButton>
          <UButton
            v-if="contact.linkedin"
            :to="contact.linkedin"
            icon="i-lucide-linkedin"
            target="_blank"
            color="neutral"
            variant="soft"
            size="lg"
            block
            class="justify-start"
          >
            LinkedIn
          </UButton>
        </div>
      </UCard>

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
