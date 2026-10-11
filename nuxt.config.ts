// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "@nuxt/fonts", "@nuxtjs/i18n"],
  // Nombres de componente limpios aunque estén en subcarpetas:
  // components/layout/SiteHeader.vue -> <SiteHeader />
  components: [{ path: "~/components", pathPrefix: false }],
  i18n: {
    strategy: "no_prefix",
    defaultLocale: "en",
    langDir: "locales",
    locales: [
      { code: "en", name: "English", language: "en-US", file: "en.json" },
      { code: "es", name: "Español", language: "es-PE", file: "es.json" },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
    },
  },
  css: ["~/assets/css/main.css"],
});
