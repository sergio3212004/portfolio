<script setup lang="ts">
// Grupos: Lenguajes · Frontend/Backend · Bases de datos ·
// Herramientas · Metodologías. Ver `~/data/skills`.
const { t } = useI18n()
</script>

<template>
  <UPageSection
    id="habilidades"
    :headline="t('skills.headline')"
    :title="t('skills.title')"
    :description="t('skills.description')"
  >
    <!-- TODO: <UPageGrid> con tarjetas/badges por categoría -->
    <p class="text-center text-muted">{{ t('common.comingSoon') }}</p>
  </UPageSection>
</template>
