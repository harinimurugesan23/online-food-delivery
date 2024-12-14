const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController'); // Controller functions
const User = require('../models/user'); // User model for database operations
const router = express.Router();

// Route: Register a user
router.post('/register', registerUser);

// Route: Login a user
router.post('/signin', loginUser);

// Route: Get all users in a structured format
router.get('/users', async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();

    // Check if there are no users
    if (!users.length) {
      return res.status(404).json({ success: false, message: 'No users found.' });
    }

    // Map user data to a simplified format
    const usersTable = users.map((user) => ({
      id: user._id,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      city: user.city,
      pincode: user.pincode,
    }));

    // Return the user data
    return res.status(200).json({ success: true, data: usersTable });
  } catch (error) {
    console.error('Error fetching users:', error.message);
    return res.status(500).json({ success: false, message: 'Server error while fetching users.' });
  }
});

// Route: Handle invalid paths for /api/users
router.use('*', (req, res) => {
  res.status(404).json({ success: false, message: `Invalid route: ${req.originalUrl}` });
});

module.exports = router;
