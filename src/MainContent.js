import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for routing
import 'D:/Program Files/food-delivery/src/styles.css';
import SignIn from 'D:/Program Files/food-delivery/src/components/SignIn'; 
import moreImage from 'D:/Program Files/food-delivery/src/assets/more.png'; 
import deliveryImage from 'D:/Program Files/food-delivery/src/assets/delivery-guy.svg';
import image1 from 'D:/Program Files/food-delivery/src/assets/food1.webp';
import image2 from 'D:/Program Files/food-delivery/src/assets/deliveryboy.avif';
import image3 from 'D:/Program Files/food-delivery/src/assets/iconphone-transformed.jpeg';

const MainContent = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const navigate = useNavigate();  // Initialize the useNavigate hook

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  const handleBackClick = () => {
    setShowSignIn(false);
  };

  const handleAdminClick = () => {
    navigate('/admin');  // Navigate to /admin route
  };

  if (showSignIn) {
    return <SignIn onBack={handleBackClick} />;
  }

  return (
    <div className="main-content">
      {/* Sign In Button */}
      <div className="top-right">
        <button className="sign-in-button" onClick={handleSignInClick}>Sign In</button>
        {/* Admin Button */}
        <button className="admin-button" onClick={handleAdminClick}>Admin</button> {/* Admin Button */}
      </div>

      {/* Top Section with More Image Centered */}
      <div className="top-section">
        <img src={moreImage} alt="More Cuisine" className="more-image" />
      </div>
      
      <div className="text-section">
        <h1 className="food-express-text">FOOD EXPRESS</h1>
        <p className="highlighted-text">Get your cuisine delivered right to your door</p>
        <p>Food that is delivered at the right time. The trendy food delivery partner.</p>
        <p>Good food is what we deliver. Your hunger companion.</p>
      </div>

      <div className="delivery-section">
        <img src={deliveryImage} alt="Delivery" className="delivery-image" />
      </div>

      {/* New Section */}
      <div className="why-best-section">
        <h2 className="best-title">Why we are Best in our Town</h2>
        <p className="best-description">Whole grains and low-fat dairy can help to reduce your risk of heart disease by maintaining blood pressure.</p>
        
        <div className="best-images">
          <div className="best-image-item">
            <img src={image1} alt="Choose your favorite food" className="best-image" />
            <p>Choose your favorite food</p>
          </div>
          <div className="best-image-item">
            <img src={image2} alt="Get delivery at your doorstep" className="best-image" />
            <p>Get delivery at your doorstep</p>
          </div>
          <div className="best-image-item">
            <img src={image3} alt="We have 400+ Reviews On our app" className="best-image" />
            <p>We have 400+ Reviews On our app</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

