import React, { useState } from 'react';
import { useCart } from 'D:/Program Files/food-delivery/src/components/CartContext'; // Import the cart context
import 'D:/Program Files/food-delivery/src/styles.css'; // Use relative paths for CSS if possible
import mushroomImage from 'D:/Program Files/food-delivery/src/assets/mushroom.avif'; 
import bagIcon from 'D:/Program Files/food-delivery/src/assets/bag-icon.webp';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Mushroom = () => {
    const { addToCart } = useCart(); 
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(200);
    const navigate = useNavigate(); 

    // List of hotels and their corresponding prices
    const hotels = [
        { name: 'Zakkariya Hotel', price: 200 },
        { name: 'Aasife Biryani', price: 215 },
        { name: 'Hotel Ponni', price: 210 },
    ];

    const handleHotelClick = (hotel) => {
        setSelectedHotel(hotel.name);
        setPrice(hotel.price);
    };

    const handleQuantityChange = (action) => {
        setQuantity(prevQuantity => 
            action === 'increment' ? prevQuantity + 1 : 
            action === 'decrement' && prevQuantity > 1 ? prevQuantity - 1 : 
            prevQuantity
        );
    };

    const handleAddClick = () => {
        if (selectedHotel) {
            const item = {
                name: 'Mushroom Curry',
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
        <div className="mushroom-container">
            <h2 className="mushroom-title">Mushroom Curry</h2>
            <img 
                src={bagIcon} 
                alt="Bag" 
                className="bag-icon" 
                onClick={handleBagClick} 
            /> {/* Bag icon with click handler */}
            <img 
                src={mushroomImage} 
                alt="Mushroom Curry" 
                className="mushroom-image" 
            />
            <p className="mushroom-description">
                A delicious, creamy dish made with tender mushrooms, cooked in a rich and spiced curry sauce, perfect for pairing with rice or bread.
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
                    className="add-button mushroom-add-button"
                >
                    Add
                </button>
                <button 
                    onClick={handlePlaceOrderClick} 
                    className="place-order-button mushroom-place-order-button"
                >
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default Mushroom;
