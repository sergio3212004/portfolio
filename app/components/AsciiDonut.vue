<template>
  <pre
    ref="donutElement"
    aria-hidden="true"
    class="m-0 select-none font-mono text-[clamp(0.5rem,1.1vw,0.875rem)] leading-[1.2] text-primary"
  >{{ initialFrame }}</pre>
</template>

<script setup lang="ts">
import { mount } from 'ascii.rest'
import { donut } from 'ascii.rest/pieces'

const donutElement = ref<HTMLPreElement | null>(null)
const initialFrame = donut.default()(0)
let stopAnimation: (() => void) | undefined

onMounted(() => {
  if (donutElement.value) {
    stopAnimation = mount(donutElement.value, donut)
  }
})

onBeforeUnmount(() => {
  stopAnimation?.()
})
</script>
