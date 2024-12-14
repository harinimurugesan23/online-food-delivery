import React, { useState } from 'react';
import axios from 'axios';
import Register from './Register'; // Import Register component
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import 'D:/Program Files/food-delivery/src/styles.css'; // Import styles

const SignIn = ({ onBack }) => {
  const [showRegister, setShowRegister] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      setError('Please fill in both email and password.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/users/signin', formData);
      if (response.status === 200) {
        // Redirect to the Payment page on successful login
        navigate('/features');
      }
    } catch (err) {
      const message = err.response?.data?.message || 'Login failed. Please try again.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  if (showRegister) {
    return <Register onBack={() => setShowRegister(false)} />;
  }

  return (
    <div className="sign-in-container">
      <div className="sign-in-box">
        <h2>Log In</h2>

        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button className="login-button" onClick={handleLogin} disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <p>
          <button onClick={handleRegisterClick} className="link-button">
            Create a new account?
          </button>
        </p>

        <button className="login-button" onClick={() => onBack && onBack()}>
          Back
        </button>
      </div>
    </div>
  );
};

export default SignIn;
