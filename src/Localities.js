import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'D:/Program Files/food-delivery/src/styles.css'; // Ensure you are using a relative path for the CSS file
import mainCourseImage from 'D:/Program Files/food-delivery/src/assets/maincourse.jpg';
import startersImage from 'D:/Program Files/food-delivery/src/assets/starters.webp';
import friedRiceImage from 'D:/Program Files/food-delivery/src/assets/friedrice.jpg';

const Localities = () => {
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        switch (category) {
            case 'Main Course':
                navigate('/MainCourse'); 
                break;
            case 'Starters':
                navigate('/starters'); 
                break;
            case 'Fried Rice and Noodles':
                navigate('/friedrice'); 
                break;
            default:
                break;
        }
    };

    const categories = [
        { name: 'Main Course', image: mainCourseImage },
        { name: 'Starters', image: startersImage },
        { name: 'Fried Rice and Noodles', image: friedRiceImage },
    ];

    return (
        <div className="localities-container">
            <h1>Food Categories</h1>
            <h2 className="order-prompt">Order and enjoy your cuisine here.</h2>
            <div className="category-list">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="category-item"
                        onClick={() => handleCategoryClick(category.name)}
                    >
                        <img src={category.image} alt={category.name} className="category-image" />
                        <p className="category-name">{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Localities;