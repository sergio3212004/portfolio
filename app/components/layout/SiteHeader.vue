<script setup lang="ts">
import { site } from "~/data/site";

const items = useNavItems();
</script>

<template>
  <!--
    UHeader ya es sticky (top-0 z-50) y responsive: en móvil la navegación
    pasa al menú del slot #body.
  -->
  <UHeader :title="site.name" to="/" class="border-0">
    <template #title>
      <SiteLogo />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <LocaleSwitcher />
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
