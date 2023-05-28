const mongoose = require('mongoose');

// Define the schema
const ridesSchema = new mongoose.Schema({
  departure_location: { type: String, required: true, trim: true },
  departure_time: { type: String, required: true, trim: true },
  destination_location: { type: String, required: true, trim: true },
  destination_time: { type: String, required: true, trim: true },
  driver_rating: { type: String, required: true, trim: true },
  price: { type: String, required: true, trim: true },
  booked: { type: Boolean, required: true },
  booked_time: { type: Date },
  driver_id: { type: String, required: true, trim: true },
  driver: { type: String, required: true, trim: true },
  Location: {
    long: { type: String, trim: true },
    lat: { type: String, trim: true },
  },
});

// Create the model
const RidesModel = mongoose.model('rides', ridesSchema);
module.exports = RidesModel;
