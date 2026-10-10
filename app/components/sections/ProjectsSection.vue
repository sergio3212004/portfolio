<script setup lang="ts">
// Los datos vendrán de `~/data/projects` (Project[]).
const { t } = useI18n()
</script>

<template>
  <UPageSection
    id="proyectos"
    :headline="t('projects.headline')"
    :title="t('projects.title')"
    :description="t('projects.description')"
  >
    <!-- TODO: <UPageGrid> con <ProjectCard> a partir de ~/data/projects -->
    <p class="text-center text-muted">{{ t('common.comingSoon') }}</p>
  </UPageSection>
</template>
