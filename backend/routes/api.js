const express = require('express');
const RidesController = require('../controllers/ridesController');
const router = express.Router();

router.get('/rides', RidesController.getAllRides);
router.get('/rides/:id', RidesController.getRideById);
router.put('/rides/:id', RidesController.updateRide);

module.exports = router;
