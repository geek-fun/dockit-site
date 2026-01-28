import {defineConfig} from 'vitepress'

const title = "DocKit – Open-Source NoSQL GUI Client";
const titleZh = "DocKit - 开源 NoSQL GUI 客户端";
const desc = "DocKit is an open-source desktop GUI client for DynamoDB, OpenSearch, and Elasticsearch. A fast, secure Dynobase alternative for developers on Mac, Windows, and Linux.";
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
          content: 'DynamoDB GUI, Elasticsearch GUI, OpenSearch GUI, DynamoDB client, Elasticsearch client, OpenSearch client, Dynobase alternative, Kibana alternative, DynamoDB desktop client, Elasticsearch desktop client, OpenSearch desktop client, PartiQL editor, NoSQL GUI client, DynamoDB management tool, Elasticsearch management tool, open-source database client, free DynamoDB client, AI database assistant, JSON5 support, DynamoDB data visualization, Elasticsearch data visualization, cross-platform database tool, Mac database client, Windows database client, Linux database client'
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
          {text: 'DynamoDB GUI', link: '/dynamodb-gui'},
          {text: 'Elasticsearch GUI', link: '/elasticsearch-gui'},
          {text: 'OpenSearch GUI', link: '/opensearch-gui'},
          {text: 'Dynobase Alternative', link: '/dynobase-alternative'},
          {text: 'Docs', link: '/docs'},
          {text: 'Download', link: '/download'}
        ],
        sidebar: [
          {
            text: 'Products',
            items: [
              {text: 'DynamoDB GUI Client', link: '/dynamodb-gui'},
              {text: 'Dynobase Alternative', link: '/dynobase-alternative'},
              {text: 'Elasticsearch GUI Client', link: '/elasticsearch-gui'},
              {text: 'OpenSearch GUI Client', link: '/opensearch-gui'},
            ]
          },
          {
            text: 'Features',
            items: [
              {text: 'DynamoDB PartiQL Editor', link: '/features/dynamodb-partiql'},
              {text: 'Local-First Architecture', link: '/features/local-first'},
              {text: 'Desktop Client Benefits', link: '/features/desktop-client'},
              {text: 'Open Source Philosophy', link: '/features/open-source'},
            ]
          },
          {
            text: 'Blog',
            items: [
              {text: 'Best DynamoDB GUI Clients', link: '/blog/best-dynamodb-gui-client'},
              {text: 'Query DynamoDB Locally', link: '/blog/query-dynamodb-locally'},
            ]
          },
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
          content: 'Elasticsearch 客户端, OpenSearch 客户端, DynamoDB 客户端, Elasticsearch GUI, OpenSearch GUI, DynamoDB GUI, NoSQL 图形化客户端, Elasticsearch 桌面客户端, OpenSearch 桌面客户端, DynamoDB 桌面客户端, PartiQL 编辑器, AI 数据库助手, Elasticsearch 管理工具, DynamoDB 管理工具, Elasticsearch 数据可视化, DynamoDB 数据可视化, 开源数据库客户端, JSON5 支持, 跨平台客户端, Mac 数据库客户端, Windows 数据库客户端, Linux 数据库客户端, 多数据库支持'
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
            text: '产品',
            items: [
              {text: 'DynamoDB GUI 客户端', link: '/zh/dynamodb-gui'},
              {text: 'Dynobase 替代方案', link: '/zh/dynobase-alternative'},
              {text: 'Elasticsearch GUI 客户端', link: '/zh/elasticsearch-gui'},
              {text: 'OpenSearch GUI 客户端', link: '/zh/opensearch-gui'},
            ]
          },
          {
            text: '功能特性',
            items: [
              {text: 'DynamoDB PartiQL 编辑器', link: '/zh/features/dynamodb-partiql'},
              {text: '本地优先架构', link: '/zh/features/local-first'},
              {text: '桌面客户端优势', link: '/zh/features/desktop-client'},
              {text: '开源理念', link: '/zh/features/open-source'},
            ]
          },
          {
            text: '博客',
            items: [
              {text: '最佳 DynamoDB GUI 客户端', link: '/zh/blog/best-dynamodb-gui-client'},
              {text: '本地查询 DynamoDB', link: '/zh/blog/query-dynamodb-locally'},
            ]
          },
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
