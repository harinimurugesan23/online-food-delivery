import React, { useState } from 'react';
import { useCart } from 'D:/Program Files/food-delivery/src/components/CartContext'; // Use the correct path for CartContext
import 'D:/Program Files/food-delivery/src/styles.css'; // Use the correct path for styles
import kebabImage from 'D:/Program Files/food-delivery/src/assets/kebab.jpg'; // Correct image path
import bagIcon from 'D:/Program Files/food-delivery/src/assets/bag-icon.webp'; // Correct image path
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Kebab = () => {
    const { addToCart } = useCart(); // Access addToCart from CartContext
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(150); // Default price for kebabs
    const navigate = useNavigate(); // Hook for navigation

    const hotels = [
        { name: 'Zakkariya Hotel', price: 150 },
        { name: 'Aasife Biryani', price: 160 },
        { name: 'Hotel Ponni', price: 155 },
    ];

    const handleHotelClick = (hotel) => {
        setSelectedHotel(hotel.name);
        setPrice(hotel.price);
    };

    const handleQuantityChange = (action) => {
        if (action === 'increment') {
            setQuantity(prevQuantity => prevQuantity + 1);
        } else if (action === 'decrement' && quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleAddClick = () => {
        if (selectedHotel) {
            const item = {
                name: 'Kebab',
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
                dishName: 'Kebab',
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
        <div className="kebab-container">
            <h2 className="kebab-title">Kebab</h2>
            <img src={bagIcon} alt="Bag" className="bag-icon" onClick={handleBagClick} /> {/* Bag icon */}
            <img src={kebabImage} alt="Kebab" className="kebab-image" />
            <p className="kebab-description">
                Succulent pieces of marinated meat grilled to perfection, served with fresh vegetables and sauces, ideal for a flavorful meal!
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
                <button onClick={handleAddClick} className="add-button kebab-add-button">Add</button>
                <button onClick={handlePlaceOrderClick} className="place-order-button kebab-place-order-button">Place Order</button>
            </div>
        </div>
    );
};

export default Kebab;
