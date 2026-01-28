---
title: OpenSearch GUI 客户端 - 适用于 Mac、Windows、Linux 的免费桌面工具
description: DocKit 是一个免费的开源 OpenSearch GUI 客户端，具有可视化查询构建器、Dev Tools 替代方案以及用于 Mac、Windows、Linux 的集群管理功能。
sidebar: false
---

# OpenSearch GUI 客户端 - 免费桌面工具

DocKit 是一个**免费的开源 OpenSearch GUI 客户端**，专为需要快速、可靠的桌面替代方案的开发者和 DevOps 团队设计，替代 OpenSearch Dashboards 和基于浏览器的工具。

## 为什么使用 OpenSearch 桌面客户端？

OpenSearch Dashboards（Web UI）在许多任务中表现良好，但专用的桌面客户端提供了几个优势：

### 🚀 性能优势
- **更快的启动**：无浏览器开销或容器启动时间
- **更低的内存使用**：原生应用 vs. 浏览器标签
- **离线查询构建**：无需连接即可编写和测试查询
- **更好的响应性**：直接 API 调用，无代理层

### 💾 持久工作空间
- **保存的查询**：自动在本地持久化所有查询
- **查询历史**：关闭标签时永不丢失工作
- **多个连接**：在开发/暂存/生产之间即时切换
- **项目组织**：按项目文件夹组织查询

### 🔒 安全与隐私
- **本地执行**：所有查询直接从您的机器运行
- **凭证管理**：连接配置的安全存储
- **无云依赖**：完全离线工作
- **审计控制**：完全了解工具的功能

## DocKit OpenSearch 客户端的主要功能

### 📊 可视化查询构建器
通过直观的 UI 构建 OpenSearch 查询：

```json
{
  "query": {
    "bool": {
      "must": [
        {"match": {"status": "active"}},
        {"range": {"price": {"gte": 100, "lte": 500}}}
      ]
    }
  }
}
```

**功能：**
- 拖放查询构建
- 实时查询预览
- 类型感知字段建议
- 支持复杂的布尔逻辑

### 🛠️ Dev Tools 编辑器
由 Monaco（VS Code 引擎）驱动的全功能编辑器：

```json
GET /logs-*/_search
{
  "query": {
    "range": {
      "@timestamp": {
        "gte": "now-24h",
        "lte": "now"
      }
    }
  },
  "aggs": {
    "errors_over_time": {
      "date_histogram": {
        "field": "@timestamp",
        "interval": "1h"
      }
    }
  }
}
```

**编辑器功能：**
- JSON 语法高亮
- OpenSearch API 自动补全
- 多光标编辑
- 查询格式化和验证
- 键盘快捷键（Cmd/Ctrl + Enter）

### 🗂️ 索引和集群管理
全面的管理功能：

- **索引操作**：创建、删除、关闭、打开索引
- **映射管理**：查看和修改字段映射
- **别名控制**：管理索引别名
- **模板管理**：索引和组件模板
- **集群设置**：查看和修改集群配置

### 📈 集群监控
实时集群健康和性能：

- **节点信息**：CPU、内存、磁盘指标
- **分片分配**：主分片和副本分片状态
- **索引统计**：文档数、大小、查询性能
- **健康仪表板**：集群状态概览

### 💾 数据操作
轻松的数据管理：

- **批量导入**：从 JSON/CSV 文件上传
- **导出结果**：保存查询结果为多种格式
- **文档 CRUD**：创建、读取、更新、删除文档
- **重新索引**：跨索引或集群移动数据

## OpenSearch vs Elasticsearch 支持

DocKit 同时支持 OpenSearch 和 Elasticsearch：

| 功能 | OpenSearch | Elasticsearch |
|---------|-----------|---------------|
| **查询 DSL** | ✅ | ✅ |
| **聚合** | ✅ | ✅ |
| **索引管理** | ✅ | ✅ |
| **集群监控** | ✅ | ✅ |
| **特定于版本的 API** | ✅ 自动检测 | ✅ 自动检测 |

**无缝切换：** 同一工具管理 OpenSearch 和 Elasticsearch 集群。

## OpenSearch GUI 对比

| 功能 | DocKit | OpenSearch Dashboards | 浏览器工具 |
|---------|--------|----------------------|---------------|
| **价格** | 免费 | 免费 | 免费 |
| **平台** | 桌面 | Web | 浏览器 |
| **启动时间** | < 2秒 | 10-30秒 | 取决于主机 |
| **内存使用** | 100-200 MB | 500+ MB | 200-400 MB |
| **离线模式** | ✅ | ❌ | ❌ |
| **查询持久化** | ✅ 文件 | ⚠️ 保存的对象 | ❌ |
| **多集群** | ✅ | ✅ | ✅ |
| **数据可视化** | ⚠️ 基础 | ✅ 高级 | ❌ |

**推荐：** 将 DocKit 用于开发和集群管理，OpenSearch Dashboards 用于业务仪表板和可视化。

## 用例

### 应用程序开发
- 构建和测试搜索查询
- 索引开发数据
- 调试查询性能
- 本地 OpenSearch 开发

### DevOps 和 SRE
- 监控集群健康
- 管理索引生命周期
- 故障排除生产问题
- 跨环境查询日志

### 数据工程
- 批量数据导入
- 索引重新映射
- 聚合管道测试
- 数据质量验证

## AWS OpenSearch Service 支持

DocKit 与 AWS OpenSearch Service 完美配合：

1. **身份验证**：AWS IAM 凭证或主用户名/密码
2. **端点**：使用您的 AWS OpenSearch 域端点
3. **功能**：所有 DocKit 功能均可用
4. **成本**：无需为 OpenSearch Dashboards 支付费用（如果不使用）

## 开始使用

### 1. 安装 DocKit
从 [dockit.geekfun.club/download](/zh/download) 下载

### 2. 连接到 OpenSearch
- 本地 OpenSearch（http://localhost:9200）
- AWS OpenSearch Service
- 自托管集群（带身份验证）

### 3. 运行您的第一个查询
```json
GET /_cluster/health
```

### 4. 探索功能
- 使用 Dev Tools 编辑器
- 检查集群健康
- 浏览索引和映射

## 常见问题

### DocKit 支持哪些 OpenSearch 版本？

DocKit 支持 OpenSearch 1.x 和 2.x。它自动检测您的版本并调整 API 调用。

### 我可以同时管理 OpenSearch 和 Elasticsearch 吗？

是的！DocKit 在同一应用程序中支持两者。在连接配置中创建单独的连接。

### DocKit 与 AWS OpenSearch Service 配合使用吗？

是的。使用您的 AWS 端点、区域和 IAM 凭证或主用户名/密码。

### 我的查询存储在哪里？

查询作为纯文本 JSON 文件保存在您的机器本地。您可以选择目录并通过 Git 同步。

## 其他资源

- **[安装指南](/zh/docs/installation)** - 分步设置
- **[连接到服务器](/zh/docs/connect-to-server)** - 配置详情
- **[桌面客户端优势](/zh/features/desktop-client)** - 原生应用优势
- **[开源 GUI](/zh/features/open-source)** - 为什么开源很重要
- **[GitHub 存储库](https://github.com/geek-fun/dockit)** - 源代码和问题

## 立即试用 DocKit

体验更快、更灵活的管理 OpenSearch 的方式。下载 DocKit，看看为什么开发者选择原生桌面客户端而不是基于浏览器的工具。

[立即下载 DocKit](/zh/download) — 免费、开源、随时可用。
