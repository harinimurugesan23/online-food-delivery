const express = require('express');
const DeliveryBoy = require('../models/deliveryBoy'); // Replace with your delivery boy model
const router = express.Router();

// Route to get all delivery boys
router.get('/', async (req, res) => {
  try {
    const deliveryBoys = await DeliveryBoy.find();
    res.status(200).json(deliveryBoys);
  } catch (error) {
    console.error('Error fetching delivery boys:', error.message);
    res.status(500).json({ message: 'Server error while fetching delivery boys.' });
  }
});

module.exports = router;
