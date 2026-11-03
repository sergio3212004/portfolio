<template>
  <section aria-labelledby="quotes-heading">
    <header class="max-w-3xl">
      <h2 id="quotes-heading" class="text-3xl font-bold tracking-tight text-highlighted sm:text-4xl">
        {{ title }}
      </h2>
      <p class="mt-4 text-lg leading-8 text-muted">{{ intro }}</p>
    </header>

    <div class="mt-10 grid gap-5 lg:grid-cols-3">
      <UCard
        v-for="quote in quotes"
        :key="quote.author"
        as="figure"
        variant="soft"
        :ui="{ root: 'divide-y-0', body: 'flex h-full flex-col p-6 sm:p-8' }"
      >
        <span aria-hidden="true" class="text-5xl leading-none text-primary">“</span>
        <blockquote class="mt-4 flex-1 text-lg leading-8 text-toned">
          {{ quote.text }}
        </blockquote>
        <figcaption class="mt-6">
          <p class="font-semibold text-highlighted">{{ quote.author }}</p>
          <a
            v-if="quote.sourceUrl"
            :href="quote.sourceUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-1 inline-block text-sm text-primary hover:underline"
          >
            {{ quote.source }}
          </a>
          <p v-else class="mt-1 text-sm text-muted">{{ quote.source }}</p>
        </figcaption>
      </UCard>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  intro: string
  quotes: Array<{
    text: string
    author: string
    source: string
    sourceUrl?: string
  }>
}>()
</script>
