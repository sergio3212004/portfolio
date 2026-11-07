<template>
  <article class="project-card min-w-0 border border-default bg-muted" :class="{ 'project-featured': featured }">
    <div v-if="project.screenshots?.length" class="project-image border-b border-default">
      <UCarousel v-slot="{ item, index }" :items="projectImages" arrows dots :prev="{ 'aria-label': t('projects.previousImage') }" :next="{ 'aria-label': t('projects.nextImage') }" :ui="{ dots: 'bottom-0 gap-0', dot: 'flex size-11 items-center justify-center bg-transparent before:size-1.5 before:rounded-full before:bg-accented data-[state=active]:bg-transparent data-[state=active]:before:bg-inverted', prev: 'start-2 sm:start-2', next: 'end-2 sm:end-2' }" class="pb-11">
        <button type="button" class="group relative block w-full cursor-zoom-in focus-visible:outline-2 focus-visible:outline-primary" :aria-label="`${t('projects.expandImage')}: ${item.alt}`" @click="openImage(index)">
          <img :src="item.src" :alt="item.alt" width="1920" height="962" loading="lazy" decoding="async" class="aspect-[1920/962] w-full object-contain" />
          <span class="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-default/90 text-highlighted shadow-sm">
            <Icon name="i-lucide-expand" class="size-4" aria-hidden="true" />
          </span>
        </button>
      </UCarousel>
    </div>
    <div v-else-if="project.image" class="project-image overflow-hidden border-b border-default">
      <img :src="project.image" :alt="project.imageAlt || project.title" width="960" height="640" loading="lazy" decoding="async" class="aspect-[3/2] w-full object-cover" />
      <p v-if="project.imagePlaceholder" class="px-5 py-3 text-xs text-muted sm:px-7">{{ t('projects.imagePlaceholder') }}</p>
    </div>
    <div class="min-w-0 p-5 sm:p-7">
      <p v-if="project.sample" class="mb-4 font-mono text-xs text-muted">{{ t('projects.sample') }}</p>
      <div class="flex flex-wrap items-start justify-between gap-3">
        <h3 class="flex items-start gap-2.5 text-xl font-semibold sm:text-2xl text-highlighted">
          <Icon name="i-lucide-folder-code" class="mt-0.5 size-6 shrink-0 text-primary" aria-hidden="true" />
          {{ project.title }}
        </h3>
        <UBadge color="warning" variant="soft" size="lg" leading-icon="i-lucide-circle-dot">
          {{ project.status }}
        </UBadge>
      </div>
      <p class="mt-4 text-base leading-7 text-toned">{{ project.description }}</p>
      <div class="mt-5 flex flex-wrap gap-2">
        <UBadge
          v-for="(technology, index) in project.technologies"
          :key="technology"
          :leading-icon="technologyIcon(technology)"
          :ui="{ leadingIcon: technologyIconClass(index) }"
          color="neutral"
          variant="soft"
          size="lg"
        >
          {{ technology }}
        </UBadge>
      </div>
      <div v-if="project.repository || project.demo" class="mt-6 flex flex-wrap gap-3">
        <UButton
          v-if="project.repository"
          :to="project.repository"
          target="_blank"
          rel="noopener noreferrer"
          icon="i-simple-icons:github"
          color="primary"
          variant="soft"
          size="lg"
        >
          {{ t('projects.source') }}
        </UButton>
        <UButton
          v-if="project.demo"
          :to="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          icon="i-lucide-arrow-up-right"
          color="neutral"
          variant="soft"
          size="lg"
        >
          {{ t('projects.visitSite') }}
        </UButton>
      </div>
      <details v-if="project.role || project.challenge || project.outcome" class="mt-6 border-t border-default pt-3">
        <summary class="cursor-pointer py-3 text-sm font-semibold text-primary">{{ t('projects.details') }}</summary>
        <dl class="space-y-4 pb-2 pt-3 text-sm leading-6">
          <template v-for="field in (['role', 'challenge', 'outcome'] as const)" :key="field">
            <div v-if="project[field]">
              <dt class="font-semibold text-highlighted">{{ t(`projects.${field}`) }}</dt>
              <dd class="mt-1 text-muted">{{ project[field] }}</dd>
            </div>
          </template>
        </dl>
      </details>
    </div>
    <UModal v-model:open="galleryOpen" :title="project.title" :description="t('projects.galleryDescription')" :ui="{ content: 'max-w-[96vw] sm:max-w-[96vw]', body: 'p-2 sm:p-4' }">
      <template #body>
        <img v-if="activeImage" :src="activeImage.src" :alt="activeImage.alt" class="max-h-[70dvh] w-full object-contain" />
        <div class="mt-4 flex items-center justify-center gap-4">
          <UButton :aria-label="t('projects.previousImage')" icon="i-lucide-chevron-left" color="neutral" variant="soft" :disabled="activeImageIndex === 0" @click="activeImageIndex--" />
          <span class="text-sm text-muted" aria-live="polite">{{ activeImageIndex + 1 }} / {{ projectImages.length }}</span>
          <UButton :aria-label="t('projects.nextImage')" icon="i-lucide-chevron-right" color="neutral" variant="soft" :disabled="activeImageIndex === projectImages.length - 1" @click="activeImageIndex++" />
        </div>
      </template>
    </UModal>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  featured?: boolean
  project: {
    title: string
    description: string
    status: string
    technologies: string[]
    image?: string
    imageAlt?: string
    imagePlaceholder?: boolean
    screenshots?: Array<{ src: string, alt: string }>
    sample?: boolean
    role?: string
    challenge?: string
    outcome?: string
    repository?: string
    demo?: string
  }
}>()

const projectImages = computed(() => [
  ...(props.project.image ? [{ src: props.project.image, alt: props.project.imageAlt || props.project.title }] : []),
  ...(props.project.screenshots ?? [])
])

const galleryOpen = ref(false)
const activeImageIndex = ref(0)
const activeImage = computed(() => projectImages.value[activeImageIndex.value])

function openImage(index: number) {
  activeImageIndex.value = index
  galleryOpen.value = true
}

const { t } = useI18n()

const technologyIcons: Record<string, string> = {
  React: 'i-simple-icons:react',
  'React Flow': 'i-lucide:workflow',
  Vite: 'i-simple-icons:vite',
  PHP: 'i-simple-icons:php',
  Laravel: 'i-simple-icons:laravel',
  PostgreSQL: 'i-simple-icons:postgresql',
  Nuxt: 'i-simple-icons:nuxt',
  Vue: 'i-simple-icons:vuedotjs',
  TypeScript: 'i-simple-icons:typescript',
  JavaScript: 'i-simple-icons:javascript',
  HTML: 'i-simple-icons:html5',
  CSS: 'i-simple-icons:css3',
  'Tailwind CSS': 'i-simple-icons:tailwindcss',
  'Node.js': 'i-simple-icons:nodedotjs',
  Git: 'i-simple-icons:git',
  GitHub: 'i-simple-icons:github',
  Bun: 'i-simple-icons:bun',
  'VS Code': 'i-simple-icons:visualstudiocode',
  Nitro: 'i-lucide:zap',
  'Nuxt UI': 'i-lucide:layout-template',
  'Nuxt Content': 'i-lucide:file-text',
  'REST APIs': 'i-lucide:webhook'
}

const accents = [
  'text-primary',
  'text-secondary',
  'text-success',
  'text-info',
  'text-warning',
  'text-error'
]

function technologyIcon(technology: string) {
  return technologyIcons[technology] ?? 'i-lucide:code'
}

function technologyIconClass(index: number) {
  return accents[index % accents.length]
}
</script>
