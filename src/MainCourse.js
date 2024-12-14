import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'D:/Program Files/food-delivery/src/styles.css'; // Use relative paths for CSS if possible
import biryani from 'D:/Program Files/food-delivery/src/assets/chicken_briyani.jpg';
import curry from 'D:/Program Files/food-delivery/src/assets/curry.jpg';
import kebab from 'D:/Program Files/food-delivery/src/assets/kebab.jpg';
import naan from 'D:/Program Files/food-delivery/src/assets/naan.jpg';
import rice from 'D:/Program Files/food-delivery/src/assets/mushroom.avif';
import cartIcon from 'D:/Program Files/food-delivery/src/assets/bag-icon.webp';

const MainCourse = () => {
    const navigate = useNavigate();

    const foodItems = [
        { name: 'Biryani', price: '₹250', image: biryani },
        { name: 'Chicken Curry', price: '₹200', image: curry },
        { name: 'Kebab', price: '₹150', image: kebab },
        { name: 'Butter Naan', price: '₹50', image: naan },
        { name: 'Mushroom Curry', price: '₹180', image: rice },
    ];

    const handleFoodClick = (food) => {
        if (food.name === 'Biryani') {
            navigate('/briyani');
        } else if (food.name === 'Chicken Curry') {
            navigate('/curry');
        } else if (food.name === 'Kebab') {
            navigate('/kebab');
        } else if (food.name === 'Butter Naan') {
            navigate('/naan');
        } else if (food.name === 'Mushroom Curry') {
            navigate('/mushroom');
        } else {
            console.log(`You clicked on ${food.name}`);
        }
    };

   
    const handleBagClick = () => {
        navigate('/bag'); // Navigate to the bag page
    };
	
	
	
	

    return (
        <div className="main-course-container">
            {/* Cart Icon at the top */}
            <div className="cart-icon-container">
                <img
                    src={cartIcon}
                    alt="Cart"
                    className="cart-icon"
                    onClick={handleBagClick}
                />
            </div>
            <h2 className="main-course-title">Main Course</h2>
            <div className="food-items-grid">
                {foodItems.map((food, index) => (
                    <div
                        key={index}
                        className="food-item-container"
                        onClick={() => handleFoodClick(food)}
                    >
                        <img src={food.image} alt={food.name} className="food-image" />
                        <div className="food-details">
                            <p className="food-name">{food.name}</p>
                            <p className="food-price">{food.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainCourse;
