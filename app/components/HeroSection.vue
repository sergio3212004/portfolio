<template>
  <section class="grid items-center gap-10 py-6 sm:py-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
    <div class="min-w-0">
      <p class="flex items-center gap-2.5 text-sm font-medium text-toned">
        <span class="size-2 shrink-0 bg-primary" aria-hidden="true" />{{ currentStatus }}
      </p>
      <h1 class="mt-6 max-w-3xl text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.05] font-bold tracking-tight text-highlighted">{{ title }}</h1>
      <p class="mt-6 max-w-xl text-xl leading-8 text-toned sm:text-2xl">{{ subtitle }}</p>
      <p class="mt-4 max-w-xl text-base leading-7 text-muted sm:text-lg">{{ description }}</p>
      <div class="mt-8 flex flex-wrap gap-3">
        <UButton :to="localePath('/projects')" trailing-icon="i-lucide-arrow-up-right" size="lg">{{ t('home.projectsCta') }}</UButton>
        <UButton :to="localePath('/contact')" color="neutral" variant="outline" size="lg">{{ t('home.contactCta') }}</UButton>
      </div>
      <div class="mt-3"><CvDownload /></div>
    </div>
    <div class="ascii-stage min-w-0 border border-default bg-muted">
      <div class="flex items-center justify-between gap-3 border-b border-default px-5 py-4 font-mono text-xs text-muted">
        <span>{{ t('home.visualLabel') }}</span><span aria-hidden="true">&lt;/&gt;</span>
      </div>
      <AsciiDonut />
      <p class="border-t border-default px-5 py-4 font-mono text-xs leading-5 text-muted">{{ t('home.visualCaption') }}</p>
    </div>
  </section>
</template>
<script setup lang="ts">
defineProps<{ currentStatus: string, title: string, subtitle: string, description: string }>()
const { t } = useI18n()
const localePath = useLocalePath()
</script>
