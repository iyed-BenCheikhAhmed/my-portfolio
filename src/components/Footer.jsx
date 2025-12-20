import React from 'react';
import '../pages/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About</h3>
          <p>
            Student passionate about Data Science, Business Intelligence, and Machine Learning. 
            Exploring data to build intelligent solutions.
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>📧 iyedbencheikhahmed@gmail.com</p>
          <p>📱 +216 93 555 555</p>
          <p>📍 Bizerte, Tunisia</p>
        </div>

        <div className="footer-section">
          <h3>Social Networks</h3>
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
        <p>© {currentYear} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;