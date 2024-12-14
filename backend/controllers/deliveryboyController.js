const DeliveryBoy = require('../models/DeliveryBoy');

// Controller function to fetch all delivery boys
const getDeliveryBoys = async (req, res) => {
  try {
    const deliveryBoys = await DeliveryBoy.find();
    if (!deliveryBoys.length) {
      return res.status(404).json({ success: false, message: 'No delivery boys found.' });
    }
    return res.status(200).json({ success: true, data: deliveryBoys });
  } catch (error) {
    console.error('Error fetching delivery boys:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = { getDeliveryBoys };
