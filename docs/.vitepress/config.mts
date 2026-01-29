import {defineConfig} from 'vitepress'
import {readFileSync, writeFileSync} from 'fs'
import {resolve} from 'path'

const title = "DocKit – Open-Source NoSQL GUI Client";
const titleZh = "DocKit - 开源 NoSQL GUI 客户端";
const desc = "DocKit is an open-source desktop GUI client for DynamoDB, OpenSearch, and Elasticsearch. A fast, secure Dynobase alternative for developers on Mac, Windows, and Linux.";
const descZh = "DocKit 是一款 AI 原生的开源 NoSQL 图形化客户端，支持 Elasticsearch、OpenSearch 和 DynamoDB。内置 AI 助手帮助您编写查询、分析数据和解决问题。适用于 Mac、Windows 和 Linux，提供智能化数据库管理。";
const href = "/favicon.ico";

const sharedThemeConfig = {
  search: {
    provider: 'local' as const
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
    hostname: 'https://dockit.geekfun.club',
    transformItems: (items) => {
      return items.map((item) => {
        const url = item.url
        
        // Highest priority: main landing pages
        if (url.includes('/dynamodb-gui') || 
            url.includes('/elasticsearch-gui') || 
            url.includes('/opensearch-gui') || 
            url.includes('/dynobase-alternative')) {
          return {
            ...item,
            changefreq: 'weekly',
            priority: 0.9
          }
        }
        
        // High priority: homepage and download
        if (url.endsWith('/') || url.includes('/download')) {
          return {
            ...item,
            changefreq: 'weekly',
            priority: 1.0
          }
        }
        
        // Medium-high priority: features and docs
        if (url.includes('/features/') || url.includes('/docs/')) {
          return {
            ...item,
            changefreq: 'monthly',
            priority: 0.7
          }
        }
        
        // Blog posts - medium priority
        if (url.includes('/blog/')) {
          return {
            ...item,
            changefreq: 'monthly',
            priority: 0.6
          }
        }
        
        // Default for other pages
        return {
          ...item,
          changefreq: 'monthly',
          priority: 0.5
        }
      })
    }
  },
  buildEnd: async ({ outDir }) => {
    // Wait for sitemap generation to complete
    await new Promise(resolve => setTimeout(resolve, 100))
    
    const sitemapPath = resolve(outDir, 'sitemap.xml')
    try {
      const sitemap = readFileSync(sitemapPath, 'utf-8')
      
      // Parse and restructure sitemap for SEO best practices
      const urlRegex = /<url>[\s\S]*?<\/url>/g
      const urls = sitemap.match(urlRegex) || []
      
      // Group URLs by base path (English version is the canonical)
      const urlGroups = new Map<string, {
        en: any,
        zh: any | null
      }>()
      
      urls.forEach(urlBlock => {
        const locMatch = urlBlock.match(/<loc>(.*?)<\/loc>/)
        const lastmodMatch = urlBlock.match(/<lastmod>(.*?)<\/lastmod>/)
        const changefreqMatch = urlBlock.match(/<changefreq>(.*?)<\/changefreq>/)
        const priorityMatch = urlBlock.match(/<priority>(.*?)<\/priority>/)
        
        if (!locMatch) return
        
        const url = locMatch[1]
        const isZh = url.includes('/zh/')
        const basePath = url.replace('/zh/', '/').replace(/^https:\/\/[^\/]+/, '')
        
        if (!urlGroups.has(basePath)) {
          urlGroups.set(basePath, { en: null, zh: null })
        }
        
        const data = {
          url,
          lastmod: lastmodMatch?.[1],
          changefreq: changefreqMatch?.[1],
          priority: priorityMatch?.[1]
        }
        
        const group = urlGroups.get(basePath)!
        if (isZh) {
          group.zh = data
        } else {
          group.en = data
        }
      })
      
      // Build optimized sitemap structure
      let newSitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
      newSitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n'
      newSitemap += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
      
      urlGroups.forEach((group, basePath) => {
        const enUrl = group.en?.url || `https://dockit.geekfun.club${basePath}`
        const zhUrl = group.zh?.url || `https://dockit.geekfun.club/zh${basePath}`
        
        // Use highest priority from either language version
        const priority = group.en?.priority || group.zh?.priority || '0.5'
        const changefreq = group.en?.changefreq || group.zh?.changefreq || 'monthly'
        const lastmod = group.en?.lastmod || group.zh?.lastmod
        
        // Normalize priority: use same priority for both language versions
        let normalizedPriority = priority
        if (basePath === '/' || basePath.includes('/download')) {
          normalizedPriority = '1.0'
        } else if (basePath.includes('/dynamodb-gui') || 
                   basePath.includes('/elasticsearch-gui') || 
                   basePath.includes('/opensearch-gui') || 
                   basePath.includes('/dynobase-alternative')) {
          normalizedPriority = '0.9'
        } else if (basePath.includes('/features/') || basePath.includes('/docs/')) {
          normalizedPriority = '0.7'
        } else if (basePath.includes('/blog/')) {
          normalizedPriority = '0.6'
        }
        
        newSitemap += '  <url>\n'
        newSitemap += `    <loc>${enUrl}</loc>\n`
        
        // Add hreflang alternates
        newSitemap += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>\n`
        if (group.zh) {
          newSitemap += `    <xhtml:link rel="alternate" hreflang="zh" href="${zhUrl}"/>\n`
        }
        newSitemap += `    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>\n`
        
        if (lastmod) {
          newSitemap += `    <lastmod>${lastmod}</lastmod>\n`
        }
        newSitemap += `    <changefreq>${changefreq}</changefreq>\n`
        newSitemap += `    <priority>${normalizedPriority}</priority>\n`
        newSitemap += '  </url>\n'
      })
      
      newSitemap += '</urlset>\n'
      
      writeFileSync(sitemapPath, newSitemap, 'utf-8')
      console.log('✓ Sitemap optimized for SEO best practices')
    } catch (error) {
      console.warn('Warning: Could not optimize sitemap:', error instanceof Error ? error.message : String(error))
    }
  }
})
