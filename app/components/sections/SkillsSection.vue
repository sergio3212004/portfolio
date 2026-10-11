<script setup lang="ts">
import { skillCategories } from "~/data/skills";

const { t } = useI18n();
</script>

<template>
  <UPageSection
    id="habilidades"
    :headline="t('skills.headline')"
    :title="t('skills.title')"
    :description="t('skills.description')"
  >
    <!--
      flex-wrap + justify-center: en pantallas de escritorio anchas las 4
      tarjetas caben en una sola fila; en móvil se apilan (excepción).
      En lg se reduce el gap para dar margen suficiente a la fila.
    -->
    <div class="flex flex-wrap items-start justify-center gap-6 lg:gap-4">
      <div
        v-for="category in skillCategories"
        :key="category.id"
        class="group/card flex w-fit max-w-full flex-col rounded-2xl p-6 bg-[var(--ui-bg)]/80 dark:bg-[var(--ui-bg-elevated)]/40 backdrop-blur-md border border-[var(--ui-border)]/80 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/40"
      >
        <!-- Encabezado de la categoría -->
        <div
          class="flex items-center justify-between pb-4 mb-4 border-b border-[var(--ui-border-muted)]/60 dark:border-white/5"
        >
          <div class="flex items-center gap-3">
            <div
              class="flex items-center justify-center w-9 h-9 rounded-xl bg-[var(--ui-bg-accented)] border border-[var(--ui-border-muted)] dark:border-white/10"
            >
              <UIcon :name="category.icon" class="w-5 h-5 text-primary" />
            </div>
            <h3
              class="font-display font-bold text-lg text-[var(--ui-text-highlighted)]"
            >
              {{ t(category.titleKey) }}
            </h3>
          </div>
        </div>

        <!-- Plantilla de skills: 2 columnas fijas. Cada columna mide como mínimo su contenido
             (max-content), así los items nunca se parten ni saltan de fila. -->
        <div
          class="grid grid-cols-[repeat(2,minmax(max-content,1fr))] gap-2.5 sm:gap-3"
        >
          <div
            v-for="skill in category.skills"
            :key="skill.name"
            class="group/skill flex items-center gap-3 p-2.5 rounded-xl transition-all duration-200 cursor-default bg-[var(--ui-bg-accented)]/40 dark:bg-[var(--ui-bg-accented)]/50 hover:bg-[var(--ui-bg-accented)] border border-[var(--ui-border-muted)]/70 dark:border-white/10 hover:shadow-xs hover:-translate-y-0.5"
            :class="[skill.hoverBorderClass, skill.hoverBgClass]"
          >
            <!-- Icono de tecnología con tamaño nítido y animación al hover -->
            <div
              class="flex items-center justify-center w-7 h-7 shrink-0 rounded-lg bg-[var(--ui-bg)] dark:bg-[var(--ui-bg-elevated)] border border-[var(--ui-border-muted)]/50 dark:border-white/10 shadow-2xs"
            >
              <UIcon
                :name="skill.icon"
                class="w-4.5 h-4.5 transition-transform duration-200 group-hover/skill:scale-115 shrink-0"
                :class="skill.colorClass"
              />
            </div>

            <!-- Nombre de la tecnología (siempre completo, en una sola línea horizontal) -->
            <span
              class="whitespace-nowrap text-xs sm:text-sm font-medium tracking-tight text-[var(--ui-text)] group-hover/skill:text-[var(--ui-text-highlighted)]"
            >
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </UPageSection>
</template>
