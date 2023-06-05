<template>
  <div>
    <div class="subtitle">Upcoming flights</div>
    <div class="card-container">
      <div class="flight high-opacity">
        <div class="card-content">
          <div class="card-header">Seville-Bologna</div>
          <div class="list">
            <div class="list-item">Date: 25.1</div>
            <div class="list-item">Departure Time: 6:07</div>
          </div>
        </div>
      </div>

      <div class="flight high-opacity">
        <div class="card-content">
          <div class="card-header">Bologna-Seville</div>
          <div class="list">
            <div class="list-item">Date: 29.1</div>
            <div class="list-item">Departure Time: 7:30</div>
          </div>
        </div>
      </div>
    </div>

    <div class="subtitle">Past flights</div>
    <div class="card-container low-opacity">
      <div class="flight low-opacity">
        <div class="card-content">
          <div class="card-header">Zagreb-Charleroi</div>
          <div class="list">
            <div class="list-item">Date: 5.11</div>
            <div class="list-item">Departure Time: 12:10</div>
          </div>
        </div>
      
      </div>
    </div>
  </div>
</template>

<style>
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
  position: relative;
  z-index: 2;
}

.flight {
  background-image: url('../../img/123d277a-city-7964-164a8b5c3d0.svg');
  background-size: cover;
  background-position: center;
  width: 100%; 
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
  position: relative;
  z-index: 1;
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
  font-size: 18px;
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
  padding: 20px;
}

.list-item {
  flex: 1;
}
</style>
