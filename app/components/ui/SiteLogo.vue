<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <span class="flex items-center gap-2">
    <span
      class="grid size-8 shrink-0 place-items-center rounded-lg bg-primary font-display text-sm font-bold text-inverted"
    >
      {{ site.initials }}
    </span>
    <span class="font-display text-lg font-bold">{{ site.name }}</span>
  </span>
</template>
