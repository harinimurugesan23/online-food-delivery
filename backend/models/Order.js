const mongoose = require('mongoose');

// Order Schema
const orderSchema = new mongoose.Schema({
    userDetails: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        city: { type: String, required: true },
        pincode: { type: String, required: true },
        address: { type: String, required: true }, // Address field for detailed user location
    },
    dishName: { type: String, required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    hotelName: { type: String, required: true },
    status: { 
        type: String, 
        enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'], 
        default: 'Pending' 
    },
    deliveryPartner: { 
        type: String, // Changed to String for easier assignment (e.g., partner's name)
        required: false 
    },
    paymentStatus: { 
        type: String, 
        enum: ['Paid', 'Unpaid', 'Refunded'], 
        default: 'Paid' 
    },
    trackingNumber: { type: String, unique: true, sparse: true }, // Sparse to allow optional tracking numbers
    date: { type: Date, default: Date.now }
});

// Middleware to generate a unique tracking number (if not provided)
orderSchema.pre('save', function (next) {
    if (!this.trackingNumber) {
        this.trackingNumber = `TRK-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    }
    next();
});

// Order Model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
