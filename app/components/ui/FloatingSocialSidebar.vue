<script setup lang="ts">
import { socials } from '~/data/site'
</script>

<template>
  <aside
    class="hidden xl:flex fixed left-6 bottom-10 z-30 flex-col items-center gap-4 select-none pointer-events-auto"
    aria-label="Enlaces a redes sociales y contacto"
  >
    <!-- Contenedor vertical de iconos -->
    <div
      class="flex flex-col items-center gap-3 p-1.5 rounded-2xl bg-[var(--ui-bg)]/80 dark:bg-[var(--ui-bg)]/80 backdrop-blur-md border border-[var(--ui-border)] shadow-lg shadow-black/5 dark:shadow-black/20"
    >
      <a
        v-for="social in socials"
        :key="social.label"
        :href="social.to"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="social.label"
        class="group relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 hover:scale-110 active:scale-95 bg-[var(--ui-bg-accented)]/60 hover:bg-[var(--ui-bg-accented)] border border-[var(--ui-border-muted)] hover:border-primary/50 text-[var(--ui-text)] hover:text-primary shadow-xs"
      >
        <!-- Icono no transparente adaptado al tema claro/oscuro -->
        <span
          :class="social.icon"
          class="block w-5 h-5 transition-transform duration-200 group-hover:scale-110 text-[var(--ui-text-highlighted)] group-hover:text-primary"
        />

        <!-- Tooltip minimalista al hover -->
        <span
          class="absolute left-full ml-3 px-2.5 py-1 rounded-md text-xs font-medium tracking-wide whitespace-nowrap opacity-0 pointer-events-none -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 bg-[var(--ui-bg-inverted)] text-[var(--ui-text-inverted)] shadow-md"
        >
          {{ social.label }}
        </span>
      </a>
    </div>

    <!-- Línea vertical decorativa con contraste adaptativo constante (claro/oscuro) -->
    <div class="w-[2px] h-20 rounded-full bg-gradient-to-b from-primary/80 via-[var(--ui-border-accented)] to-transparent" />
  </aside>
</template>
