import React, { useState } from 'react';
import { useCart } from 'D:/Program Files/food-delivery/src/components/CartContext'; // Import the cart context
import 'D:/Program Files/food-delivery/src/styles.css'; 
import samosaImage from 'D:/Program Files/food-delivery/src/assets/samosa.avif';
import bagIcon from 'D:/Program Files/food-delivery/src/assets/bag-icon.webp';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Samosa = () => {
    const { addToCart } = useCart(); // Access addToCart from CartContext
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(50); // Default price for Samosa
    const navigate = useNavigate(); // Hook for navigation

    const hotels = [
        { name: 'Chaat Palace', price: 50 },
        { name: 'Snack House', price: 55 },
        { name: 'Street Delights', price: 60 },
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
                name: 'Samosa',
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
                dishName: 'Mushroom Curry',
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
        <div className="samosa-container">
            {/* Bag icon with click handler */}
            <img 
                src={bagIcon} 
                alt="Bag" 
                className="bag-icon" 
                onClick={handleBagClick} 
            />
            <h2 className="samosa-title">Samosa</h2>
            <img src={samosaImage} alt="Samosa" className="samosa-image" />
            <p className="samosa-description">
                Crispy, golden samosas filled with spiced potatoes and peas, perfect for a quick snack.
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
                    className="add-button samosa-add-button"
                >
                    Add
                </button>
                <button 
                    onClick={handlePlaceOrderClick} 
                    className="place-order-button samosa-place-order-button"
                >
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default Samosa;
