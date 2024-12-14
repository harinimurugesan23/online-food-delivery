// Schezwan.js
import React, { useState } from 'react';
import { useCart } from 'D:/Program Files/food-delivery/src/components/CartContext'; // Import the cart context
import 'D:/Program Files/food-delivery/src/styles.css';
import schezwanRiceImage from 'D:/Program Files/food-delivery/src/assets/schezwan-rice.webp';
import bagIcon from 'D:/Program Files/food-delivery/src/assets/bag-icon.webp';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Schezwan = () => {
    const { addToCart } = useCart(); // Access addToCart from CartContext
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(160); // Default price for Schezwan Rice
    const navigate = useNavigate(); // Hook for navigation

    const hotels = [
        { name: 'Schezwan Delight', price: 160 },
        { name: 'Spice Heaven', price: 165 },
        { name: 'Flavors of Asia', price: 170 },
    ];

    const handleHotelClick = (hotel) => {
        setSelectedHotel(hotel.name);
        setPrice(hotel.price);
    };

    const handleQuantityChange = (action) => {
        if (action === 'increment') {
            setQuantity(quantity + 1);
        } else if (action === 'decrement' && quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddClick = () => {
        if (selectedHotel) {
            const item = {
                name: 'Schezwan Rice',
                price,
                quantity,
                hotel: selectedHotel,
            };
            addToCart(item); // Add the item to the cart
            alert("Item added to cart"); // Display confirmation message
        } else {
            alert("Please select a hotel first.");
        }
    };

    const handlePlaceOrderClick = () => {
        if (selectedHotel) {
            const orderDetails = {
                dishName: 'Schezwan Rice',
                quantity,
                totalPrice: price * quantity,
                hotelName: selectedHotel,
            };
            navigate('/validation', { state: orderDetails }); // Navigate to Validation.js with order details
        } else {
            alert("Please select a hotel before placing an order.");
        }
    };

    const handleBagClick = () => {
        navigate('/bag'); // Navigate to the bag page
    };

    return (
        <div className="schezwan-rice-container">
            {/* Bag icon with click handler */}
            <img 
                src={bagIcon} 
                alt="Bag" 
                className="bag-icon" 
                onClick={handleBagClick} 
            />
            <h2 className="schezwan-rice-title">Schezwan Rice</h2>
            <img src={schezwanRiceImage} alt="Schezwan Rice" className="schezwan-rice-image" />
            <p className="schezwan-rice-description">
                Spicy Schezwan Rice infused with rich flavors and aromatic spices.
            </p>
            <h3>Available In:</h3>
            <div className="hotel-options">
                {hotels.map((hotel, index) => (
                    <button
                        key={index}
                        className={`hotel-button ${selectedHotel === hotel.name ? 'selected' : ''}`}
                        onClick={() => handleHotelClick(hotel)}
                    >
                        {hotel.name}
                    </button>
                ))}
            </div>
            <div className="price-quantity-section">
                <p>Price: ₹{price * quantity}</p>
                <div className="quantity-controls">
                    <button 
                        onClick={() => handleQuantityChange('decrement')} 
                        className="quantity-button"
                    >
                        -
                    </button>
                    <span className="quantity-display">{quantity}</span>
                    <button 
                        onClick={() => handleQuantityChange('increment')} 
                        className="quantity-button"
                    >
                        +
                    </button>
                </div>
            </div>
            <div className="button-container">
                <button 
                    onClick={handleAddClick} 
                    className="add-button schezwan-rice-add-button"
                >
                    Add
                </button>
                <button 
                    onClick={handlePlaceOrderClick} 
                    className="place-order-button schezwan-rice-place-order-button"
                >
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default Schezwan;
