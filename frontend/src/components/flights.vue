<template>
  <div>
    <div class="subtitle">Upcoming flights</div>
    <div class="card-container">
      <div class="card high-opacity">
        <div class="card-content">
          <div class="card-header">Seville-Bologna</div>
          <div class="list">
            <div class="list-item">25.1</div>
            <div class="list-item">6:28</div>
          </div>
        </div>
      </div>

      <div class="card high-opacity">
        <div class="card-content">
          <div class="card-header">Bologna-Seville</div>
          <div class="list">
            <div class="list-item">29.1</div>
            <div class="list-item">7:30</div>
          </div>
        </div>
      </div>
    </div>

    <div class="subtitle">Past flights</div>
    <div class="card-container">
      <div class="card low-opacity">
        <div class="card-content">
          <div class="card-header">Zagreb-Charleroi</div>
          <div class="list">
            <div class="list-item">5.11</div>
            <div class="list-item">12:10</div>
          </div>
        </div>
      </div>

      <div class="card low-opacity">
        <div class="card-content">
          <div class="card-header">Charleroi-Zagreb</div>
          <div class="list">
            <div class="list-item">9.11</div>
            <div class="list-item">6:30</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.subtitle {
  font-family: 'Bebas Neue';
  font-weight: normal;
  font-size: 18px;
  margin-top: 30px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  background-image: url('/Users/carloslaptop4/Desktop/IDPA/year 2/SEMESTER 2/Product 4/Ride-Fly/frontend/img/123d277a-city-7964-164a8b5c3d0.svg');
  background-size: cover;
  background-position: center;
  cursor: pointer;
  width: calc(50% - 10px); /* Adjust the width to create appropriate spacing */
  height: 120px;
  padding: 10px;
  font-family: 'Bebas Neue';
  font-weight: bold;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  margin-top: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.high-opacity {
  opacity: 0.80;
}

.medium-opacity {
  opacity: 0.60;
}

.low-opacity {
  opacity: 0.50;
}

.card-content {
  font-family: 'Bebas Neue';
  font-weight: normal;
  font-size: 16px;
  color: black;
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
</style>
