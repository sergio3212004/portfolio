<script setup lang="ts">
// Párrafo corto (4-6 líneas): quién eres, qué estudias y ciclo, áreas de
// interés, qué buscas y cualidades. Tono cercano pero profesional.
const { t } = useI18n()
</script>

<template>
  <UPageSection
    id="sobre-mi"
    class="bg-muted"
    :headline="t('about.headline')"
    :title="t('about.title')"
    :description="t('about.description')"
  >
    <!-- TODO: párrafo de presentación -->
    <p class="text-center text-muted">{{ t('common.comingSoon') }}</p>
  </UPageSection>
</template>
