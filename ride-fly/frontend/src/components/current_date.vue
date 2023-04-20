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
      <p>25/1 Wednesday</p>
  </template>