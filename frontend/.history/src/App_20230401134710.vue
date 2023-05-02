<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <img class="logo" src="@/assets/logo.png" width="125" height="125" />

  </header>
  <router-view></router-view>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 18px;
  bottom: 0;
  left: 0;
  text-align: center;
  position: fixed;
  background-color: #f8f8f8;

}


nav a.router-link-exact-active {
  /* color: var(--color-text); */
  fill: #166BC8;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 25px;
}
</style>

