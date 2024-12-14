import React, { useState, useEffect } from 'react';
import { useCart } from 'D:/Program Files/food-delivery/src/components/CartContext';
import 'D:/Program Files/food-delivery/src/styles.css'; 
import biryaniImage from 'D:/Program Files/food-delivery/src/assets/chicken_briyani.jpg';
import bagIcon from 'D:/Program Files/food-delivery/src/assets/bag-icon.webp';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Briyani = () => {
    const { addToCart } = useCart(); // Access addToCart from CartContext
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(250); // Default price for Biryani
    const navigate = useNavigate(); // Hook for navigation

    const hotels = [
        { name: 'Zakkariya hotel', price: 250 },
        { name: 'Aasife briyani', price: 300 },
        { name: 'Hotel Namma Evening', price: 275 },
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
                name: 'Chicken Biryani',
                price,
                quantity,
                hotel: selectedHotel,
            };
            addToCart(item); // Add the item to the cart
            alert("Item added to cart!");
        } else {
            alert("Please select a hotel first.");
        }
    };

    const handlePlaceOrderClick = () => {
        if (selectedHotel) {
            const orderDetails = {
                dishName: 'Chicken Biryani',
                quantity,
                totalPrice: price * quantity,
                hotelName: selectedHotel,
            };
            navigate('/validation', { state: orderDetails }); // Navigate to validation page with order details
        } else {
            alert("Please select a hotel before placing an order.");
        }
    };

    const handleBagClick = () => {
        navigate('/bag');  // Navigate to the bag page
    };

    return (
        <div className="briyani-container">
            <h2 className="briyani-title">Chicken Biryani</h2>
            <img src={bagIcon} alt="Bag" className="bag-icon" onClick={handleBagClick} />
            <img src={biryaniImage} alt="Biryani" className="briyani-image" />
            <p className="briyani-description">
                A flavorful, layered rice dish that's popular in South Asia.
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
                <button onClick={handleAddClick} className="add-button">Add</button>
                <button onClick={handlePlaceOrderClick} className="place-order-button">Place Order</button>
            </div>
        </div>
    );
};

export default Briyani;    