const RidesModel = require('../models/Rides.js');


class ridesController {
  static getAllDoc = async (req, res) => {
    try {
      const result = await RidesModel.find()
      res.send(result)
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = ridesController