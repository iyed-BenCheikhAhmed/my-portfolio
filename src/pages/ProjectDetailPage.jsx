import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import './ProjectDetailPage.css';

function ProjectDetailPage() {
  // Récupérer l'ID du projet depuis l'URL
  const { id } = useParams(); 
  const navigate = useNavigate();

  // Trouver le projet correspondant
  const project = projects.find(p => p.id === parseInt(id));

  // Si le projet n'existe pas
  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="container">
          <div className="not-found">
            <div className="not-found-icon">❌</div>
            <h2>Projet non trouvé</h2>
            <p>Le projet que vous recherchez n'existe pas.</p>
            <button onClick={() => navigate('/projects')} className="btn-back">
              Retour aux projets
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="container">
        {/* Bouton retour */}
        <button onClick={() => navigate('/projects')} className="btn-back">
          ← Retour aux projets
        </button>

        {/* Carte du projet */}
        <div className="project-detail-card">
          {/* Image du projet */}
          <div className="project-image-large">
            <img src={project.image} alt={project.title} />
          </div>

          {/* Contenu */}
          <div className="project-info">
            {/* En-tête */}
            <div className="project-header">
              <div>
                <h1 className="project-title">{project.title}</h1>
                <span className="project-category-badge">{project.category}</span>
              </div>
            </div>

            {/* Description complète */}
            <div className="project-section">
              <h2 className="section-title">📝 Description</h2>
              <p className="project-description">{project.fullDescription}</p>
            </div>

            {/* Technologies utilisées */}
            <div className="project-section">
              <h2 className="section-title">🛠️ Technologies utilisées</h2>
              <div className="technologies-list">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Fonctionnalités (exemple) */}
            <div className="project-section">
              <h2 className="section-title">✨ Fonctionnalités principales</h2>
              <ul className="features-list">
                <li>Interface utilisateur moderne et responsive</li>
                <li>Performance optimisée</li>
                <li>Code propre et maintenable</li>
                <li>Tests unitaires et d'intégration</li>
              </ul>
            </div>

            {/* Liens */}
            <div className="project-links">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                💻 Code source
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ProjectDetailPage;