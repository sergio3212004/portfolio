<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />

    <main class="flex-1">
      <UContainer class="py-12 sm:py-16">
        <slot />
      </UContainer>
    </main>

    <AppFooter />
  </div>
</template>
