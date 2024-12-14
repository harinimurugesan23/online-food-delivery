const Order = require('../models/Order');  // Make sure this path is correct

// Controller function to create an order
const createOrder = async (req, res) => {
    try {
        const { userDetails, dishName, quantity, totalPrice, hotelName, paymentStatus, deliveryPartner, trackingNumber } = req.body;
        const { name, email, phone, city, pincode, address } = userDetails;

        const newOrder = new Order({
            userDetails: { name, email, phone, city, pincode, address },
            dishName,
            quantity,
            totalPrice,
            hotelName,
            status: 'Pending',  // Default order status
            paymentStatus: paymentStatus || 'Paid',  // Default to 'Unpaid' if not provided
            deliveryPartner,  // Delivery partner ID (optional)
            trackingNumber,  // Tracking number (optional)
        });

        await newOrder.save();
        res.status(201).json({ message: 'Order placed successfully', order: newOrder });
    } catch (error) {
        console.error('Error saving order:', error);
        res.status(500).json({ message: 'Failed to place order' });
    }
};

// Controller function to get all orders
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();  // Fetch all orders from the database
        res.status(200).json(orders);  // Return orders as response
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Failed to fetch orders' });
    }
};

// Controller function to get orders by user ID
const getOrdersByUser = async (req, res) => {
    try {
        const userId = req.params.userId;  // Get user ID from URL params
        const orders = await Order.find({ 'userDetails._id': userId });  // Search orders by user ID
        if (orders.length === 0) {
            return res.status(404).json({ message: 'No orders found for this user' });
        }
        res.status(200).json(orders);  // Return orders for the user
    } catch (error) {
        console.error('Error fetching orders by user:', error);
        res.status(500).json({ message: 'Failed to fetch orders for this user' });
    }
};

// Controller function to update order status
const updateOrderStatus = async (req, res) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;  // Get status from the request body

        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        order.status = status;  // Update the order status
        await order.save();
        res.status(200).json({ message: 'Order status updated successfully', order });
    } catch (error) {
        console.error('Error updating order status:', error);
        res.status(500).json({ message: 'Failed to update order status' });
    }
};

// Controller function to get a specific order by ID
const getOrderById = async (req, res) => {
    try {
        const { orderId } = req.params;
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);  // Return the order details
    } catch (error) {
        console.error('Error fetching order:', error);
        res.status(500).json({ message: 'Failed to fetch order' });
    }
};



module.exports = {
    createOrder,
    getAllOrders,
    getOrdersByUser,
    updateOrderStatus,
    getOrderById

};
