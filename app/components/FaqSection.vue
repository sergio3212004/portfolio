<template>
  <section aria-labelledby="faq-heading">
    <header class="max-w-3xl">
      <h2 id="faq-heading" class="flex items-center gap-3 text-3xl font-bold tracking-tight text-highlighted sm:text-4xl">
        <span class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon name="i-lucide-circle-help" class="size-6" aria-hidden="true" />
        </span>
        {{ title }}
      </h2>
      <p class="mt-4 text-lg leading-8 text-muted">{{ intro }}</p>
    </header>

    <UAccordion
      :items="accordionItems"
      class="mt-10"
      :ui="{
        root: 'space-y-3',
        item: 'border-b-0 bg-elevated/40 px-6',
        trigger: 'py-5 text-lg font-semibold',
        body: 'pb-6 text-base leading-7 text-muted'
      }"
    />
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  intro: string
  items: Array<{
    question: string
    answer: string
  }>
}>()

const accordionItems = computed(() =>
  props.items.map((item, index) => ({
    label: item.question,
    icon: 'i-lucide-circle-help',
    content: item.answer,
    value: String(index)
  }))
)
</script>
