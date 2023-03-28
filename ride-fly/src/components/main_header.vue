<script setup>
import DocumentationIcon from './icons/IconDocumentation.vue'
</script>

<template>
    <header>
      <h1>{{ title }}</h1>
      <DocumentationIcon />
    </header>
  </template>
  
  <script>
  export default {
  name: 'title',
  props: {
    title: {
      type: String,
      required: true
    }
    ,
    iconUrl: {
      type: String,
      required: true
    }
  }
}
  </script>