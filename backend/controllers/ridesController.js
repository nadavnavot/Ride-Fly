const RidesModel = require('../models/Rides');

async function getAllRides(req, res) {
  try {
    const rides = await RidesModel.find({});
    res.json(rides);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getRideById(req, res) {
  const id = req.params.id;
  try {
    const ride = await RidesModel.findById(id);
    if (!ride) {
      res.status(404).json({ message: 'Ride not found' });
    } else {
      res.json(ride);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
async function updateRide(req, res) {
  const id = req.params.id;
  try {
    const ride = await RidesModel.findById(id);
    if (!ride) {
      return res.status(404).json({ message: 'Ride not found' });
    }

    ride.booked = true;
    ride.booked_time = new Date();
    await ride.save();

    return res.json({ message: 'Ride updated successfully', ride: ride });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllRides,
  getRideById,
  updateRide
};
