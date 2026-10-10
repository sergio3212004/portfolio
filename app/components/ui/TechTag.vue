<script setup lang="ts">
import { categoryColor, type Tech } from '~/data/techColors'

defineProps<Tech>()
</script>

<template>
  <UBadge :color="categoryColor[category]" variant="subtle">
    {{ name }}
  </UBadge>
</template>
