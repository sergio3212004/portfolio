<script setup lang="ts">
import { site, socials } from '~/data/site'

const { t } = useI18n()
const items = useNavItems()
const year = new Date().getFullYear()
</script>

<template>
  <UFooter>
    <template #left>
      <p class="text-sm text-muted">
        {{ t('footer.rights', { year, name: site.name }) }}
      </p>
    </template>

    <UNavigationMenu :items="items" variant="link" />

    <template #right>
      <UButton
        v-for="social in socials"
        :key="social.label"
        :to="social.to"
        target="_blank"
        rel="noopener noreferrer"
        color="neutral"
        variant="ghost"
        :icon="social.icon"
        :aria-label="social.label"
      />
    </template>
  </UFooter>
</template>
