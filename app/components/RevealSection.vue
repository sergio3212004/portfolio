<template><div ref="element"><slot /></div></template>
<script setup lang="ts">
const element = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | undefined
let animation: Animation | undefined
let media: MediaQueryList | undefined
function stopMotion() { if (media?.matches) { animation?.cancel(); observer?.disconnect() } }
onMounted(() => {
  media = window.matchMedia('(prefers-reduced-motion: reduce)')
  media.addEventListener('change', stopMotion)
  if (media.matches || !('IntersectionObserver' in window)) return
  observer = new IntersectionObserver(([entry]) => {
    if (!entry?.isIntersecting || !element.value) return
    animation = element.value.animate?.([{ opacity: 0.6, transform: 'translateY(14px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 450, easing: 'ease-out' })
    observer?.disconnect()
  }, { threshold: 0.08 })
  if (element.value) observer.observe(element.value)
})
onBeforeUnmount(() => { observer?.disconnect(); animation?.cancel(); media?.removeEventListener('change', stopMotion) })
</script>
