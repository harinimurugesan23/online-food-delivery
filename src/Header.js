import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import 'D:/Program Files/food-delivery/src/styles.css';
import logo from 'D:/Program Files/food-delivery/src/assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="header-logo" />
      </div>
      <nav className="nav">
        {/* Use Link to navigate between components */}
        <Link to="/">Home</Link>  {/* Navigate to the MainContent (Home) page */}
        <Link to="/About">About</Link>  {/* Navigate to the About page */}
        <Link to="/Help">Help</Link>  {/* Navigate to the Help page */}
        <Link to="/Localities">Foods</Link>  {/* Navigate to the Foods page */}
        <Link to="/Features">Search</Link>  {/* Optional Search Link */}
      </nav>
    </header>
  );
};

export default Header;
