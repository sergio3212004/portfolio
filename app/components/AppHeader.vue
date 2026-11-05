<template>
  <UHeader v-model:open="open" :toggle="{ 'aria-label': open ? t('a11y.closeMenu') : t('a11y.menu') }" :title="t('site.title')" :to="localePath('/')" :ui="{ root: 'border-b border-default', container: 'gap-2', left: 'min-w-0 lg:flex-none', right: 'gap-1', title: 'text-lg', toggle: 'min-h-11 min-w-11' }">
    <UNavigationMenu :items="navigationItems" :ui="{ link: 'text-base px-3 py-2' }" />

    <template #right>
      <USelect
        :model-value="locale"
        :items="localeOptions"
        :aria-label="t('language.select')"
        icon="i-lucide-languages"
        :ui="{ leadingIcon: 'text-primary' }"
        variant="ghost"
        size="lg"
        class="hidden w-32 sm:flex"
        @update:model-value="setLocale"
      />
      <UColorModeButton :aria-label="t('a11y.theme')" />
    </template>

    <template #body>
      <div class="mb-6 border-b border-default pb-6 sm:hidden">
        <label for="mobile-language" class="mb-2 block text-sm text-muted">{{ t('language.select') }}</label>
        <USelect id="mobile-language" :model-value="locale" :items="localeOptions" size="xl" class="w-full" @update:model-value="setLocale" />
      </div>
      <UNavigationMenu :items="navigationItems" orientation="vertical" :ui="{ link: 'text-lg py-3' }" />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
const open = ref(false)
const { t, locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()
const localeOptions = computed(() =>
  locales.value.map(({ code, name }) => ({ label: name, value: code }))
)
const navigationItems = computed(() => [
  { label: t('nav.home'), icon: 'i-lucide-house', to: localePath('/'), ui: { linkLeadingIcon: 'text-primary' } },
  { label: t('nav.skills'), icon: 'i-lucide-sparkles', to: localePath('/skills'), ui: { linkLeadingIcon: 'text-secondary' } },
  { label: t('nav.projects'), icon: 'i-lucide-folder-code', to: localePath('/projects'), ui: { linkLeadingIcon: 'text-warning' } },
  { label: t('nav.aboutMe'), icon: 'i-lucide-user-round', to: localePath('/about-me'), ui: { linkLeadingIcon: 'text-info' } },
  { label: t('nav.contact'), icon: 'i-lucide-mail', to: localePath('/contact'), ui: { linkLeadingIcon: 'text-success' } }
])

</script>
