import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'D:/Program Files/food-delivery/src/styles.css'; // Adjust the path if needed

const Register = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
    city: '',
    pincode: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleRegister = async () => {
    if (Object.values(formData).some((field) => field === '')) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users/register', formData);

      if (response.status === 201) {
        alert('Registration successful! Redirecting to payment page.');
        navigate('/features'); // Redirect to /payment instead of /features
      }
    } catch (error) {
      if (error.response?.status === 400) {
        const message = error.response.data.message;
        if (message === 'User already exists') {
          alert('You already have an account. Please log in.');
          navigate('/signin');
        } else {
          alert('Registration failed. Please try again.');
        }
      } else {
        console.error('Error during registration:', error);
        alert('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-box">
        <h2>Create Account</h2>
        {['name', 'email', 'password', 'mobile', 'city', 'pincode'].map((field) => (
          <div key={field} className="form-group">
            <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type={field === 'password' ? 'password' : 'text'}
              id={field}
              value={formData[field]}
              placeholder={`Enter your ${field}`}
              onChange={handleChange}
            />
          </div>
        ))}
        <button className="login-button" onClick={handleRegister}>
          Sign Up
        </button>
        <button className="login-button" onClick={onBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Register;
