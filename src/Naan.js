import React, { useState } from 'react';
import { useCart } from 'D:/Program Files/food-delivery/src/components/CartContext'; // Use the correct path for CartContext
import 'D:/Program Files/food-delivery/src/styles.css'; // Use the correct path for styles
import naanImage from 'D:/Program Files/food-delivery/src/assets/naan.jpg'; // Correct image path
import bagIcon from 'D:/Program Files/food-delivery/src/assets/bag-icon.webp'; // Correct image path
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Naan = () => {
    const { addToCart } = useCart(); // Access addToCart from CartContext
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(80); // Default price for naan
    const navigate = useNavigate(); // Hook for navigation

    const hotels = [
        { name: 'Zakkariya Hotel', price: 80 },
        { name: 'Aasife Biryani', price: 90 },
        { name: 'Hotel Ponni', price: 85 },
    ];

    const handleHotelClick = (hotel) => {
        setSelectedHotel(hotel.name);
        setPrice(hotel.price);
    };

    const handleQuantityChange = (action) => {
        setQuantity(prevQuantity => action === 'increment' ? prevQuantity + 1 : (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleAddClick = () => {
        if (selectedHotel) {
            const item = {
                name: 'Naan',
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
                dishName: 'Naan',
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
        <div className="naan-container">
            <h2 className="naan-title">Naan</h2>
            <img src={bagIcon} alt="Bag" className="bag-icon" onClick={handleBagClick} /> {/* Bag icon */}
            <img src={naanImage} alt="Naan" className="naan-image" />
            <p className="naan-description">
                Soft, fluffy Indian bread, perfect for scooping up curries and gravies, made fresh in a tandoor oven!
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
                    <button onClick={() => handleQuantityChange('decrement')} className="quantity-button">-</button>
                    <span className="quantity-display">{quantity}</span>
                    <button onClick={() => handleQuantityChange('increment')} className="quantity-button">+</button>
                </div>
            </div>
            <div className="button-container">
                <button onClick={handleAddClick} className="add-button naan-add-button">Add</button>
                <button onClick={handlePlaceOrderClick} className="place-order-button naan-place-order-button">Place Order</button>
            </div>
        </div>
    );
};

export default Naan;
