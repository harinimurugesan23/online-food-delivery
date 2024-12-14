const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController'); // Correct path to orderController

// Define routes for order related actions
router.post('/', orderController.createOrder); // Create a new order
router.get('/', orderController.getAllOrders); // Get all orders
router.get('/user/:userId', orderController.getOrdersByUser); // Get orders by user ID
router.put('/:orderId', orderController.updateOrderStatus); // Update order status
router.get('/:orderId', orderController.getOrderById); // Get a specific order by ID


// Catch-all route for invalid routes under /api/orders
router.use('*', (req, res) => {
  res.status(404).json({ success: false, message: 'Invalid route for /api/orders' });
});

module.exports = router; // Export routes
