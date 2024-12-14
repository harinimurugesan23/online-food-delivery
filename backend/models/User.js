const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobile: { type: String, required: true },
  city: { type: String, required: true },
  pincode: { type: String, required: true },
});

// Check if the model already exists, and avoid redefining it
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
