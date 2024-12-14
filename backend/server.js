const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import route modules
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const deliveryBoyRoutes = require('./routes/deliveryBoyRoutes');


const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // Parses incoming requests with JSON payloads

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1); // Exit if the database connection fails
  });

// Register Routes
app.use('/api/users', userRoutes);         // User-related routes
app.use('/api/orders', orderRoutes);       // Order-related routes
app.use('/api/deliveryboys', deliveryBoyRoutes);  // Delivery boy-related routes
 // New endpoint for assigning partners

// Root Endpoint
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Food Delivery API');
});

// 404 Handler - For routes not found
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: `Route ${req.url} not found` });
});

// Global Error Handler - For any unhandled errors
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);  // Log error stack for debugging
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
