<template>
  <div v-if="skills" class="space-y-14 py-8">
    <PageIntro
      icon="i-lucide-sparkles"
      :eyebrow="t('nav.skills')"
      :title="skills.title"
      :description="skills.intro"
    />

    <section>
      <h2 class="flex items-center gap-3 text-2xl font-semibold text-highlighted">
        <Icon :name="skills.technical.icon" mode="svg" class="size-7 shrink-0" />
        {{ skills.technical.title }}
      </h2>
      <p class="mt-3 max-w-3xl text-lg leading-8 text-toned">{{ skills.technical.description }}</p>

      <div class="mt-6 grid gap-4 md:grid-cols-2">
        <UCard
          v-for="group in skills.technical.groups"
          :key="group.title"
          variant="soft"
          :ui="{ root: 'divide-y-0', body: 'p-6 sm:p-8' }"
          class="h-full"
        >
          <h3 class="flex items-center gap-2.5 text-lg font-semibold text-highlighted">
            <Icon :name="group.icon" mode="svg" class="size-5 shrink-0" />
            {{ group.title }}
          </h3>
          <div class="mt-4 flex flex-wrap gap-2">
            <UBadge
              v-for="item in group.items"
              :key="item.name"
              color="neutral"
              variant="soft"
              size="lg"
              class="gap-1.5"
            >
              <Icon
                :name="item.icon"
                mode="svg"
                class="size-4 shrink-0"
              />
              {{ item.name }}
            </UBadge>
          </div>
        </UCard>
      </div>
    </section>

    <section>
      <h2 class="flex items-center gap-3 text-2xl font-semibold text-highlighted">
        <Icon :name="skills.soft.icon" class="size-7 shrink-0 text-secondary" />
        {{ skills.soft.title }}
      </h2>
      <p class="mt-3 max-w-3xl text-lg leading-8 text-toned">{{ skills.soft.description }}</p>

      <UCard variant="soft" :ui="{ root: 'divide-y-0', body: 'p-6 sm:p-8' }" class="mt-6">
        <ul class="grid gap-x-8 gap-y-4 sm:grid-cols-2">
          <li
            v-for="(item, index) in skills.soft.items"
            :key="item.name"
            class="flex items-start gap-3 text-lg leading-7 text-toned"
          >
            <Icon :name="item.icon" :class="['mt-1 size-5 shrink-0', accents[index % accents.length]]" />
            {{ item.name }}
          </li>
        </ul>
      </UCard>
    </section>

    <section>
      <h2 class="flex items-center gap-3 text-2xl font-semibold text-highlighted">
        <Icon :name="skills.english.icon" class="size-7 shrink-0 text-info" />
        {{ skills.english.title }}
      </h2>

      <UCard variant="soft" :ui="{ root: 'divide-y-0', body: 'p-6 sm:p-8' }" class="mt-6">
        <div class="flex items-start gap-5 sm:items-center sm:gap-6">
          <div class="flex size-20 shrink-0 items-center justify-center bg-primary/10 text-2xl font-bold text-primary">
            <span class="sr-only">CEFR </span>{{ skills.english.level }}
          </div>
          <div>
            <p class="text-xl font-semibold text-highlighted">{{ skills.english.levelLabel }}</p>
            <p class="mt-2 text-lg leading-8 text-toned">{{ skills.english.description }}</p>
          </div>
        </div>
      </UCard>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { data: skills } = await useSkillsContent()

const accents = [
  'text-primary',
  'text-secondary',
  'text-success',
  'text-info',
  'text-warning',
  'text-error'
]

useSeoMeta({
  title: () => `${t('nav.skills')} · ${t('site.title')}`,
  description: () => skills.value?.intro ?? ''
})
</script>
