<script>

</script>

<template>
   <div class="container" >
      <img src="img/hills-family-dental-platte-city-mo-servicespage-fillings-image.svg" alt="Avatar">
      <h1>Pedro</h1>
      <p>Hi, no problem see you later</p>
      <span class="time-right">10:14</span>
  </div>
  </template>

<style scoped>
/* Chat containers */
.container {
  font-family: Bebas Neue;
  font-weight: normal;
  border: 2px solid #dedede;
  background-color: #f1f1f1;
  border-radius: 15px;
  padding: 10px;
  margin: 10px 0;
  margin-top: 35px;
  width: 284;
  height: 67;
}

/* Darker chat container */
.darker {
  border-color: #ccc;
  background-color: #ddd;
}

/* Clear floats */
.container::after {
  content: "";
  clear: both;
  display: table;
}

/* Style images */
.container img {
  float: left;
  max-width: 60px;
  width: 100%;
  border-radius: 50%;
  margin: 10px;
}

/* Style the right image */
.container img.right {
  float: right;
  margin-left: 20px;
  margin-right:0;
}

/* Style time text */
.time-right {
  float: right;
  color: #aaa;
} 
</style>