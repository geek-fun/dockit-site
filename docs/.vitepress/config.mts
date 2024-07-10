import {defineConfig} from 'vitepress'

const title = "DocKit - GUI Client for Elasticsearch/OpenSearch";
const description = "DocKit is an open-source Elasticsearch gui client, OpenSearch gui client for Mac, windows and Linux, 开源 Elasticsearch OpenSearch 桌面客户端";
const href = "/favicon.ico";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'DocKit',
  description,
  outDir: '../dist',
  cacheDir: '../cache',
  head: [
    ['link', {rel: 'icon', href}],
    ['meta', {name: 'description', content: description}],
    ['meta', {name: 'keywords', content: 'elasticsearch, gui, client, opensearch, dockit, mac, windows, linux'}],
    ['meta', {property: 'og:title', content: title}],
    ['meta', {property: 'og:description', content: description}],
    ['meta', {property: 'og:image', content: href}],
    ['meta', {property: 'og:url', content: 'URL of the page'}],
    ['meta', {property: 'og:site_name', content: 'Name of the site'}],
    ['meta', {name: 'twitter:card', content: href}],
    // ['meta', {name: 'twitter:site', content: '@twitterhandle'}],
    ['meta', {name: 'twitter:title', content: title}],
    ['meta', {name: 'twitter:description', content: description}],
    ['meta', {name: 'twitter:image', content: href}],
    ['meta', {name: 'google-site-verification', content: 'cGT6p1dMryzZJSDbCVk_u-BNKMMF75Y61nOqyaKSK5A'}],
    ['meta', {name: 'msvalidate.01', content: '56AE1305771756AAB07967736F936525'}],
  ],
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
          {text: 'Installation', link: '/docs/installation'},
          {text: 'Connect to Server', link: '/docs/connect-to-server'},
          {text: 'Shortcuts', link: '/docs/shortcut'},
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
      {icon: 'github', link: 'https://github.com/geek-fun/dockit'},
      // add x social links
      {icon: 'twitter', link: 'https://x.com/Blankll31075'},
    ],
    footer: {
  message: 'Dockit is an open-source desktop GUI client for Elasticsearch and OpenSearch across Mac, windows and Linux',
      copyright: 'Copyright © 2023-present <a href="https://github.com/geek-fun">geek-fun</a>'
    }
  },
  sitemap: {
    hostname: 'https://dockit.geekfun.club'
  }
})
