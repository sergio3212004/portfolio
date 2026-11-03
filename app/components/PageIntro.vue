<template>
  <header class="mb-12 max-w-4xl">
    <p v-if="eyebrow" class="text-sm font-semibold uppercase tracking-widest text-primary">
      {{ eyebrow }}
    </p>
    <h1 class="mt-4 text-4xl font-bold tracking-tight text-highlighted sm:text-5xl">
      {{ title }}
    </h1>
    <p v-if="description" class="mt-5 text-xl leading-8 text-muted">
      {{ description }}
    </p>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  eyebrow?: string
}>()
</script>
