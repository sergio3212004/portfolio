<template>
  <UDropdownMenu :items="items" :content="{ align: 'end' }">
    <UButton
      icon="i-lucide-download"
      trailing-icon="i-lucide-chevron-down"
      color="secondary"
      variant="soft"
      size="lg"
    >
      {{ t('cv.download') }}
    </UButton>
  </UDropdownMenu>
</template>

<script setup lang="ts">
const { t } = useI18n()

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
      description: t('cv.pdf'),
      icon: 'i-lucide-file-text',
      to: '/cv/cv-en.pdf',
      external: true,
      download: true
    },
    {
      label: t('cv.spanish'),
      description: t('cv.pdf'),
      icon: 'i-lucide-file-text',
      to: '/cv/cv-es.pdf',
      external: true,
      download: true
    }
  ]
])
</script>
