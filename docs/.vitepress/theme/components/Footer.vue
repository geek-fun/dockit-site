<template>
  <footer class="dockit-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>{{ t.products }}</h3>
          <ul>
            <li><a href="https://dockit.geekfun.club/">DocKit</a></li>
            <li><a href="https://serverlessinsight.com/" target="_blank">ServerlessInsight</a></li>
            <li><a href="https://github.com/geek-fun/jest-search" target="_blank">jest-search</a></li>
            <li><a href="https://github.com/geek-fun/serverless-adapter" target="_blank" class="no-wrap">serverless-adapter</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>{{ t.databases }}</h3>
          <ul>
            <li><a href="https://www.elastic.co/elasticsearch" target="_blank">Elasticsearch</a></li>
            <li><a href="https://opensearch.org/" target="_blank">OpenSearch</a></li>
            <li><a href="https://aws.amazon.com/dynamodb/" target="_blank">DynamoDB</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>{{ t.resources }}</h3>
          <ul>
            <li><a :href="localePath('/docs')">{{ t.docs }}</a></li>
            <li><a :href="localePath('/download')">{{ t.download }}</a></li>
            <li><a href="https://github.com/geek-fun/dockit" target="_blank">GitHub</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>{{ t.community }}</h3>
          <ul>
            <li><a href="https://github.com/geek-fun" target="_blank">{{ t.opensource }}</a></li>
            <li><a href="https://x.com/Blankll31075" target="_blank">Twitter</a></li>
            <li><a href="https://www.youtube.com/@geekfun-club" target="_blank">YouTube</a></li>
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
    products: 'Products',
    databases: 'Supported Databases',
    resources: 'Resources',
    community: 'Community',
    docs: 'Documentation',
    download: 'Download',
    opensource: 'Open Source',
    message: 'DocKit is an AI-native, open-source desktop GUI client for Elasticsearch, OpenSearch, and DynamoDB across Mac, Windows and Linux',
    copyright: 'Copyright © 2023-present <a href="https://github.com/geek-fun">geek-fun</a>'
  },
  zh: {
    products: '产品',
    databases: '支持的数据库',
    resources: '资源',
    community: '社区',
    docs: '文档',
    download: '下载',
    opensource: '开源',
    message: 'DocKit 是一款 AI 原生的开源图形化客户端，支持 Elasticsearch、OpenSearch 和 DynamoDB，适用于 Mac、Windows 和 Linux',
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
