const express = require('express');

const RidesController = require('../controllers/ridesController.js');

const router = express.Router();

router.get('/rides', RidesController.getAllDoc);

// export default router
module.exports = router;