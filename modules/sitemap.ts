import { writeFile } from 'node:fs/promises'
import { gzipSync } from 'node:zlib'
import { defineNuxtModule, useNuxt } from '@nuxt/kit'
import { join } from 'pathe'
import type {TagType} from '~/models/tags'


export const getAllTags = async (): Promise<TagType[]> => {
  const headers = {
    'Content-Type': 'application/json',
  };
  const res = await fetch(
      `https://backend.tecklinker.com/api/v1/tag`,
      { method: "GET", headers: headers}
  )
  const data: TagType[] = await res.json()
  return data
};

export default defineNuxtModule({
  meta: {
    name: 'sitemap',
  },
  setup() {
    const nuxt = useNuxt()
    nuxt.hook('nitro:init', nitro => {
      nitro.hooks.hook('close', async () => {

        const routes = nitro._prerenderedRoutes
            ?.filter(r => r.fileName?.endsWith('.html'))
            .map(r => r.route)
        if (!routes?.length) return
        const tags = await getAllTags()
        const timestamp = new Date().toISOString()
        const sitemap = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...routes.map(
              route =>`<url><loc>https://www.tecklinker.com${route}</loc><lastmod>${timestamp}</lastmod></url>`
          ),
          ...tags.map(
              (tag) =>`<url><loc>https://www.tecklinker.com/categories/${tag.name}</loc><lastmod>${timestamp}</lastmod></url>`
          ),
          `</urlset>`,
        ].join('')
        const dir = nitro.options.output.publicDir
        await writeFile(join(dir, 'sitemap.xml'), sitemap)
        await writeFile(join(dir, 'sitemap.xml.gz'), gzipSync(sitemap))
      })
    })
  },
})
