<template>
  <header class="mb-12 max-w-4xl">
    <div v-if="icon || eyebrow" class="flex items-center gap-3">
      <span
        v-if="icon"
        class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
      >
        <Icon :name="icon" class="size-6" aria-hidden="true" />
      </span>
      <p v-if="eyebrow" class="text-sm font-semibold uppercase tracking-widest text-primary">
        {{ eyebrow }}
      </p>
    </div>
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
  icon?: string
}>()
</script>
