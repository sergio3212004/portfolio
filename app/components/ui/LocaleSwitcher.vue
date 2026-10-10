<script setup lang="ts">
const { locale, locales, setLocale, t } = useI18n()

const items = computed(() =>
  locales.value.map((l) => {
    const code = typeof l === 'string' ? l : l.code
    const label = typeof l === 'string' ? l : (l.name ?? l.code)

    return {
      label,
      checked: code === locale.value,
      onSelect: () => setLocale(code),
    }
  }),
)
</script>

<template>
  <UDropdownMenu :items="items" :content="{ align: 'end' }">
    <UButton
      color="neutral"
      variant="ghost"
      icon="i-lucide-languages"
      :aria-label="t('a11y.toggleLanguage')"
    />
  </UDropdownMenu>
</template>
