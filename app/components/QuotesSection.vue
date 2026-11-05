<template>
  <section v-if="quotes.length" aria-labelledby="quotes-heading" class="border-y border-default py-10 sm:py-14">
    <h2 id="quotes-heading" class="section-kicker">{{ title }}</h2>
    <p class="mt-3 text-base text-muted">{{ intro }}</p>
    <figure v-if="quotes[0]" class="mt-6 max-w-3xl">
      <blockquote class="text-2xl leading-relaxed text-highlighted sm:text-3xl">“{{ quotes[0].text }}”</blockquote>
      <figcaption class="mt-6 text-sm text-muted">
        <span class="font-semibold text-highlighted">{{ quotes[0].author }}</span>
        <a v-if="quotes[0].sourceUrl" :href="quotes[0].sourceUrl" target="_blank" rel="noopener noreferrer" class="mt-2 block w-fit py-2 text-primary underline decoration-primary/30 underline-offset-4">{{ quotes[0].source }} ↗</a>
        <p v-else class="mt-2">{{ quotes[0].source }}</p>
      </figcaption>
    </figure>
  </section>
</template>
<script setup lang="ts">
defineProps<{ title: string, intro: string, quotes: Array<{ text: string, author: string, source: string, sourceUrl?: string }> }>()
</script>
