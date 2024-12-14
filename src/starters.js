import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import 'D:/Program Files/food-delivery/src/styles.css';
import soup from 'D:/Program Files/food-delivery/src/assets/soup.jpg';
import springRolls from 'D:/Program Files/food-delivery/src/assets/spring-roll.avif';
import nachos from 'D:/Program Files/food-delivery/src/assets/nachos.jpg';
import samosa from 'D:/Program Files/food-delivery/src/assets/samosa.avif';
import wings from 'D:/Program Files/food-delivery/src/assets/wings.jpg';
import cartIcon from 'D:/Program Files/food-delivery/src/assets/bag-icon.webp';

const Starters = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const foodItems = [
        { name: 'Tomato Soup', price: '₹80', image: soup },
        { name: 'Spring Rolls', price: '₹120', image: springRolls },
        { name: 'Cheese Nachos', price: '₹150', image: nachos },
        { name: 'Samosa', price: '₹30', image: samosa },
        { name: 'Chicken Wings', price: '₹200', image: wings },
    ];

    const handleFoodClick = (food) => {
		if (food.name === 'Tomato Soup') {
            navigate('/soup');
        }
		else if (food.name === 'Spring Rolls'){
			navigate('/rolls');
		}
		else if (food.name === 'Cheese Nachos'){
			navigate('/nachos');
		}
		else if (food.name === 'Samosa'){
			navigate('/samosa');
		}
		else if (food.name === 'Chicken Wings'){
			navigate('/wings');
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


export default Starters;
