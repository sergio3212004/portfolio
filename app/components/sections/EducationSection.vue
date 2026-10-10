<script setup lang="ts">
// Universidad, carrera, ciclo, cursos y certificaciones (Coursera, Google,
// Cisco, Oracle…). También hackatones, talleres y voluntariados.
const { t } = useI18n()
</script>

<template>
  <UPageSection
    id="formacion"
    class="bg-muted"
    :headline="t('education.headline')"
    :title="t('education.title')"
    :description="t('education.description')"
  >
    <!-- TODO: lista de formación y certificaciones -->
    <p class="text-center text-muted">{{ t('common.comingSoon') }}</p>
  </UPageSection>
</template>
