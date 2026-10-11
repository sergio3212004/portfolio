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
        color="neutral"
        variant="outline"
        :label="t('contact.email')"
        class="transition-all duration-200 hover:scale-105 hover:bg-[var(--ctp-latte-red)]/10 dark:hover:bg-[var(--ctp-mocha-red)]/15 hover:border-[var(--ctp-latte-red)]/50 dark:hover:border-[var(--ctp-mocha-red)]/50 shadow-xs"
      >
        <template #leading>
          <UIcon
            name="i-lucide-mail"
            class="w-5 h-5 text-[var(--ctp-latte-red)] dark:text-[var(--ctp-mocha-red)]"
          />
        </template>
      </UButton>

      <UButton
        v-for="social in socials"
        :key="social.label"
        :to="social.to"
        target="_blank"
        rel="noopener noreferrer"
        size="lg"
        color="neutral"
        variant="outline"
        :label="social.label"
        class="transition-all duration-200 hover:scale-105 shadow-xs"
        :class="[social.hoverBgClass, social.hoverBorderClass]"
      >
        <template #leading>
          <UIcon
            :name="social.icon"
            class="w-5 h-5 shrink-0 transition-transform duration-200"
            :class="social.colorClass"
          />
        </template>
      </UButton>
    </div>

    <p class="mt-4 text-center text-sm text-muted">
      {{ site.location }} · {{ t('availability.value') }}
    </p>
  </UPageSection>
</template>
