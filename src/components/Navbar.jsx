import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">💼</span>
          <span className="logo-text">My Portfolio</span>
        </Link>

        {/* Burger Menu (Mobile) */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
        </button>

        {/* Menu de navigation */}
        <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link 
                to="/" 
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                🏠 Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/projects" 
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                💼 Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/contact" 
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                📧 Contact
              </Link>
            </li>
          </ul>
      </div>
    </nav>
  );
}

export default Navbar;