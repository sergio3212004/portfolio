<template>
  <section aria-labelledby="career-heading" class="grid gap-10 border-t border-default pt-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
    <div>
      <p class="section-kicker">{{ t('home.careerLabel') }}</p>
      <h2 id="career-heading" class="mt-4 text-3xl font-bold text-highlighted sm:text-4xl">{{ title }}</h2>
      <p class="mt-5 text-lg leading-8 text-toned">{{ description }}</p>
      <p class="mt-4 text-base leading-7 text-muted">{{ detail }}</p>
    </div>
    <ol class="ml-2 border-l border-default">
      <li v-for="(milestone, index) in milestones" :key="index" class="relative pb-10 pl-7 last:pb-0 sm:pl-9">
        <span class="absolute -left-[5px] top-1.5 size-[9px] bg-primary ring-4 ring-(--ui-bg)" aria-hidden="true" />
        <p class="font-mono text-xs tracking-wide text-primary">{{ milestone.period }}</p>
        <h3 class="mt-3 text-xl font-semibold text-highlighted">{{ milestone.title }}</h3>
        <p class="mt-3 text-base leading-7 text-muted">{{ milestone.description }}</p>
      </li>
    </ol>
  </section>
</template>
<script setup lang="ts">
defineProps<{ title: string, description: string, detail: string, milestones: Array<{ period: string, title: string, description: string }> }>()
const { t } = useI18n()
</script>
