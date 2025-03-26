import {defineConfig} from 'vitepress'

const title = "DocKit - Elasticsearch GUI Client";
const titleZh = "DocKit - Elasticsearch 图形化客户端";
const desc = "DocKit is an open-source Elasticsearch GUI client and OpenSearch GUI client for Mac, Windows, and Linux. Manage and analyze your Elasticsearch and OpenSearch data with ease using DocKit's user-friendly interface, advanced search capabilities, and cross-platform support.";
const descZh = "DocKit 是一款开源的 Elasticsearch 图形化客户端和 OpenSearch 图形化客户端，支持 Mac、Windows 和 Linux。使用 DocKit 的用户友好界面、高级搜索功能和跨平台支持，轻松管理和分析您的 Elasticsearch 和 OpenSearch 数据。";
const href = "/favicon.ico";

const sharedThemeConfig = {
  search: {
    provider: 'local'
  },
  logo: href,
  socialLinks: [
    {icon: 'github', link: 'https://github.com/geek-fun/dockit'},
    // add x social links
    {icon: 'twitter', link: 'https://x.com/Blankll31075'},
    {icon: 'youtube', link: 'https://www.youtube.com/@geekfun-club'}
  ],
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  outDir: '../dist',
  cacheDir: '../cache',
  locales: {
    root: {
      label: 'English',
      title: title,
      lang: 'en',
      description: desc,
      head: [
        ['link', {rel: 'icon', href}],
        ['meta', {name: 'description', content: desc}],
        ['meta', {
          name: 'keywords',
          content: 'Elasticsearch GUI client, Elasticsearch desktop client, Elasticsearch management tool, OpenSearch GUI client, OpenSearch desktop client, DocKit, Elasticsearch data visualization, Elasticsearch data analysis, Elasticsearch data management, Elasticsearch query tool, Elasticsearch cross-platform client, Elasticsearch open-source client, Elasticsearch Mac client, Elasticsearch Windows client, Elasticsearch Linux client, Elasticsearch AI-powered search, Elasticsearch multiple server support'
        }], ['meta', {property: 'og:title', content: title}],
        ['meta', {property: 'og:description', content: desc}],
        ['meta', {property: 'og:image', content: href}],
        ['meta', {property: 'og:url', content: '/'}],
        ['meta', {property: 'og:site_name', content: title}],
        ['meta', {name: 'twitter:card', content: href}],
        ['meta', {name: 'twitter:title', content: title}],
        ['meta', {name: 'twitter:description', content: desc}],
        ['meta', {name: 'twitter:image', content: href}],
        ['meta', {name: 'google-site-verification', content: 'cGT6p1dMryzZJSDbCVk_u-BNKMMF75Y61nOqyaKSK5A'}],
        ['meta', {name: 'msvalidate.01', content: '56AE1305771756AAB07967736F936525'}],
        ['meta', {name: 'baidu-site-verification', content: 'codeva-xcKIdIQgET'}],
      ],
      themeConfig: {
        ...sharedThemeConfig,
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
        footer: {
          message: 'Dockit is an open-source desktop GUI client for Elasticsearch and OpenSearch across Mac, windows and Linux',
          copyright: 'Copyright © 2023-present <a href="https://github.com/geek-fun">geek-fun</a>'
        }
      }
    },
    zh: {
      label: "简体中文",
      lang: 'zh',
      title: titleZh,
      description: descZh,
      head: [
        ['link', {rel: 'icon', href}],
        ['meta', {name: 'description', content: descZh}],
        ['meta', {
          name: 'keywords',
          content: 'Elasticsearch 图形化客户端, Elasticsearch 桌面客户端, Elasticsearch 管理工具, OpenSearch 图形化客户端, OpenSearch 桌面客户端, DocKit, Elasticsearch 数据可视化, Elasticsearch 数据分析, Elasticsearch 数据管理, Elasticsearch 查询工具, Elasticsearch 跨平台客户端, Elasticsearch 开源客户端, Elasticsearch Mac 客户端, Elasticsearch Windows 客户端, Elasticsearch Linux 客户端, Elasticsearch AI 驱动搜索, Elasticsearch 多服务器支持'
        }],
        ['meta', {property: 'og:title', content: titleZh}],
        ['meta', {property: 'og:description', content: descZh}],
        ['meta', {property: 'og:image', content: href}],
        ['meta', {property: 'og:url', content: '/'}],
        ['meta', {property: 'og:site_name', content: titleZh}],
        ['meta', {name: 'twitter:card', content: href}],
        ['meta', {name: 'twitter:title', content: titleZh}],
        ['meta', {name: 'twitter:description', content: descZh}],
        ['meta', {name: 'twitter:image', content: href}],
        ['meta', {name: 'baidu-site-verification', content: 'codeva-owQvVYl3h3'}],
        ['meta', {name: 'msvalidate.01', content: '56AE1305771756AAB07967736F936525'}],
      ],
      themeConfig: {
        ...sharedThemeConfig,
        title: titleZh,
        nav: [
          {text: '首页', link: '/zh'},
          {text: '文档', link: '/zh/docs'},
          {text: '博客', link: '/zh/blog'},
          {text: '下载', link: '/zh/download'}
        ],
        sidebar: [
          {
            text: '文档',
            items: [
              {text: '安装', link: '/zh/docs/installation'},
              {text: '连接服务器', link: '/zh/docs/connect-to-server'},
              {text: '快捷键', link: '/zh/docs/shortcut'},
              {text: '集群管理与监控', link: '/zh/docs/manage-elasticsearch-cluster'},
            ]
          },
          {
            text: '下载',
            items: [
              {text: '下载', link: '/zh/download'},
            ]
          }
        ],
        footer:  {
          message: 'Dockit 是一款开源的 Elasticsearch 和 OpenSearch 图形化客户端，支持 Mac、Windows 和 Linux',
          copyright: 'Copyright © 2023-present <a href="https://github.com/geek-fun">极客范</a>'
        }
      }
    },
  },
  sitemap: {
    hostname: 'https://dockit.geekfun.club'
  }
})
