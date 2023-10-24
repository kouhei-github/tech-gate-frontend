// https://nuxt.com/docs/api/configuration/nuxt-config


const getDynamicTagRoots = async () => {
  const headers = {
    'Content-Type': 'application/json',
  };
  const res = await fetch(
      `https://backend.tecklinker.com/api/v1/tag`,
      { method: "GET", headers: headers}
  )
  const response: {
    name: string
    url: string
  }[] = await res.json()
  return response.map((tag) => `/categories/${tag.name}`)
}

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/google-adsense',
    '~/modules/sitemap',
  ],
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
  hooks: {
    async 'nitro:config'(nitroConfig) {
      if (nitroConfig.dev) {
        return;
      }
      // fetch the routes from our function above
      const slugs = await getDynamicTagRoots();
      // add the routes to the nitro config
      nitroConfig.prerender?.routes?.push(...slugs)
    },
  }
})
