import React, { useState } from 'react';
import { useCart } from 'D:/Program Files/food-delivery/src/components/CartContext'; // Import the cart context
import 'D:/Program Files/food-delivery/src/styles.css'; 
import soupImage from 'D:/Program Files/food-delivery/src/assets/soup.jpg';
import bagIcon from 'D:/Program Files/food-delivery/src/assets/bag-icon.webp';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Soup = () => {
    const { addToCart } = useCart(); // Access addToCart from CartContext
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(80); // Default price for Tomato Soup
    const navigate = useNavigate(); // Hook for navigation

    const hotels = [
        { name: 'Hotel Ponni', price: 80 },
        { name: 'Hotel Apple city', price: 85 },
        { name: 'Indian Crunch', price: 90 },
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
                name: 'Tomato Soup',
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
        <div className="soup-container">
            {/* Bag icon with click handler */}
            <img 
                src={bagIcon} 
                alt="Bag" 
                className="bag-icon" 
                onClick={handleBagClick} 
            />
            <h2 className="soup-title">Tomato Soup</h2>
            <img src={soupImage} alt="Tomato Soup" className="soup-image" />
            <p className="soup-description">
                A warm, comforting bowl of rich tomato soup, perfect as a starter or on its own. Made from fresh tomatoes and seasoned with herbs.
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
                    className="add-button soup-add-button"
                >
                    Add
                </button>
                <button 
                    onClick={handlePlaceOrderClick} 
                    className="place-order-button soup-place-order-button"
                >
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default Soup;
