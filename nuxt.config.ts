// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/ui",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxtjs/i18n",
    "@nuxt/content",
    "nuxt-studio",
  ],
  css: ["~/assets/css/main.css"],
  icon: {
    serverBundle: "local",
    clientBundle: {
      scan: true,
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  studio: {
    route: "/_studio",
    repository: {
      provider: "github",
      owner: "sergio3212004",
      repo: "portfolio",
      branch: "main",
      rootDir: "",
      private: true,
    },
  },
  i18n: {
    defaultLocale: "en",
    fallbackLocale: "en",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    locales: [
      { code: "en", language: "en-US", name: "English", file: "en.json" },
      { code: "es", language: "es-ES", name: "Español", file: "es.json" },
    ],
    langDir: "locales",
  },
});
