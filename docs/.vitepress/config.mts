import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DocKit",
  description: "Explore your data any time from your laptop",
  outDir: '../dist',
  cacheDir: '../cache',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs' },
      { text: 'Download', link: '/download' }
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'document', link: '/docs' },
        ]
      },
      {
        text: 'Download',
        items: [
          { text: 'mac', link: '/markdown-examples' },
          { text: 'linux', link: '/api-examples' },
          { text: 'windows', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/geek-fun/dockit' }
    ]
  }
})
