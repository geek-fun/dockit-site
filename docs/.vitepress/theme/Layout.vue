<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import Footer from './components/Footer.vue'
import { useData, useRoute } from 'vitepress'
import { onMounted, watch } from 'vue'

const { lang } = useData()
const route = useRoute()

// FAQ data for structured data
const faqData = {
  '/elasticsearch-gui': [
    {
      question: 'Does DocKit work with Elasticsearch 9.x?',
      answer: 'Yes! DocKit fully supports Elasticsearch 9.x, including API key authentication and the latest query DSL.'
    },
    {
      question: 'Is DocKit a Kibana replacement?',
      answer: 'For querying and index management, yes. For visualizations and dashboards, no. Many teams use both.'
    },
    {
      question: 'Can I export query results?',
      answer: 'DocKit provides a comprehensive Import/Export module where you can export data and schemas in multiple formats. This dedicated module offers more control and options than simple result exports.'
    },
    {
      question: 'Is DocKit safe for production clusters?',
      answer: 'Yes. DocKit uses official Elasticsearch client libraries and respects all cluster security settings. Always use read-only credentials for safety.'
    },
    {
      question: 'Where are connection credentials stored?',
      answer: 'Credentials are encrypted and stored locally on your machine. They never leave your device.'
    }
  ],
  '/opensearch-gui': [
    {
      question: 'Does DocKit work with AWS OpenSearch Service?',
      answer: 'Yes! DocKit fully supports AWS OpenSearch Service, including SigV4 authentication for AWS-managed clusters.'
    },
    {
      question: 'Is DocKit an OpenSearch Dashboards replacement?',
      answer: 'For querying and index management, yes. For visualizations and dashboards, no. Many teams use both tools depending on their needs.'
    },
    {
      question: 'Can I export query results?',
      answer: 'DocKit provides a comprehensive Import/Export module where you can export data and schemas in multiple formats. This dedicated module offers more control and options than simple result exports.'
    },
    {
      question: 'Does DocKit support OpenSearch 2.x and 3.x?',
      answer: 'Yes, DocKit supports OpenSearch versions from 1.x through 3.x using standard OpenSearch REST APIs.'
    },
    {
      question: 'Where are connection credentials stored?',
      answer: 'Credentials are encrypted and stored locally on your machine. They never leave your device.'
    },
    {
      question: 'Can I use DocKit with Elasticsearch too?',
      answer: 'Absolutely! DocKit supports both OpenSearch and Elasticsearch in the same client, allowing you to manage multiple cluster types from one tool.'
    }
  ],
  '/dynamodb-gui': [
    {
      question: 'Does DocKit support PartiQL queries?',
      answer: 'Yes! DocKit includes a full-featured PartiQL editor with syntax highlighting, autocomplete, and query history.'
    },
    {
      question: 'Can I use DocKit with DynamoDB Local?',
      answer: 'Yes. DocKit works seamlessly with both AWS DynamoDB and DynamoDB Local for offline development.'
    },
    {
      question: 'Is DocKit safe for production tables?',
      answer: 'Yes. DocKit uses official AWS SDK and respects all IAM permissions. Always follow AWS best practices for credential management.'
    },
    {
      question: 'Where are AWS credentials stored?',
      answer: 'Credentials are encrypted and stored locally on your machine using industry-standard encryption. They never leave your device or get sent to any third-party servers.'
    }
  ]
}

function addStructuredData() {
  // Remove existing structured data scripts
  document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove())
  
  // Add SoftwareApplication schema (always present)
  const softwareSchema = document.createElement('script')
  softwareSchema.type = 'application/ld+json'
  softwareSchema.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "DocKit",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": ["Windows", "macOS", "Linux"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    },
    "description": "DocKit is a free, open-source desktop GUI client for DynamoDB, OpenSearch, and Elasticsearch. Features include JSON5 support, PartiQL editor, visual query builder, and AI-powered assistant.",
    "downloadUrl": "https://dockit.geekfun.club/download",
    "softwareVersion": "latest",
    "author": {
      "@type": "Organization",
      "name": "GeekFun",
      "url": "https://github.com/geek-fun"
    },
    "keywords": "DynamoDB GUI, Elasticsearch GUI, OpenSearch GUI, database client, PartiQL editor, NoSQL client"
  })
  document.head.appendChild(softwareSchema)
  
  // Add FAQPage schema if current page has FAQs
  const currentPath = route.path.replace(/\.html$/, '')
  const faqs = faqData[currentPath]
  
  if (faqs) {
    const faqSchema = document.createElement('script')
    faqSchema.type = 'application/ld+json'
    faqSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    })
    document.head.appendChild(faqSchema)
  }
}

onMounted(() => {
  addStructuredData()
})

// Re-add structured data when route changes
watch(() => route.path, () => {
  addStructuredData()
})
</script>

<template>
  <DefaultTheme.Layout>
    <template #layout-bottom>
      <Footer />
    </template>
  </DefaultTheme.Layout>
</template>
