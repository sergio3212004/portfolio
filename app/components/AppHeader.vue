<template>
  <UHeader :title="t('site.title')" :to="localePath('/')" :ui="{ root: 'border-b-0' }">
    <UNavigationMenu :items="navigationItems" :ui="{ link: 'text-base px-3 py-2' }" />

    <template #right>
      <USelect
        :model-value="locale"
        :items="localeOptions"
        :aria-label="t('language.select')"
        icon="i-lucide-languages"
        variant="ghost"
        size="lg"
        class="w-32"
        @update:model-value="setLocale"
      />
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="navigationItems" orientation="vertical" :ui="{ link: 'text-lg py-3' }" />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
const { t, locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()
const localeOptions = computed(() =>
  locales.value.map(({ code, name }) => ({ label: name, value: code }))
)
const navigationItems = computed(() => [
  { label: t('nav.home'), icon: 'i-lucide-house', to: localePath('/') },
  { label: t('nav.skills'), icon: 'i-lucide-sparkles', to: localePath('/skills') },
  { label: t('nav.projects'), icon: 'i-lucide-folder-code', to: localePath('/projects') },
  { label: t('nav.aboutMe'), icon: 'i-lucide-user-round', to: localePath('/about-me') },
  { label: t('nav.contact'), icon: 'i-lucide-mail', to: localePath('/contact') }
])

</script>
