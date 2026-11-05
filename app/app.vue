<template>
  <UApp :locale="locale === 'es' ? es : en">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
import { en, es } from '@nuxt/ui/locale'
const { locale } = useI18n()
useHead(() => ({ htmlAttrs: { lang: locale.value } }))
</script>
