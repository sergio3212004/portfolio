<template>
  <div class="relative flex min-h-64 items-center justify-center py-8 sm:min-h-80">
    <pre ref="donutElement" aria-hidden="true" class="m-0 select-none font-mono text-[10px] leading-[1.2] text-primary sm:text-[13px]">{{ initialFrame }}</pre>
    <UButton v-if="!reducedMotion" :icon="paused ? 'i-lucide-play' : 'i-lucide-pause'" :aria-label="paused ? t('home.playAnimation') : t('home.pauseAnimation')" :aria-pressed="paused" color="neutral" variant="ghost" class="absolute right-2 bottom-2" square @click="paused = !paused" />
  </div>
</template>
<script setup lang="ts">
import { mount } from 'ascii.rest'
import { donut } from 'ascii.rest/pieces'
const { t } = useI18n()
const donutElement = ref<HTMLPreElement | null>(null)
const initialFrame = donut.default()(0)
const paused = ref(false)
const reducedMotion = ref(true)
let stopAnimation: (() => void) | undefined
let media: MediaQueryList | undefined
let observer: IntersectionObserver | undefined
let visible = true
function syncAnimation() {
  stopAnimation?.()
  stopAnimation = undefined
  if (donutElement.value && !paused.value && !reducedMotion.value && visible && !document.hidden) {
    stopAnimation = mount(donutElement.value, donut)
  }
}
function syncPreference() {
  reducedMotion.value = media?.matches ?? true
  syncAnimation()
}
watch(paused, syncAnimation)
onMounted(() => {
  media = window.matchMedia('(prefers-reduced-motion: reduce)')
  media.addEventListener('change', syncPreference)
  document.addEventListener('visibilitychange', syncAnimation)
  if ('IntersectionObserver' in window && donutElement.value) {
    observer = new IntersectionObserver(([entry]) => { visible = !!entry?.isIntersecting; syncAnimation() })
    observer.observe(donutElement.value)
  }
  syncPreference()
})
onBeforeUnmount(() => {
  stopAnimation?.()
  observer?.disconnect()
  media?.removeEventListener('change', syncPreference)
  document.removeEventListener('visibilitychange', syncAnimation)
})
</script>
