import React from 'react';
import '../pages/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>À propos</h3>
          <p>
            data engineer et Développeur passionné par la création d'applications 
            web modernes et performantes.
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>📧 iyed@gmail.com</p>
          <p>📱 +216 93 555 555</p>
          <p>📍 Bizerte, Tunisie</p>
        </div>

        <div className="footer-section">
          <h3>Réseaux Sociaux</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/iyed-ben-cheikh-ahmed/" target="_blank" rel="noopener noreferrer">
              LinkedIn 🔗
            </a>
            <a href="https://github.com/iyed-BenCheikhAhmed" target="_blank" rel="noopener noreferrer">
              GitHub 💻
            </a>
            
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Mon Portfolio. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;