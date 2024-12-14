const mongoose = require('mongoose');

// Delivery Boy Schema
const deliveryBoySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Check if the model already exists, if not define it
const DeliveryBoy = mongoose.models.DeliveryBoy || mongoose.model('DeliveryBoy', deliveryBoySchema);

module.exports = DeliveryBoy;

