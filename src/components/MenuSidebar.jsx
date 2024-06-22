import React, { useState } from "react"; // Import React and useState hook
import { Link } from "react-router-dom"; // Import Link component from react-router-dom
import "../App.css"; // Import CSS file for global styling
import logoImage from "../assets/Logo.svg"; // Import logo image
import menuIcon from "../assets/Menu.svg"; // Import menu icon image
import closeMenuIcon from "../assets/CloseMenu.svg"; // Import close menu icon image
import homeIcon from "../assets/Home.svg"; // Import home icon image
import closeHomeIcon from "../assets/CloseHome.svg"; // Import close home icon image
import bagIcon from "../assets/Bag.svg"; // Import bag icon image
import closeBagIcon from "../assets/CloseBag.svg"; // Import close bag icon image
import navLinkIcon from "../assets/NavLink.svg"; // Import navlink icon image
import closeNavLinkIcon from "../assets/CloseNavLink.svg"; // Import close navlink icon image

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State variable to track whether the menu is open or not

  // Function to handle click on the menu icon
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  // Render the Sidebar component
  return (
    <div className={`sidebar ${isMenuOpen ? "sidebar--open" : ""}`}>
      {/* Top navigation section */}
      <div className={`sidebar__top-links ${isMenuOpen ? "sidebar--open" : ""}`}>
        <div className="sidebar__logo">
          <img src={logoImage} alt="Logo" /> {/* Logo */}
        </div>
        <div className="sidebar__menu-icon" onClick={toggleMenu}>
          <img src={isMenuOpen ? closeMenuIcon : menuIcon} alt="Menu Icon" /> {/* Menu icon */}
        </div>
        <div className="sidebar__home-link">
          <Link to="/">
            <img src={isMenuOpen ? closeHomeIcon : homeIcon} alt="Home Icon" /> {/* Home icon */}
          </Link>
        </div>
        <div className="sidebar__bag-link">
          <Link to="/bag">
            <img src={isMenuOpen ? closeBagIcon : bagIcon} alt="Bag Icon" /> {/* Bag icon */}
          </Link>
        </div>
      </div>
      {/* Bottom navigation section */}
      <div className="sidebar__bottom-link">
        <Link to="/">
          <img src={isMenuOpen ? closeNavLinkIcon : navLinkIcon} alt="Nav link Icon" /> {/* Nav link icon */}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar; // Export Sidebar component
