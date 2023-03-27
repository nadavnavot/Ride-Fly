<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="125" height="125" />  
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/MyRides">My rides</RouterLink>
        <RouterLink to="/Flights">Flights</RouterLink>
        <RouterLink to="/Chat">Chat</RouterLink>
      </nav>
  </header>

</template>

<style scoped>

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 18px;
  bottom:0;
  left: 0;
  text-align: center;
position: fixed;
background-color: gray;
padding-bottom: 10px;
}


nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display:inline-block;
  padding: 20px;
}


</style>
