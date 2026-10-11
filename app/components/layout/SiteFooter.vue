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
        :aria-label="social.label"
        class="transition-all duration-200 hover:scale-110"
        :class="[social.hoverBgClass]"
      >
        <UIcon
          :name="social.icon"
          class="w-4 h-4 shrink-0"
          :class="social.colorClass"
        />
      </UButton>
    </template>
  </UFooter>
</template>
