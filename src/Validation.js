 import React, { useState } from 'react'; 
import { useNavigate, useLocation } from 'react-router-dom';
import curryImage from 'D:/Program Files/food-delivery/src/assets/valid.jpg';

const Validation = () => {
    const { state } = useLocation();  // Retrieve passed data
    const navigate = useNavigate();
    const { dishName, quantity, totalPrice, hotelName } = state || {};

    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        pincode: '',
        address: '',
        upiId: '',
        password: '', // Add the password field
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        city: '', 
        pincode: '',
        address: '',
        upiId: '',
        password: '', // Add error handling for password
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    // Regular expressions for validation
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPhone = (phone) => /^[0-9]{10}$/.test(phone);
    const isValidPincode = (pincode) => /^[0-9]{6}$/.test(pincode);
    const isValidUpiId = (upiId) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/.test(upiId);
    const isValidPassword = (password) =>
        password.length >= 6 && /[A-Za-z]/.test(password) && /[0-9]/.test(password);

    const validateFields = () => {
        let formErrors = {};
        let isValid = true;

        if (!userDetails.name) {
            formErrors.name = 'Name is required';
            isValid = false;
        }

        if (!userDetails.email || !isValidEmail(userDetails.email)) {
            formErrors.email = 'Valid email is required';
            isValid = false;
        }

        if (!userDetails.phone || !isValidPhone(userDetails.phone)) {
            formErrors.phone = 'Valid 10-digit phone number is required';
            isValid = false;
        }

        if (!userDetails.city) {
            formErrors.city = 'City is required';
            isValid = false;
        }

        if (!userDetails.pincode || !isValidPincode(userDetails.pincode)) {
            formErrors.pincode = 'Valid 6-digit pincode is required';
            isValid = false;
        }

        if (!userDetails.address) {
            formErrors.address = 'Address is required';
            isValid = false;
        }

        if (!userDetails.upiId || !isValidUpiId(userDetails.upiId)) {
            formErrors.upiId = 'Valid UPI ID is required';
            isValid = false;
        }

        if (!userDetails.password || !isValidPassword(userDetails.password)) {
            formErrors.password =
                'Password must be at least 6 characters long and include letters and numbers';
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleContinueClick = async () => {
        if (validateFields()) {
            const orderData = {
                userDetails,
                dishName,
                quantity,
                totalPrice,
                hotelName,
            };

            try {
                const response = await fetch('http://localhost:5000/api/orders', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(orderData),
                });

                if (response.ok) {
                    alert('Order placed successfully!');
                    navigate('/payment', { state: { amount: totalPrice } }); // Redirect to payment
                } else {
                    alert('Failed to place order');
                }
            } catch (error) {
                console.error('Error placing order:', error);
                alert('An error occurred, please try again later');
            }
        } else {
            alert('Please fix the errors before continuing');
        }
    };

    return (
        <div className="validation-container">
            <h2>Order Summary</h2>
            <img src={curryImage} alt="Chicken Curry" className="dish-image" />
            <p><strong>Dish:</strong> {dishName}</p>
            <p><strong>Quantity:</strong> {quantity}</p>
            <p><strong>Total Price:</strong> ₹{totalPrice}</p>
            <p><strong>Hotel:</strong> {hotelName}</p>

            <h3>User Details</h3>
            <form>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={userDetails.name}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.name && <div className="error">{errors.name}</div>}
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={userDetails.email}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.email && <div className="error">{errors.email}</div>}
                </label>
                <label>
                    Phone:
                    <input
                        type="tel"
                        name="phone"
                        value={userDetails.phone}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.phone && <div className="error">{errors.phone}</div>}
                </label>
                <label>
                    City:
                    <input
                        type="text"
                        name="city"
                        value={userDetails.city}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.city && <div className="error">{errors.city}</div>}
                </label>
                <label>
                    Pincode:
                    <input
                        type="text"
                        name="pincode"
                        value={userDetails.pincode}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.pincode && <div className="error">{errors.pincode}</div>}
                </label>
                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={userDetails.address}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.address && <div className="error">{errors.address}</div>}
                </label>
                <label>
                    UPI ID:
                    <input
                        type="text"
                        name="upiId"
                        value={userDetails.upiId}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.upiId && <div className="error">{errors.upiId}</div>}
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={userDetails.password}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.password && <div className="error">{errors.password}</div>}
                </label>
            </form>

            <button onClick={handleContinueClick} className="continue-button">
                Continue
            </button>
        </div>
    );
};

export default Validation;