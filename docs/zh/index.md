---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "DocKit"
  text: 一个开发者友好的 NoSQL/NewSQL GUI 客户端
  tagline: 轻松管理您的 ElasticSearch/OpenSearch 服务器，支持 Windows、macOS 和 Linux 平台
  image:
    src: dockit.png
    alt: DocKit logo
  actions:
    - theme: brand
      text: 下载
      link: /zh/download
    - theme: alt
      text: 文档
      link: /zh/docs

features:
  - title: 全功能编辑器
    details: DocKit的编辑器由 monaco-editor(vscode的编辑基础模块) 构建而来，提供了与vscode一致的编辑体验，为开发者提供熟悉的编辑环境
  - title: 持久化您的连接
    details: 在 DocKit 中保持您的 ElasticSearch/OpenSearch 服务器连，移除对仪表板工具如Kibana等的依赖
  - title: 查询DSL持久化
    details: 将您的 ElasticSearch/OpenSearch 查询保存为文件，永不丢失
  - title: 多引存储擎支持
    details: 支持 Elasticsearch、OpenSearch，更多引擎即将支持
---

<div align="center" style="padding: 64px;">
<p style="font-size: 20px;margin: 20px;font-weight: bolder;">客户端截图</p>
<img src="/client-ui.png" alt="客户端界面" style="width: 90%"/>
</div>
