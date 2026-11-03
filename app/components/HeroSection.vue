<template>
  <section class="grid items-center gap-12 py-12 sm:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:gap-16">
    <div>
      <UBadge color="primary" variant="soft" size="lg">{{ currentStatus }}</UBadge>
      <h1 class="mt-8 max-w-4xl text-5xl font-bold tracking-tight text-highlighted sm:text-6xl xl:text-7xl">
        {{ title }}
      </h1>
      <p class="mt-7 max-w-2xl text-2xl leading-9 text-toned">{{ subtitle }}</p>
      <p class="mt-5 max-w-2xl text-lg leading-8 text-muted">{{ description }}</p>

      <div class="mt-8 flex flex-wrap gap-3">
        <UButton :to="localePath('/projects')" size="lg" color="primary">
          {{ t('home.projectsCta') }}
        </UButton>
        <UButton :to="localePath('/about-me')" size="lg" color="neutral" variant="ghost">
          {{ t('home.aboutCta') }}
        </UButton>
      </div>
    </div>

    <div class="flex items-center justify-center overflow-hidden lg:justify-end">
      <AsciiDonut />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  currentStatus: string
  title: string
  subtitle: string
  description: string
}>()

const { t } = useI18n()
const localePath = useLocalePath()
</script>
