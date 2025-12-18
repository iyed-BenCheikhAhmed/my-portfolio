import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Navbar.css';

function Navbar({ isLoggedIn, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/home" className="navbar-logo">
          <span className="logo-icon">💼</span>
          <span className="logo-text">Mon Portfolio</span>
        </Link>

        {/* Burger Menu (Mobile) */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
        </button>

        {/* Menu de navigation */}
        {isLoggedIn && (
          <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link 
                to="/home" 
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                🏠 Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/projects" 
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                💼 Projets
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
            <li className="nav-item">
              <button 
                onClick={() => {
                  onLogout();
                  setMenuOpen(false);
                }} 
                className="btn-logout"
              >
                🚪 Déconnexion
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;