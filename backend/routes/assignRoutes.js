// routes/assignRoutes.js
const express = require('express');
const router = express.Router();
const assignController = require('../controllers/assignController');

// Define route for assigning delivery partner
router.post('/:orderId/assign', assignController.assignDeliveryPartner);  // Post request to assign partner

module.exports = router;
