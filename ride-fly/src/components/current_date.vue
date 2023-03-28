<script>
 export default {
  name: 'Date',
  props: {
    arr: {
    type: Date,
    default: function () { return new Date() }
  }
  }
}
</script>

<template>
    <header>
      <DocumentationIcon />
      <h1>25/1 Wednesday {{ Date }}</h1>
    </header>
  </template>