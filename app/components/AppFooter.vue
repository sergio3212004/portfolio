<template>
  <UFooter>
    <template #left>
      <span>{{ t('footer.copyright', { year }) }}</span>
    </template>
  </UFooter>
</template>

<script setup lang="ts">
const { t } = useI18n()
const year = new Date().getFullYear()
</script>
