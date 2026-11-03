<template>
  <div v-if="skills" class="py-8">
    <PageIntro :eyebrow="t('nav.skills')" :title="skills.title" :description="skills.intro" />

    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <UCard v-for="group in skills.skillGroups" :key="group.title" variant="soft" :ui="{ root: 'divide-y-0', body: 'p-6 sm:p-8' }" class="h-full">
        <h2 class="text-xl font-semibold text-highlighted">{{ group.title }}</h2>
        <ul class="mt-5 space-y-4">
          <li v-for="skill in group.items" :key="skill" class="flex items-start gap-3 text-lg leading-7 text-toned">
            <span class="mt-2 size-1.5 shrink-0 bg-primary" />
            {{ skill }}
          </li>
        </ul>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { data: skills } = await useSkillsContent()

useSeoMeta({
  title: () => `${t('nav.skills')} · ${t('site.title')}`,
  description: () => skills.value?.intro ?? ''
})
</script>
