<script>

</script>

<template>
  <div>
  <div class="upcoming-flights">
  <h1>Upcoming flights</h1>
   <div class="card">
    <p>Destination</p>
    <span class="date-left">25.1</span>
    <span class="time-right">6:28</span>
  </div>
</div>

<div class="past-flights">
  <h1>Past flights</h1>
   <div class="card" >
    <p>Destination</p>
    <span class="date-left">25.1</span>
    <span class="time-right">6:28</span>
  </div>
</div>
</div>
  </template>

<style scoped>
.card {
  background-image: url('');
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
  border-radius: 5px;
}

.time-right {
  float: right;
  color: #aaa;
} 
</style>