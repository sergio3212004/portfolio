<template>
  <div v-if="pageInfo" class="py-8">
    <PageIntro
      icon="i-lucide-folder-code"
      :eyebrow="t('nav.projects')"
      :title="pageInfo.title"
      :description="pageInfo.intro"
    />

    <div v-if="projects?.length" class="grid gap-5 md:grid-cols-2">
      <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
    </div>
    <UCard v-else variant="soft" :ui="{ root: 'divide-y-0', body: 'p-6 sm:p-8' }">
      <div class="flex items-center gap-3">
        <Icon name="i-lucide-folder-open" class="size-6 shrink-0 text-muted" aria-hidden="true" />
        <p class="text-lg leading-8 text-toned">{{ t('projects.empty') }}</p>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { data: pageInfo } = await useProjectsPageContent()
const { data: projects } = await usePortfolioProjects()

useSeoMeta({
  title: () => `${t('nav.projects')} · ${t('site.title')}`,
  description: () => pageInfo.value?.intro ?? ''
})
</script>
