<template>
  <UFooter>
    <template #left>
      <span>{{ t('footer.copyright', { year }) }}</span>
    </template>

    <template #right>
      <nav v-if="socials.length" :aria-label="t('social.label')" class="flex items-center gap-1">
        <UButton
          v-for="social in socials"
          :key="social.label"
          :to="social.to"
          :target="social.external ? '_blank' : undefined"
          :rel="social.external ? 'noopener noreferrer' : undefined"
          :icon="social.icon"
          :aria-label="social.label"
          :title="social.label"
          variant="ghost"
          color="neutral"
          size="sm"
          square
        />
      </nav>
    </template>
  </UFooter>
</template>

<script setup lang="ts">
const { t } = useI18n()
const year = new Date().getFullYear()
const { data: contact } = await useContactContent()

const socials = computed(() => {
  if (!contact.value) return []

  const items = []

  if (contact.value.github) {
    items.push({
      label: 'GitHub',
      icon: 'i-lucide-github',
      to: contact.value.github,
      external: true
    })
  }

  if (contact.value.linkedin) {
    items.push({
      label: 'LinkedIn',
      icon: 'i-lucide-linkedin',
      to: contact.value.linkedin,
      external: true
    })
  }

  if (contact.value.email) {
    items.push({
      label: t('social.email'),
      icon: 'i-lucide-mail',
      to: `mailto:${contact.value.email}`,
      external: false
    })
  }

  return items
})
</script>
