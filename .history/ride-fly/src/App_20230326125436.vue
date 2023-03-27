<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="125" height="125" />  

      <nav>
        <RouterLink to="/"><svg id="Home" xmlns="http://www.w3.org/2000/svg" width="28.245" height="27.066" viewBox="0 0 28.245 27.066">
  <path id="Path_62" data-name="Path 62" d="M23.879-501.6c-.155.04-13.773,10.686-13.854,10.824a.631.631,0,0,0,.092.735.5.5,0,0,0,.425.167c.224,0,.316-.04.683-.321l.419-.316.029,7.765c.023,6.318.04,7.788.1,7.9.178.316-.494.3,12.293.3s12.115.017,12.293-.3c.063-.109.08-1.578.1-7.9l.029-7.765.419.316c.367.281.459.321.683.321a.591.591,0,0,0,.534-.872c-.034-.075-1.09-.935-2.353-1.911l-2.29-1.779v-2.141l-.006-2.135H29.922v.717a4.326,4.326,0,0,1-.029.717c-.017,0-1.2-.913-2.628-2.026s-2.669-2.083-2.766-2.152A.8.8,0,0,0,23.879-501.6Zm5.779,5.75,5.544,4.321v15.713h-7v-11.134H19.937v11.134h-7v-15.713l5.555-4.333c3.053-2.387,5.567-4.333,5.59-4.327S26.611-498.227,29.658-495.845Zm2.617-.62a5.755,5.755,0,0,1-.046,1.016c-.023-.011-.281-.2-.574-.419l-.522-.4-.006-.62v-.614h1.148ZM27-480.775v4.964H21.142v-9.928H27Z" transform="translate(-9.948 501.614)"/>
</svg></RouterLink>
        <RouterLink to="/MyRides">My rides</RouterLink>
        <RouterLink to="/Flights">Flights</RouterLink>
        <RouterLink to="/Chat">Chat</RouterLink>
      </nav>
  </header>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }



  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
