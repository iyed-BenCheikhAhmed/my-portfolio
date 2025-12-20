import React from 'react';  
import { Link } from 'react-router-dom';
import '../pages/ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          
          <Link to={`/project/${project.id}`} className="btn-view">
            View Details
          </Link>
        </div>
      </div>
      
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <span className="project-category">{project.category}</span>
        </div>
        
        <p className="project-description">{project.description}</p>
        
        <div className="project-technologies">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tech-badge">+{project.technologies.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;