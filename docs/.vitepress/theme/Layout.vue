<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import Footer from './components/Footer.vue'
</script>

<template>
  <DefaultTheme.Layout>
    <template #layout-bottom>
      <Footer />
    </template>
  </DefaultTheme.Layout>
</template>
