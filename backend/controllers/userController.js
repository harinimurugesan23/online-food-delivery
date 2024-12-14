const User = require('D:/Program Files/food-delivery/backend/models/User'); // Adjust path if needed
const bcrypt = require('bcryptjs');

// Utility: Validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Utility: Validate mobile number format (example for 10-digit numbers)
const isValidMobile = (mobile) => /^[0-9]{10}$/.test(mobile);

// Register User
const registerUser = async (req, res) => {
  const { name, email, password, mobile, city, pincode } = req.body;

  // Validate input
  if (!name || !email || !password || !mobile || !city || !pincode) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email format' });
  }
  if (!isValidMobile(mobile)) {
    return res.status(400).json({ success: false, message: 'Invalid mobile number format' });
  }
  if (password.length < 6) {
    return res.status(400).json({ success: false, message: 'Password must be at least 6 characters long' });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      mobile,
      city,
      pincode,
    });

    // Respond with success message, excluding the password
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: { name: user.name, email: user.email },
    });
  } catch (error) {
    console.error('Registration error:', error.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    // Verify password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    // Respond with user data excluding the password
    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: { name: user.name, email: user.email },
    });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = { registerUser, loginUser };
