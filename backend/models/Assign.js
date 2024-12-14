// models/Assign.js
const mongoose = require('mongoose');

const assignSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order', // Referencing the Order model
    required: true
  },
  deliveryPartnerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DeliveryPartner', // Referencing the DeliveryPartner model
    required: true
  },
  deliveryPartnerName: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Assigned', 'In Progress', 'Completed'], // Track status of the assignment
    default: 'Assigned',
  },
  assignedAt: {
    type: Date,
    default: Date.now
  },
  expectedDeliveryTime: {
    type: Date,
    required: false // Optional field for expected delivery time
  }
});

const Assign = mongoose.model('Assign', assignSchema);

module.exports = Assign;
