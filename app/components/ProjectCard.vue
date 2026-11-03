<template>
  <UCard variant="soft" :ui="{ root: 'divide-y-0', body: 'p-6 sm:p-8' }" class="h-full">
    <div class="flex items-start justify-between gap-4">
      <h3 class="text-2xl font-semibold text-highlighted">{{ project.title }}</h3>
      <UBadge color="warning" variant="soft" size="lg">{{ project.status }}</UBadge>
    </div>
    <p class="mt-5 text-lg leading-8 text-toned">{{ project.description }}</p>
    <div class="mt-5 flex flex-wrap gap-2">
      <UBadge v-for="technology in project.technologies" :key="technology" color="neutral" variant="soft" size="lg">
        {{ technology }}
      </UBadge>
    </div>
    <div v-if="project.repository || project.demo" class="mt-6 flex gap-3">
      <UButton v-if="project.repository" :to="project.repository" target="_blank" color="primary" variant="soft" size="lg">
        {{ t('projects.source') }}
      </UButton>
      <UButton v-if="project.demo" :to="project.demo" target="_blank" color="neutral" variant="soft" size="lg">
        {{ t('projects.demo') }}
      </UButton>
    </div>
  </UCard>
</template>

<script setup lang="ts">
defineProps<{
  project: {
    title: string
    description: string
    status: string
    technologies: string[]
    repository?: string
    demo?: string
  }
}>()

const { t } = useI18n()
</script>
