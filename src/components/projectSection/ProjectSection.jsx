import React from "react";
import "./ProjectSection.css";

const ProjectSection = () => {
  return (
    <section className="projects-section" id="mes-projets">
      <h1>Découvrez ci-dessous mes projets réalisés</h1>
      <div className="projects">
        <div className="project home">
          <h4>Site web responsive multi pages BURGER SHOP</h4>
          <p className="description">
            Création d'un site web responsive multi pages avec HTML et CSS
            <br />
            <a
              href="https://github.com/joslsinfo/TP3-Saintus-Jean-Oldor.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accéder au contenu du projet
            </a>
            <br />
            <a
              href="https://joslsinfo.github.io/TP3-Saintus-Jean-Oldor/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visualiser ce projet en ligne
            </a>
          </p>
          <p className="dates">&copy; 2021 - 2022</p>
        </div>
        <div className="project home">
          <h4>
            Site web responsive multi pages REFUGE MIMINE avec HTML, SASS et BEM
            en utilisant workflows git en groupe
          </h4>
          <p className="description">
            Réalisation d'un site web responsive multi pages REFUGE MIMINE avec
            HTML et SASS en utilisant workflows git en équipe
            <br />
            <a
              href="https://github.com/joslsinfo/tp1-integration-web-2.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accéder au contenu du projet
            </a>
            <br />
            <a
              href="https://joslsinfo.github.io/tp1-integration-web-2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visualiser ce projet web en ligne
            </a>
          </p>
          <p className="dates">&copy; 2022</p>
        </div>
        <div className="project home">
          <h4>Projet en Javascript sur les conversions de devise</h4>
          <p className="description">
            Réalisation d'un site en javascript sur les conversions de devise.
            <br />
            <a
              href="https://github.com/joslsinfo/projet-final-tech-prog-web-1.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accéder au contenu du projet
            </a>
            <br />
            <a
              href="https://joslsinfo.github.io/projet-final-tech-prog-web-1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visualiser ce projet en ligne
            </a>
          </p>
          <p className="dates">&copy; 2022</p>
        </div>
        <div className="project home">
          <h4>
            Site web responsive sur une oeuvre
            <span className="oeuvre">cinématographique </span>
          </h4>
          <p className="description">
            Création d'un site web responsive avec HTML, SASS et Bootstrap sur
            une oeuvre cinématographique (THE KARATE KID)
            <br />
            <a
              href="https://github.com/joslsinfo/TP2-Saintus-Jean-Oldor.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accéder au contenu du projet
            </a>
            <br />
            <a
              href="https://joslsinfo.github.io/TP2-Saintus-Jean-Oldor/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explorer ce projet en ligne
            </a>
          </p>
          <p className="dates">&copy; 2022</p>
        </div>
        <div className="project home">
          <h4>Site web responsive multi pages COWORKING</h4>
          <p className="description">
            Réalisation d'un site web responsive et PWA avec service worker et
            le manifest utilisant HTML, SASS, BEM, Bootstrap, JavaScript
            <br />
            <a
              href="https://github.com/joslsinfo/tp3-projetfinal-Saintus-Jean-Oldor.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accéder au contenu du projet
            </a>
            <br />
            <a
              href="https://joslsinfo.github.io/tp3-projetfinal-Saintus-Jean-Oldor/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visualiser ce projet en ligne
            </a>
          </p>
          <p className="dates">&copy; 2022</p>
        </div>
        <div className="project home">
          <h4>Projet en react sur Star wars API</h4>
          <p className="description">
            Création d'une application avec la librairie react et react router
            pour aller chercher de l'information sur star wars avec aussi
            utilisation formik, redux, firebase
            <br />
            <a
              href="https://github.com/joslsinfo/projet2-react-swapi-app.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accéder au contenu du projet
            </a>
            <br />
            <a
              href="https://joslsinfo.github.io/projet2-react-swapi-app/#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir cette application créée en react
            </a>
            <br />
          </p>
          <p className="dates">&copy; 2022</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
