<script setup lang="ts">
import { socials } from '~/data/site'
</script>

<template>
  <!--
    Escritorio (xl+): barra vertical fija a la izquierda, como antes.
    Móvil / tablet (< xl): dock horizontal fijo abajo, centrado y con
    respeto por el safe-area (notch) para que sea cómodo de pulsar.
  -->
  <aside
    class="pointer-events-auto fixed z-40 flex select-none items-center gap-3
           bottom-[calc(1rem_+_env(safe-area-inset-bottom,0px))] left-1/2 -translate-x-1/2 flex-row
           xl:bottom-10 xl:left-6 xl:translate-x-0 xl:flex-col xl:gap-4"
    aria-label="Enlaces a redes sociales y contacto"
  >
    <!-- Contenedor de iconos con alto contraste tanto en zonas claras como oscuras -->
    <div
      class="flex flex-row items-center gap-2 rounded-2xl p-2 bg-[var(--ui-bg)]/90 dark:bg-[var(--ui-bg-elevated)]/90 backdrop-blur-xl border border-[var(--ui-border)]/80 dark:border-white/15 shadow-xl shadow-black/10 dark:shadow-black/50 ring-1 ring-black/5 dark:ring-white/10 xl:flex-col xl:gap-2.5"
    >
      <a
        v-for="social in socials"
        :key="social.label"
        :href="social.to"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="social.label"
        class="group relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 hover:scale-110 active:scale-95 bg-[var(--ui-bg-accented)]/40 hover:bg-[var(--ui-bg-accented)]/90 dark:bg-[var(--ui-bg-accented)]/60 dark:hover:bg-[var(--ui-bg-accented)] border border-[var(--ui-border-muted)]/60 dark:border-white/10 shadow-xs"
        :class="[social.hoverBorderClass, social.hoverBgClass]"
      >
        <!-- Icono UIcon con color de marca adaptado al modo claro/oscuro -->
        <UIcon
          :name="social.icon"
          class="w-5 h-5 shrink-0 transition-transform duration-200 group-hover:scale-110"
          :class="social.colorClass"
        />

        <!-- Tooltip minimalista al hover (solo escritorio: en táctil no aplica) -->
        <span
          class="hidden xl:block absolute left-full ml-3 px-2.5 py-1 rounded-md text-xs font-medium tracking-wide whitespace-nowrap opacity-0 pointer-events-none -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 bg-[var(--ui-bg-inverted)] text-[var(--ui-text-inverted)] shadow-md"
        >
          {{ social.label }}
        </span>
      </a>
    </div>

    <!-- Línea vertical decorativa (solo escritorio) -->
    <div class="hidden xl:block w-[2px] h-20 rounded-full bg-gradient-to-b from-primary via-[var(--ui-border-accented)] to-transparent dark:from-primary dark:via-white/20 dark:to-transparent opacity-80" />
  </aside>
</template>
