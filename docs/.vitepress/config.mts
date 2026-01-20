import {defineConfig} from 'vitepress'

const title = "DocKit - AI Native NoSQL GUI Client";
const titleZh = "DocKit - AI 原生 NoSQL GUI 客户端";
const desc = "DocKit is an AI-native, open-source NoSQL GUI client for Elasticsearch, OpenSearch, and DynamoDB. Built-in AI assistant helps you write queries, analyze data, and troubleshoot issues. Available for Mac, Windows, and Linux with intelligent database management.";
const descZh = "DocKit 是一款 AI 原生的开源 NoSQL 图形化客户端，支持 Elasticsearch、OpenSearch 和 DynamoDB。内置 AI 助手帮助您编写查询、分析数据和解决问题。适用于 Mac、Windows 和 Linux，提供智能化数据库管理。";
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
          content: 'DocKit, AI Native database client, AI-powered database management, NoSQL GUI client, Elasticsearch GUI client, OpenSearch GUI client, DynamoDB GUI client, AI database assistant, LLM database tool, intelligent query builder, AI query optimization, Elasticsearch desktop client, OpenSearch desktop client, DynamoDB desktop client, Elasticsearch management tool, DynamoDB management tool, PartiQL editor, Elasticsearch data visualization, DynamoDB data visualization, NoSQL database management, cross-platform client, open-source database client, Mac database client, Windows database client, Linux database client, multi-database support'
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
        ]
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
          content: 'DocKit, AI 原生数据库客户端, AI 驱动数据库管理, NoSQL 图形化客户端, Elasticsearch 图形化客户端, OpenSearch 图形化客户端, DynamoDB 图形化客户端, AI 数据库助手, 大语言模型数据库工具, 智能查询构建器, AI 查询优化, Elasticsearch 桌面客户端, OpenSearch 桌面客户端, DynamoDB 桌面客户端, Elasticsearch 管理工具, DynamoDB 管理工具, PartiQL 编辑器, Elasticsearch 数据可视化, DynamoDB 数据可视化, NoSQL 数据库管理, 跨平台客户端, 开源数据库客户端, Mac 数据库客户端, Windows 数据库客户端, Linux 数据库客户端, 多数据库支持'
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
        ]
      }
    },
  },
  sitemap: {
    hostname: 'https://dockit.geekfun.club'
  }
})
