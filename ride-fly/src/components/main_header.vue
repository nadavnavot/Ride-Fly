<template>
    <header class="header">
      <h1> {{ title }}</h1>
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
.header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}</style>