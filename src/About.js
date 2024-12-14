import React from 'react';
import 'D:/Program Files/food-delivery/src/styles.css'; 

const About = () => {
    return (
        <div 
            className="about-container" 
            style={{ backgroundColor: '#FFEDD5', padding: '20px' }}  // Added light orange color as background
        >
            <div className="about-content">
                <h1 className="about-title">Welcome to Food Express</h1>
                <p className="about-description">
                    The ultimate destination for food lovers who crave convenience, speed, and variety. 
                    Whether you're at home or at work, we bring the finest dining experience right to your doorstep with just a few clicks. 
                    Our mission is simple: <strong>More than Faster</strong>.
                </p>

                <p className="about-description">
                    We partner with the best local restaurants, ensuring you get access to a wide range of delicious cuisines, 
                    from traditional favorites like biryani and kebabs to international flavors like spring rolls and nachos. 
                    Our user-friendly platform allows you to easily browse menus, place orders, and track your food in real-time.
                </p>

                <h2>Our Commitment</h2>
                <ul className="about-list">
                    <li><strong>Fast Deliveries:</strong> Enjoy piping hot meals delivered to your location in the shortest possible time.</li>
                    <li><strong>Variety:</strong> Choose from a diverse selection of dishes and restaurants, ensuring there's something for everyone.</li>
                    <li><strong>Local Focus:</strong> We're proud to feature the best eateries in Sankarankovil and surrounding areas, bringing the community’s flavors to your doorstep.</li>
                    <li><strong>Convenience:</strong> Browse, order, and pay in just a few taps – all from the comfort of your home or office.</li>
                </ul>

                <p className="about-description">
                    Whether you're hosting a party, enjoying a cozy meal at home, or taking a break from work, Food Express is your go-to platform for a seamless food delivery experience. Discover, order, and savor – all in one place.
                </p>

                <h2>Food Express: Discover the best food & drinks, stay home, and order from your favorite restaurants with speed and convenience.</h2>
            </div>
        </div>
    );
};

export default About;
