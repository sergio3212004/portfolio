<script setup lang="ts">
import { site, socials } from '~/data/site'

const { t } = useI18n()
</script>

<template>
  <UPageHero
    id="inicio"
    :headline="t('hero.greeting', { name: site.name })"
    :title="t('hero.headline')"
    :description="t('hero.valueProp')"
    orientation="vertical"
  >
    <!-- Único degradado de la página (mauve → pink): acento decorativo -->
    <template #body>
      <div class="h-px w-24 rounded-full bg-gradient-to-r from-primary to-secondary" />
    </template>

    <template #links>
      <!-- Un solo color "fuerte" por zona: el CTA principal -->
      <UButton
        to="#proyectos"
        size="xl"
        color="primary"
        :label="t('hero.viewProjects')"
        icon="i-lucide-folder-git-2"
      />
      <UButton
        :to="site.cvUrl"
        target="_blank"
        rel="noopener noreferrer"
        size="xl"
        color="secondary"
        variant="outline"
        :label="t('hero.downloadCv')"
        icon="i-lucide-download"
      />

      <div class="flex items-center gap-1 sm:ms-2">
        <UButton
          v-for="social in socials"
          :key="social.label"
          :to="social.to"
          target="_blank"
          rel="noopener noreferrer"
          color="info"
          variant="ghost"
          size="xl"
          :icon="social.icon"
          :aria-label="social.label"
        />
      </div>
    </template>
  </UPageHero>
</template>
