<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <UPageSection
    id="que-busco"
    :headline="t('availability.headline')"
    :title="t('availability.title')"
    :description="t('availability.description')"
  >
    <p class="text-center text-muted">{{ t('availability.value') }}</p>
  </UPageSection>
</template>
