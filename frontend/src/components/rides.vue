<script>

</script>

<template>
  <div>
    <div class="subtitle">Upcoming Rides</div>
      <div class="card blue">
        <div class="card-content">
          <div class="card-header">
            Location-Destination <!-- {{ location }} - {{ destination }} --></div>

            <div class="list">
              <div class="list-item">25.1<!--{{ date }}--></div>
              <div class="list-item">6:28<!--{{ time }}--></div>
            </div>
      </div>
  </div>

  <div>
    <div class="subtitle">Past Rides</div>
      <div class="card grey">
        <div class="card-content">
          <div class="card-header">
            Location-Destination <!-- {{ location }} - {{ destination }} --></div>
            <div class="list">
              <div class="list-item">25.1<!--{{ date }}--></div>
              <div class="list-item">6:28<!--{{ time }}--></div>
            </div>
      </div>
  </div>
  <div class="banner medium-opacity">
    <!-- content for the banner goes here -->
  </div>
</div>
</div>
  </template>

<style scoped>
.subtitle {
  font-family: Bebas Neue;
  font-weight: normal;
  font-size: 18px;
  margin-top: 30px;
}
.card {
  height: 84px;
  width: 112px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 10px;
}

.high-opacity {
  opacity: 0.75;
}

.medium-opacity {
  opacity: 0.50;
}

.low-opacity {
  opacity: 0.40;
}

.blue {
  background-color: rgb(22, 107, 200);
}

.yellow {
  background-color: rgb(241, 201, 51);
}

.grey {
  background-color: rgb(174, 179, 189);
}
.card-content {
  font-family: Bebas Neue;
  font-weight: normal;
  font-size: 16px;
  color:black;
  padding: 20px;
  text-align: center;
}
.card-header {
  margin: auto;
}
.list {
  display: flex;
  margin: auto;
}
.list-item {
  flex: 1;
}

.banner {
  background-image: url('/Users/carloslaptop4/Desktop/IDPA/year 2/SEMESTER 2/Product 4/Ride-Fly/frontend/img/Screen Shot 2022-11-22 at 14.50.05.svg');
  height: 120px;
  width: 100%;
  background-repeat: repeat;
  background-position: center;
}

</style>