import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DocKit",
  description: "Explore your data any time from your laptop",
  outDir: '../dist',
  cacheDir: '../cache',
  head: [['link', {rel: 'icon', href: '/favicon.ico'}]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.ico',
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Docs', link: '/docs'},
      {text: 'Download', link: '/download'}
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          {text: 'document', link: '/docs'},
        ]
      },
      {
        text: 'Download',
        items: [
          {text: 'Download', link: '/download'},
        ]
      }
    ],

    socialLinks: [
      {icon: 'github', link: 'https://github.com/geek-fun/dockit'}
    ]
  }
})
