<template>
  <UDropdownMenu v-if="available" :items="items" :content="{ align: 'end' }">
    <UButton
      icon="i-lucide-download"
      trailing-icon="i-lucide-chevron-down"
      color="neutral"
      variant="outline"
      size="lg"
    >
      {{ t('cv.download') }}
    </UButton>
  </UDropdownMenu>
  <span v-else class="inline-flex min-h-11 items-center gap-2 text-sm text-muted">
    <Icon name="i-lucide-file-text" class="size-4" aria-hidden="true" />{{ t('cv.comingSoon') }}
  </span>
</template>

<script setup lang="ts">
const { t } = useI18n()
const config = useAppConfig()
const available = computed(() => config.cv.english || config.cv.spanish)

const items = computed(() => [
  [
    {
      type: 'label',
      label: t('cv.chooseLanguage')
    }
  ],
  [
    {
      label: t('cv.english'),
      disabled: !config.cv.english,
      description: t('cv.pdf'),
      icon: 'i-lucide-file-text',
      to: '/cv/cv-en.pdf',
      external: true,
      download: 'Sergio-Monge-CV-English.pdf'
    },
    {
      label: t('cv.spanish'),
      disabled: !config.cv.spanish,
      description: t('cv.pdf'),
      icon: 'i-lucide-file-text',
      to: '/cv/cv-es.pdf',
      external: true,
      download: 'Sergio-Monge-CV-Espanol.pdf'
    }
  ]
])
</script>
