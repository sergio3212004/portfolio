<template>
  <div class="flex min-h-screen flex-col">
    <a href="#main-content" class="skip-link">{{ t('a11y.skip') }}</a>
    <AppHeader />

    <main id="main-content" tabindex="-1" class="min-w-0 flex-1">
      <UContainer class="py-6 sm:py-10">
        <slot />
      </UContainer>
    </main>

    <AppSocialLinks />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
