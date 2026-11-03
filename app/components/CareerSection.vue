<template>
  <section aria-labelledby="career-heading" class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
    <h2 id="career-heading" class="text-3xl font-bold tracking-tight text-highlighted sm:text-4xl">
      {{ title }}
    </h2>
    <div>
      <p class="text-xl leading-9 text-toned">{{ description }}</p>
      <p class="mt-5 text-lg leading-8 text-muted">{{ detail }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  detail: string
}>()
</script>
