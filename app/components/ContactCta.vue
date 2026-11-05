<template>
  <section class="contact-cta relative border border-default bg-muted p-6 sm:p-10 lg:p-14">
    <p class="section-kicker">{{ t('contact.ctaLabel') }}</p>
    <div class="mt-5 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
      <div>
        <h2 class="max-w-2xl text-3xl font-bold leading-tight text-highlighted sm:text-4xl">{{ t('contact.ctaTitle') }}</h2>
        <p class="mt-4 max-w-xl text-base leading-7 text-muted">{{ t('contact.ctaDescription') }}</p>
      </div>
      <UButton :to="localePath('/contact')" trailing-icon="i-lucide-arrow-up-right" size="xl" class="w-fit">{{ t('home.contactCta') }}</UButton>
    </div>
  </section>
</template>
<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>
