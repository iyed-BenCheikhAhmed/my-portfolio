import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import './ProjectsPage.css';

function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');           // stock - maj
  // Filtrer les projets en fonction uniquement de la recherche
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch;
  });

  return (
    <div className="projects-page">
      <div className="projects-container">
        {/* En-tête */}
        <div className="projects-header">
          <h1 className="page-title">My projects</h1>
          <p className="page-subtitle">
            Discover my personal achievements and projects
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Search for a project..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>


        

        {/* Grille de projets */}
        <div className="projects-grid">
          {filteredProjects.map(project => (     //parcours
            <ProjectCard key={project.id} project={project} />   //prop
          ))}
        </div>

        {/* Message si aucun projet */}
        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <div className="no-projects-icon">🔍</div>
            <h3>Aucun projet trouvé</h3>
            <p>Essayez de modifier vos critères de recherche</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsPage;