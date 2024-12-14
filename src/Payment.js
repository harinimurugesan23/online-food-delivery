import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Import Link for navigation

const Payment = () => {
  const { state } = useLocation();
  const { amount } = state || {}; // Retrieve the amount from state

  const [paymentStatus, setPaymentStatus] = useState('Pending');
  const [deliveryPartner, setDeliveryPartner] = useState('');

  useEffect(() => {
    // Choose a random delivery partner
    const deliveryPartners = ['Alice', 'John', 'Kane', 'David'];
    const randomPartner = deliveryPartners[Math.floor(Math.random() * deliveryPartners.length)];
    setDeliveryPartner(randomPartner);

    if (amount) {
      // Simulate payment processing
      setTimeout(() => {
        setPaymentStatus('Payment Successful');
      }, 2000);
    }
  }, [amount]);

  return (
    <div className="payment-container">
      <h2>Payment Page</h2>
      <p><strong>Total Amount: ₹{amount}</strong></p>
      <p>Status: {paymentStatus}</p>

      {paymentStatus === 'Payment Successful' ? (
        <div>
          <h3>Thank you for your purchase!</h3>
          <p>Your payment was successfully processed.</p>
          <p><strong>Your delivery partner is: {deliveryPartner}</strong></p>
        </div>
      ) : (
        <p>Processing your payment...</p>
      )}

      {/* Back Button to navigate to /Localities */}
      <Link to="/Localities">
        <button style={{
          padding: '5px 10px', 
          fontSize: '14px', 
          cursor: 'pointer',
          backgroundColor: 'lightgray', 
          border: 'none', 
          borderRadius: '5px'
        }}>
          Back
        </button>
      </Link>
    </div>
  );
};

export default Payment;
