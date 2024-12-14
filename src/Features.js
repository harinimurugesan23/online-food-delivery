import React, { useState } from 'react';
import 'D:/Program Files/food-delivery/src/styles.css'; 
import image1 from 'D:/Program Files/food-delivery/src/assets/big.jpg';
import background from 'D:/Program Files/food-delivery/src/assets/just.png';
import { useNavigate } from 'react-router-dom';

const Features = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    // Handler for search input
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Handler for search submit onBlur or on Enter key press
    const handleSearchSubmit = () => {
        const normalizedQuery = searchQuery.toLowerCase().trim(); // Normalize the input

        // Define the dish mapping
        const dishMapping = {
            "biryani": "/Biryani",
            "chicken curry": "/Curry",
            "kebab": "/Kebab",
            "butter naan": "/Naan",
            "mushroom curry": "/Mushroom",
            "tomato soup": "/Soup",
            "spring rolls": "/Rolls",
            "cheese nachos": "/Nachos",
            "samosa": "/Samosa",
            "chicken wings": "/Wings",
            "hakka noodles": "/Hakka",
            "schezwan rice": "/Schezwan"
        };

        // Check if the query matches any of the dishes and navigate to the corresponding page
        if (dishMapping[normalizedQuery]) {
            navigate(dishMapping[normalizedQuery]);
        } else {
            alert('Dish not found!');
        }
    };

    // Handle Enter key press
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearchSubmit(); // Trigger search submit when Enter is pressed
        }
    };

    return (
        <div className="features-container" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.95 }}>
            {/* Search bar at the top */}
            <div className="search-bar-container">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search your favourite hotel here..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onBlur={handleSearchSubmit}  // Optionally trigger on blur (user clicks away)
                    onKeyDown={handleKeyDown}    // Trigger on Enter key press
                />
            </div>

            <div className="header-fixed">
                <h1 className="food-express-title">FOOD EXPRESS</h1>
                <h2 className="food-express-subtitle">More than Faster</h2>
                <p className="food-express-description">Discover the best food & drinks in Sankarankovil</p>
            </div>

            <div className="features-list">
                <div className="feature-item">
                    <img src={image1} alt="Discover food" />
                    <p>Discover the best food & drinks</p>
                    <p>Stay home and order foods at your doorstep</p>
                </div>
            </div>

            {/* New Section for Localities */}
            <div className="locality-section">
                <p className="locality-title">Popular localities in and around Sankarankovil</p>
                <div className="locality-card" onClick={() => navigate('/localities')}>
                    <h3>Sankarankovil Locality</h3>
                    <p>15+ places</p>
                </div>
            </div>
        </div>
    );
};

export default Features;
