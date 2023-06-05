const mongoose = require('mongoose');

const ridesSchema = new mongoose.Schema({
  departure_time: { type: String, required: false, trim: true },
  destination_time: { type: String, required: false, trim: true },
  driver_rating: { type: String, required: false, trim: true },
  price: { type: String, required: false, trim: true },
  booked: { type: Boolean, required: false },
  booked_time: { type: Date },
  driver_id: { type: String, required: false, trim: true },
  driver: { type: String, required: false, trim: true },
  Location: {
    long: { type: String, trim: true },
    lat: { type: String, trim: true },
  },
});

const RidesModel = mongoose.model('rides', ridesSchema);
module.exports = RidesModel;
