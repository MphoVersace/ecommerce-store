import React, { useState } from "react"; 
import { Link } from "react-router-dom"; 
import "../App.css"; 
import logoImage from "../assets/Logo.svg"; 
import menuIcon from "../assets/Menu.svg"; 
import closeMenuIcon from "../assets/CloseMenu.svg"; 
import homeIcon from "../assets/Home.svg";
import closeHomeIcon from "../assets/CloseHome.svg"; 
import bagIcon from "../assets/Bag.svg"; 
import closeBagIcon from "../assets/CloseBag.svg"; 
import navLinkIcon from "../assets/NavLink.svg";
import closeNavLinkIcon from "../assets/CloseNavLink.svg";
import BagDetails from "../Bag/BagDetails"; 

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

 
  return (
    <div className={`sidebar ${isMenuOpen ? "sidebar--open" : ""}`}>
     
      <div className={`sidebar__top-links ${isMenuOpen ? "sidebar--open" : ""}`}>
        <div className="sidebar__logo">
          <img src={logoImage} alt="Logo" /> 
        </div>
        <div className="sidebar__menu-icon" onClick={toggleMenu}>
          <img src={isMenuOpen ? closeMenuIcon : menuIcon} alt="Menu Icon" /> 
        </div>
        <div className="sidebar__home-link">
          <Link to="/">
            <img src={isMenuOpen ? closeHomeIcon : homeIcon} alt="Home Icon" /> 
          </Link>
        </div>
        <div className="sidebar__bag-link">
          <Link to="/bag-details">
            <img src={isMenuOpen ? closeBagIcon : bagIcon} alt="Bag Icon" /> 
          </Link>
        </div>
      </div>
     
      <div className="sidebar__bottom-link">
        <Link to="/">
          <img src={isMenuOpen ? closeNavLinkIcon : navLinkIcon} alt="Nav link Icon" /> 
        </Link>
      </div>
    </div>
  );
};

export default Sidebar; 
