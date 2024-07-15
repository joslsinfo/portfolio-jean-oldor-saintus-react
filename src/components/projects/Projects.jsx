import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData";

const Projects = () => {
  return (
    <section className="container projects">
      <h2>Mes Projets</h2>
      <div className="project-list">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
