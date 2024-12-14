import React, { useState } from 'react';
import { useCart } from 'D:/Program Files/food-delivery/src/components/CartContext';  // Import the cart context
import 'D:/Program Files/food-delivery/src/styles.css';
import curryImage from 'D:/Program Files/food-delivery/src/assets/curry.jpg'; // Adjust the image path as needed
import bagIcon from 'D:/Program Files/food-delivery/src/assets/bag-icon.webp';
import { useNavigate } from 'react-router-dom';

const Curry = () => {
    const { addToCart } = useCart();  // Access addToCart from CartContext
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(200); // Adjust price as needed
    const navigate = useNavigate();  // Hook for navigation

    const hotels = [
        { name: 'Zakkariya Hotel', price: 200 },
        { name: 'Aasife briyani', price: 250 },
        { name: 'Hotel Meat World', price: 230 },
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
                name: 'Chicken Curry',
                price,
                quantity,
                hotel: selectedHotel,
            };
            addToCart(item);
            alert("Item added to cart!");  // Display confirmation message
        } else {
            alert("Please select a hotel first.");
        }
    };

    const handlePlaceOrderClick = () => {
    if (selectedHotel) {
        const orderDetails = {
            dishName: 'Chicken Curry',
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
        navigate('/bag');  // Navigate to the bag page
    };

    return (
        <div className="curry-container">
            <h2 className="curry-title">Chicken Curry</h2>
            <img src={bagIcon} alt="Bag" className="bag-icon" onClick={handleBagClick} />  {/* Bag icon */}
            <img src={curryImage} alt="Curry" className="curry-image" />
            <p className="curry-description">
                A rich and flavorful curry made with spices and herbs, served with rice or bread.
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
                    <span>{quantity}</span>
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

export default Curry;
