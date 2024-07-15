import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={`images/${project.image}`} alt={project.name} />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        Voir le projet
      </a>
    </div>
  );
};

export default ProjectCard;
