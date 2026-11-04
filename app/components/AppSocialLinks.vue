<template>
  <nav
    v-if="socials.length"
    :aria-label="t('social.label')"
    class="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 min-[1360px]:flex"
  >
    <div class="relative flex flex-col items-center gap-2">
      <span class="absolute -inset-y-4 left-1/2 w-px -translate-x-1/2 bg-accented" aria-hidden="true" />

      <div
        v-for="social in socials"
        :key="social.label"
        class="relative z-10 flex bg-[var(--ui-bg)]"
      >
        <UButton
          :to="social.to"
          :target="social.external ? '_blank' : undefined"
          :rel="social.external ? 'noopener noreferrer' : undefined"
          :icon="social.icon"
          :aria-label="social.label"
          :title="social.label"
          variant="ghost"
          color="neutral"
          size="lg"
          square
        />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { t } = useI18n()
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
