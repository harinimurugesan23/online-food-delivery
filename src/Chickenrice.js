// ChickenRice.js
import React, { useState } from 'react';
import 'D:/Program Files/food-delivery/src/styles.css';
import chickenRiceImage from 'D:/Program Files/food-delivery/src/assets/fried-rice.jpg';
import bagIcon from 'D:/Program Files/food-delivery/src/assets/bag-icon.webp';

const ChickenRice = () => {
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(180); // Default price for Chicken Rice

    const hotels = [
        { name: 'Spicy Bites', price: 180 },
        { name: 'Rice Palace', price: 185 },
        { name: 'Flavor Town', price: 190 },
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
        console.log(`Added ${quantity} Chicken Rice from ${selectedHotel} for ₹${price * quantity}`);
    };

    const handlePlaceOrderClick = () => {
        console.log(`Order placed for ${quantity} Chicken Rice from ${selectedHotel} at ₹${price * quantity}`);
    };

    return (
        <div className="chicken-rice-container">
            <h2 className="chicken-rice-title">Chicken Rice</h2>
            <img src={bagIcon} alt="Bag" className="bag-icon" />
			<img src={chickenRiceImage} alt="Chicken Rice" className="chicken-rice-image" />
            <p className="chicken-rice-description">
                Delicious chicken rice with aromatic spices and herbs.
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
                <button onClick={handleAddClick} className="add-button chicken-rice-add-button">Add</button>
                <button onClick={handlePlaceOrderClick} className="place-order-button chicken-rice-place-order-button">Place Order</button>
            </div>
        </div>
    );
};

export default ChickenRice;
