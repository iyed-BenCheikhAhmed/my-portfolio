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
            <h2>Project Not Found</h2>
            <p>The project you are looking for does not exist.</p>
            <button onClick={() => navigate('/projects')} className="btn-back">
              Back to Projects
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
          ← Back to Projects
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

            {/* Technologies used */}
            <div className="project-section">
              <h2 className="section-title">🛠️ Technologies Used</h2>
              <div className="technologies-list">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Fonctionnalités (si disponibles) */}
            {project.features && project.features.length > 0 && (
              <div className="project-section">
                <h2 className="section-title">✨ Key Features</h2>
                <ul className="features-list">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Liens */}
            <div className="project-links">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                💻 Source Code
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ProjectDetailPage;