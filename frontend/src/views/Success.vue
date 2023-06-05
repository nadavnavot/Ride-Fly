<script>
import { updateRide } from '../composables/ridesApi';

export default {
  created() {
    const id = this.$route.params.id;
    console.log('the $route.params.id is', id);
     updateRide(id)
      .then(() => {
        setTimeout(() => this.$router.push({ path: '/MyRides' }), 5000);
      })
      .catch(error => {
      });
  },
};
</script>

<template>
  <div class="center-title">
    <h1>Successful payment</h1>
    <div class="spinner">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
    <h4 class="loading-text">You will be redirected to your ride in a few seconds...</h4>
  </div>
</template>



<style>
.center-title {
  text-align: center;
  margin-top: 200px;
}

.loading-text {
  margin-top: 30px;
  font-family: avenir;
  color: grey;
}

.spinner {
  margin: 100px auto 0;
  width: 70px;
  text-align: center;
}

.spinner > div {
  width: 18px;
  height: 18px;
  background-color: #333;
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bouncedelay {
  0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
}
</style>
