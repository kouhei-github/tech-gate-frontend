// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/google-adsense',
    '~/modules/sitemap'
  ],
  sitemap: {
    hostname: 'https://tecklinker.com',
  },
  googleAdsense: {
    id: 'ca-pub-3519272467638604'
  },
  nitro: {
    baseURL: "",
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: '123',

    // Public keys that are exposed to the client
    public: {
      apiUrl: ""
    }
  },
})
