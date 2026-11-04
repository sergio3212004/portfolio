<template>
  <section aria-labelledby="quotes-heading">
    <header class="max-w-3xl">
      <h2 id="quotes-heading" class="flex items-center gap-3 text-3xl font-bold tracking-tight text-highlighted sm:text-4xl">
        <span class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon name="i-lucide-quote" class="size-6" aria-hidden="true" />
        </span>
        {{ title }}
      </h2>
      <p class="mt-4 text-lg leading-8 text-muted">{{ intro }}</p>
    </header>

    <div class="mt-10">
      <UCarousel
        v-slot="{ item: quote }"
        :items="carouselItems"
        loop
        drag-free
        :auto-scroll="{
          speed: 1,
          direction: 'backward',
          stopOnMouseEnter: true,
          stopOnInteraction: false
        }"
        :ui="{
          root: 'relative focus:outline-none cursor-grab active:cursor-grabbing select-none',
          item: 'basis-full md:basis-1/2 lg:basis-1/3 ps-4 flex',
          container: 'items-stretch -ms-4'
        }"
      >
        <UCard
          as="figure"
          variant="soft"
          class="flex w-full flex-col h-full transition-all duration-300 hover:border-primary/50 hover:shadow-md"
          :ui="{ root: 'divide-y-0 h-full w-full flex flex-col', body: 'flex h-full flex-1 flex-col p-6 sm:p-8' }"
        >
          <Icon name="i-lucide-quote" class="size-9 shrink-0 text-primary" aria-hidden="true" />
          <blockquote class="mt-4 flex-1 text-lg leading-8 text-toned">
            {{ quote.text }}
          </blockquote>
          <figcaption class="mt-6 pt-4 border-t border-muted/20">
            <p class="font-semibold text-highlighted">{{ quote.author }}</p>
            <a
              v-if="quote.sourceUrl"
              :href="quote.sourceUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-1 inline-flex items-center gap-1 text-sm text-primary hover:underline"
              @click.stop
            >
              {{ quote.source }}
              <Icon name="i-lucide-arrow-up-right" class="size-3.5 shrink-0" aria-hidden="true" />
            </a>
            <p v-else class="mt-1 text-sm text-muted">{{ quote.source }}</p>
          </figcaption>
        </UCard>
      </UCarousel>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  intro: string
  quotes: Array<{
    text: string
    author: string
    source: string
    sourceUrl?: string
  }>
}>()

// Duplicate quotes to ensure seamless continuous looping across all screen sizes
const carouselItems = computed(() => {
  if (!props.quotes || props.quotes.length === 0) return []
  return [...props.quotes, ...props.quotes]
})
</script>
