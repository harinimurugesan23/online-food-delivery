import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import 'D:/Program Files/food-delivery/src/styles.css';
import friedRice from 'D:/Program Files/food-delivery/src/assets/fried-rice.jpg';
import noodles from 'D:/Program Files/food-delivery/src/assets/noodles.avif';
import schezwanRice from 'D:/Program Files/food-delivery/src/assets/schezwan-rice.webp';
import vegRice from 'D:/Program Files/food-delivery/src/assets/veg-rice.avif';
import eggFriedRice from 'D:/Program Files/food-delivery/src/assets/egg-rice.jpg';
import cartIcon from 'D:/Program Files/food-delivery/src/assets/bag-icon.webp';

const FriedRice = () => {
    const navigate = useNavigate(); // Initialize navigate

    const foodItems = [
        { name: 'Fried Rice', price: '₹150', image: friedRice },
        { name: 'Hakka Noodles', price: '₹140', image: noodles },
        { name: 'Schezwan Rice', price: '₹160', image: schezwanRice },
        { name: 'Veg Fried Rice', price: '₹130', image: vegRice },
        { name: 'Egg Fried Rice', price: '₹140', image: eggFriedRice },
    ];

    const handleFoodClick = (food) => {
        if (food.name === 'Fried Rice') { // Use correct case for 'Fried Rice'
            navigate('/chickenrice');
        }
		else if (food.name === 'Hakka Noodles') { 
            navigate('/hakka');
        }
		else if (food.name === 'Schezwan Rice') { 
            navigate('/schezwan');
        }
		else if (food.name === 'Veg Fried Rice') { 
            navigate('/vegrice');
        }
		else if (food.name === 'Egg Fried Rice') { 
            navigate('/eggrice');
		}
		else {
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


export default FriedRice;
