<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <img class="logo" src="./assets/logo.png" width="125" height="125" />
  </header>
  <router-view>
  </router-view>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

</style>

