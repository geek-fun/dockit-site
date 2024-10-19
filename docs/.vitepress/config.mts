import {defineConfig} from 'vitepress'

const title = "DocKit - Elasticsearch GUI Client";
const description = "DocKit is an open-source Elasticsearch GUI client and OpenSearch GUI client for Mac, Windows, and Linux. Manage and analyze your Elasticsearch and OpenSearch data with ease using DocKit's user-friendly interface, advanced search capabilities, and cross-platform support.";
const href = "/favicon.ico";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title,
  description,
  outDir: '../dist',
  cacheDir: '../cache',
  head: [
    ['link', {rel: 'icon', href}],
    ['meta', {name: 'description', content: description}],
    ['meta', {
      name: 'keywords',
      content: 'Elasticsearch GUI client, Elasticsearch desktop client, Elasticsearch management tool, OpenSearch GUI client, OpenSearch desktop client, DocKit, Elasticsearch data visualization, Elasticsearch data analysis, Elasticsearch data management, Elasticsearch query tool, Elasticsearch cross-platform client, Elasticsearch open-source client, Elasticsearch Mac client, Elasticsearch Windows client, Elasticsearch Linux client, Elasticsearch AI-powered search, Elasticsearch multiple server support'
    }], ['meta', {property: 'og:title', content: title}],
    ['meta', {property: 'og:description', content: description}],
    ['meta', {property: 'og:image', content: href}],
    ['meta', {property: 'og:url', content: '/'}],
    ['meta', {property: 'og:site_name', content: title}],
    ['meta', {name: 'twitter:card', content: href}],
    ['meta', {name: 'twitter:title', content: title}],
    ['meta', {name: 'twitter:description', content: description}],
    ['meta', {name: 'twitter:image', content: href}],
    ['meta', {name: 'google-site-verification', content: 'cGT6p1dMryzZJSDbCVk_u-BNKMMF75Y61nOqyaKSK5A'}],
    ['meta', {name: 'msvalidate.01', content: '56AE1305771756AAB07967736F936525'}],
    ['meta', {name: 'baidu-site-verification', content: 'codeva-xcKIdIQgET'}],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.ico',
    siteTitle: 'DocKit',
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Docs', link: '/docs'},
      {text: 'Blog', link: '/blog'},
      {text: 'Download', link: '/download'}
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          {text: 'Installation', link: '/docs/installation'},
          {text: 'Connect to Server', link: '/docs/connect-to-server'},
          {text: 'Shortcuts', link: '/docs/shortcut'},
          {text: 'Manage and Monitor Cluster', link: '/docs/manage-elasticsearch-cluster'},
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
      {icon: 'youtube', link: 'https://www.youtube.com/@geekfun-club'}
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
