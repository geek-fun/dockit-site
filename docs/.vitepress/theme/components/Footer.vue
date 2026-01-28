<template>
  <footer class="dockit-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>{{ t.products }}</h3>
          <ul>
            <li><a :href="localePath('/dynamodb-gui')">{{ t.dynamodbGui }}</a></li>
            <li><a :href="localePath('/elasticsearch-gui')">{{ t.elasticsearchGui }}</a></li>
            <li><a :href="localePath('/opensearch-gui')">{{ t.opensearchGui }}</a></li>
            <li><a :href="localePath('/dynobase-alternative')">{{ t.dynobaseAlt }}</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>{{ t.features }}</h3>
          <ul>
            <li><a :href="localePath('/features/dynamodb-partiql')">{{ t.partiql }}</a></li>
            <li><a :href="localePath('/features/local-first')">{{ t.localFirst }}</a></li>
            <li><a :href="localePath('/features/desktop-client')">{{ t.desktopClient }}</a></li>
            <li><a :href="localePath('/features/open-source')">{{ t.opensource }}</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>{{ t.resources }}</h3>
          <ul>
            <li><a :href="localePath('/docs/installation')">{{ t.installation }}</a></li>
            <li><a :href="localePath('/docs/connect-to-server')">{{ t.connect }}</a></li>
            <li><a :href="localePath('/download')">{{ t.download }}</a></li>
            <li><a href="https://github.com/geek-fun/dockit" target="_blank">GitHub</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>{{ t.community }}</h3>
          <ul>
            <li><a href="https://x.com/Blankll31075" target="_blank">Twitter/X</a></li>
            <li><a href="https://www.youtube.com/@geekfun-club" target="_blank">YouTube</a></li>
            <li><a href="https://github.com/geek-fun/dockit/issues" target="_blank">{{ t.support }}</a></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="footer-message">{{ t.message }}</p>
        <p class="footer-copyright" v-html="t.copyright"></p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { lang } = useData()

const translations = {
  en: {
    products: 'Database Clients',
    features: 'Features',
    resources: 'Resources',
    community: 'Community',
    dynamodbGui: 'DynamoDB GUI Client',
    elasticsearchGui: 'Elasticsearch GUI Client',
    opensearchGui: 'OpenSearch GUI Client',
    dynobaseAlt: 'Dynobase Alternative',
    partiql: 'PartiQL Editor',
    localFirst: 'Local-First',
    desktopClient: 'Desktop Client',
    opensource: 'Open Source',
    installation: 'Installation Guide',
    connect: 'Connect to Database',
    download: 'Download',
    support: 'Support & Issues',
    message: 'Free open-source desktop GUI client for DynamoDB, Elasticsearch, and OpenSearch. Features JSON5 syntax, inline comments, AI assistant, and multi-cluster management. Available for Mac, Windows, and Linux.',
    copyright: 'Copyright © 2023-present <a href="https://github.com/geek-fun">geek-fun</a>'
  },
  zh: {
    products: '数据库客户端',
    features: '功能特性',
    resources: '资源',
    community: '社区',
    dynamodbGui: 'DynamoDB GUI 客户端',
    elasticsearchGui: 'Elasticsearch GUI 客户端',
    opensearchGui: 'OpenSearch GUI 客户端',
    dynobaseAlt: 'Dynobase 替代方案',
    partiql: 'PartiQL 编辑器',
    localFirst: '本地优先',
    desktopClient: '桌面客户端',
    opensource: '开源',
    installation: '安装指南',
    connect: '连接数据库',
    download: '下载',
    support: '支持与问题',
    message: '免费开源的 DynamoDB、Elasticsearch 和 OpenSearch 桌面 GUI 客户端。支持 JSON5 语法、行内注释、AI 助手和多集群管理。适用于 Mac、Windows 和 Linux。',
    copyright: 'Copyright © 2023-present <a href="https://github.com/geek-fun">极客范</a>'
  }
}

const t = computed(() => {
  return translations[lang.value as keyof typeof translations] || translations.en
})

const localePath = (path: string) => {
  return lang.value === 'zh' ? `/zh${path}` : path
}
</script>

<style scoped lang="scss">
.dockit-footer {
  background-color: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
  padding: 48px 24px 24px;
  margin-top: 64px;

  .container {
    max-width: 1152px;
    margin: 0 auto;
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 48px;
    margin-bottom: 48px;
  }

  .footer-section {
    h3 {
      font-size: 16px;
      font-weight: 600;
      margin: 0 0 16px 0;
      color: var(--vp-c-text-1);
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 12px;

        a {
          color: var(--vp-c-text-2);
          text-decoration: none;
          transition: color 0.2s;

          &:hover {
            color: var(--vp-c-brand-1);
          }

          &.no-wrap {
            white-space: nowrap;
          }
        }
      }
    }
  }

  .footer-bottom {
    border-top: 1px solid var(--vp-c-divider);
    padding-top: 24px;
    text-align: center;

    .footer-message {
      color: var(--vp-c-text-2);
      font-size: 14px;
      margin: 0 0 12px 0;
      line-height: 1.6;
    }

    .footer-copyright {
      color: var(--vp-c-text-3);
      font-size: 14px;
      margin: 0;

      :deep(a) {
        color: var(--vp-c-text-3);
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
          color: var(--vp-c-brand-1);
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .dockit-footer {
    .footer-content {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  }
}
</style>
