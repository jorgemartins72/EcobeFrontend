// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts", // "@nuxtjs/color-mode",
    // "@vueuse/nuxt",
    // "@nuxt/icon",
    // "nuxtjs-naive-ui",
    // "nuxt-vue3-google-signin"
    "@nuxt/fonts",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "@nuxt/icon",
  ],

  css: ["./assets/css/tailwind.css"],

  googleFonts: {
    display: "swap",
    prefetch: true,
    preconnect: false,
    preload: true,
    useStylesheet: true,
    families: {
      "Roboto+Condensed": [100, 300, 400, 700],
      Roboto: [100, 300, 400, 700],
      Geist: [100, 400, 600, 800, 900],
    },
  },

  fonts: {
    families: [{ name: "Geist", provider: "google" }],
    defaults: {
      "sans-serif": ["Geist", "Helvetica", "Helvetica Neue", "Roboto"],
      "system-ui": [
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Helvetica Neue",
        "Arial",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
      "ui-sans-serif": ["Arial"],
    },
  },

  tailwindcss: {
    exposeConfig: true,
    editorSupport: true,
  },

  colorMode: {
    classSuffix: "",
  },

  imports: {
    imports: [
      {
        from: "tailwind-variants",
        name: "tv",
      },
      {
        from: "tailwind-variants",
        name: "VariantProps",
        type: true,
      },
    ],
  },
});