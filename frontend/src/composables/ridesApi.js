import axios from "axios";
import { ref } from "vue";

// Function to get all the rides in the database 
async function getAllRides() {
  const url = "http://localhost:3000/api/rides";
  const ridesData = ref([]);
  const error = ref(null);

  ridesData.value = [];
  error.value = null;

  try {
    const response = await axios.get(url);
    ridesData.value = response.data;
    return {
      ridesData,
      error,
    };
  } catch (err) {
    error.value = err;
    return {
      ridesData,
      error,
    };
  }
}

//Function to get a spesific ride by its ID (detail page) 
async function getRideById(id) {
  const url = `http://localhost:3000/api/rides/${id}`;
  const rideData = ref(null);
  const error = ref(null);

  try {
    const response = await axios.get(url);
    if (response.data) {
      rideData.value = response.data;
      return {
        rideData: rideData.value,
        error: null,
      };
    } else {
      return {
        rideData: null,
        error: "Ride not found",
      };
    }
  } catch (err) {
    error.value = err.response ? err.response.data : err.message;
    return {
      rideData: null,
      error: error.value,
    };
  }
}

// Function to update the booked field and the booked_time in the database after successful payment 
async function updateRide(id) {
  try {
    const response = await axios.put(`http://localhost:3000/api/rides/${id}`, {
      booked: true,
      booked_time: new Date()
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}


// Function to fetch the booked rides 
async function getBookedRides() {
  const url = "http://localhost:3000/api/rides";
  const bookedRides = ref([]);
  const error = ref(null);

  bookedRides.value = [];
  error.value = null;

  try {
    const response = await axios.get(url);
    bookedRides.value = response.data.filter(ride => ride.booked === true);
    return {
      bookedRides,
      error,
    };
  } catch (err) {
    error.value = err;
    return {
      bookedRides,
      error,
    };
  }
}



export {
  getAllRides,
  getRideById,
  updateRide,
  getBookedRides
};

