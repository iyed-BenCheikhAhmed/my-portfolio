import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
 

  return (
    <div className="home-page">
      {/* Section Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="profile-image">
            <div className="image-placeholder">👨‍💻</div>
          </div>
          <h1 className="hero-title">
            Bienvenue sur mon Portfolio
          </h1>
          <p className="hero-subtitle">
            Développeur Frontend passionné par la création d'applications 
            web modernes et innovantes
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn-primary">
              Voir mes projets
            </Link>
            <Link to="/contact" className="btn-secondary">
              Me contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Section À propos */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">À propos de moi</h2>
          <div className="about-content">
            <p>
              Je suis un développeur Frontend. J'aime créer des applications intuitives 
              et performantes qui résolvent des problèmes réels.
            </p>
            <p>
              Spécialisé en React et Node.js, je travaille sur des projets variés 
              allant des sites vitrines aux applications complexes avec gestion de 
              données en temps réel.
            </p>
            <p>
              Mon objectif est de créer des expériences utilisateur exceptionnelles 
              tout en écrivant un code propre, maintenable et évolutif.
            </p>
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      

      
    </div>
  );
}

export default HomePage;