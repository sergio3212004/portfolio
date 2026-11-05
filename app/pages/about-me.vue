<template>
  <div v-if="about" class="space-y-14 py-8">
    <PageIntro
      icon="i-lucide-user-round"
      :eyebrow="t('nav.aboutMe')"
      :title="about.journeyTitle"
      :description="about.journey"
    />

    <section class="grid items-center gap-8 md:grid-cols-[0.8fr_1.2fr]">
      <div class="ascii-stage flex aspect-[4/3] min-w-0 items-center justify-center border border-default bg-muted">
        <img v-if="about.portrait" :src="about.portrait" :alt="about.portraitAlt || ''" width="640" height="480" loading="lazy" class="h-full w-full object-cover" />
        <div v-else class="p-8 text-center">
          <Icon name="i-lucide-compass" class="size-16 text-primary" aria-hidden="true" />
          <p class="mt-6 font-mono text-sm text-muted">{{ t('about.portraitPlaceholder') }}</p>
        </div>
      </div>
      <div><h2 class="section-kicker">{{ t('about.noteLabel') }}</h2><p class="mt-5 text-xl leading-9 text-toned">{{ about.personalNote }}</p></div>
    </section>
    <section>
      <h2 class="flex items-center gap-3 text-2xl font-semibold text-highlighted">
        <span class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
          <Icon name="i-lucide-compass" class="size-5" aria-hidden="true" />
        </span>
        {{ about.visionTitle }}
      </h2>
      <p class="mt-5 max-w-3xl whitespace-pre-line text-xl leading-9 text-toned">{{ about.vision }}</p>
    </section>

    <section>
      <h2 class="flex items-center gap-3 text-2xl font-semibold text-highlighted">
        <span class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-warning/10 text-warning">
          <Icon name="i-lucide-heart" class="size-5" aria-hidden="true" />
        </span>
        {{ about.interestsTitle }}
      </h2>
      <div class="mt-5 flex flex-wrap gap-3">
        <UBadge
          v-for="(interest, index) in about.interests"
          :key="interest.name"
          :leading-icon="interest.icon"
          :ui="{ leadingIcon: accents[index % accents.length] }"
          color="neutral"
          variant="soft"
          size="lg"
        >
          {{ interest.name }}
        </UBadge>
      </div>
    </section>
    <QuotesSection v-if="home" :title="home.quotesTitle" :intro="home.quotesIntro" :quotes="home.quotes" />
    <ContactCta />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { data: about } = await useAboutContent()
const { data: home } = await useHomeContent()

const accents = [
  'text-primary',
  'text-secondary',
  'text-success',
  'text-info',
  'text-warning',
  'text-error'
]

useSeoMeta({
  title: () => `${t('nav.aboutMe')} · ${t('site.title')}`,
  description: () => about.value?.journey ?? ''
})
</script>
