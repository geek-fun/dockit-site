---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "DocKit"
  text: A better NoSQL/NewSQL GUI client
  tagline: Manage your ElasticSearch/OpenSearch servers with ease, support platforms across Windows, macOS, and Linux
  image:
    src: dockit.png
    alt: DocKit logo
  actions:
    - theme: brand
      text: Download
      link: /download
    - theme: alt
      text: docs
      link: /docs

features:
  - title: Full featured editor
    details: Powered by monaco-editor (the backbone of vscode), providing a familiar editing environment for developers.
  - title: Persist connections and query DSL
    details: DocKit can connect to multiple Elasticsearch/OpenSearch clusters simultaneously and persist query DSL to local files, preventing data loss.
  - title: Multi-engine support
    details: Supports Elasticsearch, OpenSearch, and more engines coming soon.
  - title: Cluster management and monitoring
    details: DocKit provides cluster management and monitoring features, helping you easily manage and monitor the health, nodes, shards, and indices of your Elasticsearch clusters.

---

<div align="center" style="padding: 64px;">
<p style="font-size: 20px;margin: 20px;font-weight: bolder;">Client Screen Short</p>
<img src="/client-ui.png" alt="Client UI" style="width: 90%"/>
</div>
