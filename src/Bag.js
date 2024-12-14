import React from 'react';
import { useCart } from './CartContext';
import 'D:/Program Files/food-delivery/src/styles.css';
const Bag = () => {
    const { cart, clearCart } = useCart();

    // Calculate total price
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="bag-container">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index} className="cart-item">
                                <span>{item.name} - {item.hotel} - Qty: {item.quantity} - Price: ₹{item.price * item.quantity}</span>
                            </li>
                        ))}
                    </ul>
                    <h3>Total Price: ₹{totalPrice}</h3>
                    <button onClick={clearCart}>Clear Cart</button>
                    <button className="place-order-button">Place Order</button> {/* Placeholder for Place Order functionality */}
                </div>
            )}
        </div>
    );
};

export default Bag;
