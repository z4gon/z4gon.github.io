import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
  site: 'https://z4gon.github.io',
  integrations: [
    preact({
      // render React components
      compat: true,
    }),
  ],
  markdown: {
    // code syntax highlighting
    shikiConfig: {
      theme: 'one-dark-pro',
    },
  },
})
