<template>
  <div v-if="about" class="space-y-14 py-8">
    <PageIntro
      icon="i-lucide-user-round"
      :eyebrow="t('nav.aboutMe')"
      :title="about.journeyTitle"
      :description="about.journey"
    />

    <section>
      <h2 class="flex items-center gap-3 text-2xl font-semibold text-highlighted">
        <span class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon name="i-lucide-compass" class="size-5" aria-hidden="true" />
        </span>
        {{ about.visionTitle }}
      </h2>
      <p class="mt-5 max-w-3xl whitespace-pre-line text-xl leading-9 text-toned">{{ about.vision }}</p>
    </section>

    <section>
      <h2 class="flex items-center gap-3 text-2xl font-semibold text-highlighted">
        <span class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon name="i-lucide-heart" class="size-5" aria-hidden="true" />
        </span>
        {{ about.interestsTitle }}
      </h2>
      <div class="mt-5 flex flex-wrap gap-3">
        <UBadge
          v-for="interest in about.interests"
          :key="interest.name"
          :leading-icon="interest.icon"
          color="neutral"
          variant="soft"
          size="lg"
        >
          {{ interest.name }}
        </UBadge>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { data: about } = await useAboutContent()

useSeoMeta({
  title: () => `${t('nav.aboutMe')} · ${t('site.title')}`,
  description: () => about.value?.journey ?? ''
})
</script>
