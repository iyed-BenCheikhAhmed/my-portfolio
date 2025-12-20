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
            Welcome to My Web Site
          </h1>
          <p className="hero-subtitle">
            Student passionate about Data Science and Machine Learning
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn-primary">
              View My Projects
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Section À propos */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-intro">
              <p className="intro-text">
                I am a student passionate about Data Science and Machine Learning. 
                I love exploring data, discovering hidden insights, and building 
                intelligent models that solve real-world problems.
              </p>
              <p className="intro-text">
                Specialized in data analysis and machine learning, I work 
                on various projects ranging from exploratory data analysis to 
                creating advanced predictive models.
              </p>
            </div>

            {/* Statistiques */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">📊</div>
                <h3 className="stat-number">9+</h3>
                <p className="stat-label">Completed Projects</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🛠️</div>
                <h3 className="stat-number">10+</h3>
                <p className="stat-label">Technologies Mastered</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🎯</div>
                <h3 className="stat-number">100%</h3>
                <p className="stat-label">Commitment</p>
              </div>
            </div>

            {/* Compétences clés */}
            <div className="skills-section">
              <h3 className="skills-subtitle">Areas of Expertise</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon-box">🤖</div>
                  <h4>Machine Learning</h4>
                  <p>Building predictive models with Scikit-learn, classification and regression</p>
                </div>
                <div className="skill-item">
                  <div className="skill-icon-box">📈</div>
                  <h4>Data Analysis</h4>
                  <p>Exploratory analysis, visualization and insights with Python and Pandas</p>
                </div>
                <div className="skill-item">
                  <div className="skill-icon-box">💼</div>
                  <h4>Business Intelligence</h4>
                  <p>Interactive dashboards with Power BI and ETL pipelines</p>
                </div>
                <div className="skill-item">
                  <div className="skill-icon-box">🌐</div>
                  <h4>Web Development</h4>
                  <p>Web applications with React, JavaScript and responsive design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      

      
    </div>
  );
}

export default HomePage;