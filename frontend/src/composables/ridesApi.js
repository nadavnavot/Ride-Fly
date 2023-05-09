import { ref } from 'vue'
import axios from 'axios'

export default function useRides() {
  const url = "http://localhost:3000/api/rides"
  const ridesData = ref([])
  const error = ref(null)
  // Get All Rides Data
  const getAllRides = async () => {
    ridesData.value = []
    error.value = null
    try {
      const res = await axios(url)
      // console.log(res.data)
      ridesData.value = res.data
    } catch (err) {
      // console.log(err)
      error.value = err
    }
  }

  return {
    ridesData,
    error,
    getAllRides
  }
}