---
title: Use DocKit GUI connect to Elasticsearch server
description: DocKit as a NoSQL GUI client, it supports multiple databases, including Elasticsearch, OpenSearch, and more to come. This document outlines how to connect to a database server using DocKit.
head:
  - - meta
    - name: keywords
      content: DocKit, Elasticsearch GUI client, connect Elasticsearch server, Elasticsearch connection guide, Elasticsearch management tool, Elasticsearch desktop client, Elasticsearch data management, Elasticsearch data analysis, Elasticsearch data visualization, Elasticsearch query tool, Elasticsearch cross-platform client, Elasticsearch open-source client, Elasticsearch Mac client, Elasticsearch Windows client, Elasticsearch Linux client, Elasticsearch AI-powered search, Elasticsearch multiple server support
---

# Use DocKit GUI connect to Elasticsearch server

DocKit as a NoSQL GUI client, it supports multiple databases, including [Elasticsearch](https://www.elastic.co),
OpenSearch, and more to come. This document outlines how to connect to a database server using DocKit.

## Install and Open DocKit

you can find detailed instructions on how to install and open DocKit in
the [installation guide](../docs/installation.md).

## Connect to Elasticsearch Server

After opening DocKit, click the `+ New connection` button to add a new connection, then you can input the Elasticsearch
server information, including the connection name, host, port, and authentication information.
![mac connect to Elasticsearch server](/mac-connect-to-server.png)

Notice:

1. the host requires a comprehensive domain include protocol `http` or `https`
2. if you try to connect to a self-signed Elasticsearch server, you can disable the certificate validation by unblock
   the :lock:

## Test connection

once all your input finish, simply click the `Test Connection` button to verify if DocKit can connect to the configured
Elasticsearch server

## Save Connection

Simply Click `Confirm` to save Connections so you can always access target Elasticsearch server with DocKit.
