<template>
  <div class="card">
    <div class="row">
      <img src="../../img/driver.svg" alt="Avatar">
      <div class="message-content">
        <h1>Pedro</h1>
        <div class="message-info">
          <p>Hi, no problem see you later...</p>
          <span class="time-right">10:14</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Chat containers */
.card {
  cursor: pointer;
  width: 100%;
  height: 120px;
  padding: 10px;
  font-family: 'Bebas Neue';
  font-weight: normal;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  background-color: #f2f2f2;
  margin-top: 35px;
  margin-bottom: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card::after {
  content: "";
  clear: both;
  display: table;
}

.row {
  display: flex;
  align-items: center;
}

.card img {
  max-width: 60px;
  width: 100%;
  border-radius: 50%;
  margin: 10px;
}

.message-content {
  overflow: hidden;
}

.message-info {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.message-info p {
  margin-right: 10px;
}

.time-right {
  color: #aaa;
margin-left: 40px;
}

p{
  color: black;
}

</style>
