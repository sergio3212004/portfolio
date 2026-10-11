<script setup lang="ts">
import { site } from '~/data/site'

const { t } = useI18n()
</script>

<template>
  <section
    id="inicio"
    class="relative isolate min-h-[92vh] w-full overflow-hidden flex flex-col justify-center px-4 sm:px-6 lg:px-12 py-16 lg:py-24"
  >
    <!-- Malla interactiva de curvatura gravitatoria espacio-tiempo -->
    <SpacetimeGravityCanvas :grid-size="32" :gravity-radius="260" :gravity-strength="52" />

    <!-- Contenedor Principal del Hero -->
    <div class="relative z-10 mx-auto w-full max-w-(--ui-container)">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <!-- Columna Izquierda / Central: Titular masivo y presentación -->
        <div class="lg:col-span-8 flex flex-col items-start text-left">
          <!-- Saludo sutil -->
          <p class="font-mono text-sm tracking-wider text-[var(--ui-text-muted)] mb-3 flex items-center gap-2">
            <span class="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
            {{ t('hero.greeting', { name: site.name }) }}
          </p>

          <!-- Título Masivo en dos niveles con tipografía Display e impacto -->
          <h1 class="font-display font-black tracking-tighter uppercase leading-[0.88] select-none text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-6">
            <span class="block text-primary drop-shadow-sm">
              {{ t('hero.rolePrefix') }}
            </span>
            <span class="block text-[var(--ui-text-highlighted)] mt-1 sm:mt-2">
              {{ t('hero.roleSuffix') }}
            </span>
          </h1>

          <!-- Descripción / Propuesta de valor refinada -->
          <p class="max-w-xl text-base sm:text-lg text-[var(--ui-text-muted)] leading-relaxed font-normal mb-8">
            {{ t('hero.valueProp') }}
          </p>

          <!-- Botones de Acción (CTA principal estilo botón sólido de la referencia + CV) -->
          <div class="flex flex-wrap items-center gap-4 mb-8">
            <UButton
              to="#contacto"
              size="xl"
              color="primary"
              class="font-semibold tracking-wider uppercase px-8 py-3.5 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              :label="t('hero.cta')"
              icon="i-lucide-arrow-up-right"
              trailing
            />

            <UButton
              to="#proyectos"
              size="xl"
              variant="outline"
              color="neutral"
              class="font-medium tracking-wide px-6 py-3.5 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              :label="t('hero.viewProjects')"
              icon="i-lucide-folder-git-2"
            />

            <UButton
              :to="site.cvUrl"
              target="_blank"
              rel="noopener noreferrer"
              size="xl"
              variant="ghost"
              color="neutral"
              class="font-medium tracking-wide px-4 py-3.5 hover:text-primary transition-colors cursor-pointer"
              :label="t('hero.downloadCv')"
              icon="i-lucide-download"
            />
          </div>

          <!-- Indicador de estado con pulso (Available for opportunities) -->
          <div class="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--ui-bg-accented)] border border-[var(--ui-border)] shadow-xs">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
            </span>
            <span class="text-xs font-medium text-[var(--ui-text-toned)]">
              {{ t('hero.status') }}
            </span>
          </div>
        </div>

        <!-- Columna Derecha: Métricas / Estadísticas verticales (SIN borde vertical desentonado) -->
        <div class="lg:col-span-4 flex flex-row lg:flex-col justify-start lg:justify-center items-start lg:items-end gap-8 sm:gap-12 pt-6 lg:pt-0">
          <!-- Métrica 1 -->
          <div class="flex flex-col items-start lg:items-end text-left lg:text-right group">
            <div class="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-primary tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5">
              5+
            </div>
            <div class="text-xs sm:text-sm text-[var(--ui-text-muted)] mt-1 font-medium tracking-wide">
              {{ t('hero.stats.projects') }}
            </div>
          </div>

          <!-- Métrica 2 -->
          <div class="flex flex-col items-start lg:items-end text-left lg:text-right group">
            <div class="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-primary tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5">
              3
            </div>
            <div class="text-xs sm:text-sm text-[var(--ui-text-muted)] mt-1 font-medium tracking-wide">
              {{ t('hero.stats.focus') }}
            </div>
          </div>

          <!-- Métrica 3 -->
          <div class="flex flex-col items-start lg:items-end text-left lg:text-right group">
            <div class="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-primary tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5">
              10+
            </div>
            <div class="text-xs sm:text-sm text-[var(--ui-text-muted)] mt-1 font-medium tracking-wide">
              {{ t('hero.stats.techs') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
