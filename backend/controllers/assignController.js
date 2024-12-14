// controllers/assignController.js
const Assign = require('../models/Assign');
const Order = require('../models/Order'); // To verify if the order exists
const DeliveryPartner = require('../models/DeliveryBoy'); // Import DeliveryPartner model

// Function to assign a delivery partner
exports.assignDeliveryPartner = async (req, res) => {
  try {
    const { orderId } = req.params; // Get order ID from URL
    const { deliveryPartnerId } = req.body; // Get delivery partner ID from the request body

    // Verify if the order exists
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    // Verify if the delivery partner exists
    const deliveryPartner = await DeliveryPartner.findById(deliveryPartnerId);
    if (!deliveryPartner) {
      return res.status(404).json({ success: false, message: 'Delivery Partner not found' });
    }

    // Create a new assignment record
    const newAssignment = new Assign({
      orderId,
      deliveryPartnerId, // Store the ID of the partner
      deliveryPartnerName: deliveryPartner.name, // Store the partner's name
    });

    await newAssignment.save(); // Save the assignment to the database

    // Optionally update the order with the delivery partner information
    order.deliveryPartner = deliveryPartner.name;
    await order.save();

    res.status(200).json({ success: true, data: newAssignment });
  } catch (err) {
    console.error('Error assigning delivery partner:', err);
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
};
