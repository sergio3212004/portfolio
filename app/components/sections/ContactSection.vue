<script setup lang="ts">
import { site, socials } from '~/data/site'

const { t } = useI18n()
</script>

<template>
  <UPageSection
    id="contacto"
    class="bg-muted"
    :headline="t('contact.headline')"
    :title="t('contact.title')"
    :description="t('contact.description')"
  >
    <div class="flex flex-wrap items-center justify-center gap-3">
      <UButton
        :to="`mailto:${site.email}`"
        size="lg"
        color="primary"
        icon="i-lucide-mail"
        :label="t('contact.email')"
      />
      <UButton
        v-for="social in socials"
        :key="social.label"
        :to="social.to"
        target="_blank"
        rel="noopener noreferrer"
        size="lg"
        color="neutral"
        variant="outline"
        :icon="social.icon"
        :label="social.label"
      />
    </div>

    <p class="mt-4 text-center text-sm text-muted">
      {{ site.location }} · {{ t('availability.value') }}
    </p>
  </UPageSection>
</template>
