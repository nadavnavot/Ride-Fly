<template>
    <header class="flex-row-container">
      <h1> {{ title }}</h1>
      <svg></svg>
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
  }
}
  </script>

  <style scoped>
.flex-row-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}</style>