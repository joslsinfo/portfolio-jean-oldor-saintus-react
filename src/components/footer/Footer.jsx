import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="colonne">
        <h3>Projet en Javascript</h3>
        <p>Développement d'une application pour la conversion de devise</p>
        <p>
          <a
            href="https://gitlab.com/josaintus/projetfinalsaintus-jean-oldorgr1041.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le contenu de ce projet
          </a>
        </p>
        <p>
          <a
            href="https://joslsinfo.github.io/projet-final-tech-prog-web-1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visiter ce site pour explorer ce projet
          </a>
        </p>
      </div>
      <div className="colonne">
        <h3>Projet en React</h3>
        <p>
          Création d'une application avec la librairie react <br />
          pour aller chercher de l'info sur star wars via l'API
        </p>
        <p>
          <a
            href="https://github.com/joslsinfo/projet2-react-swapi-app.git/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le contenu de ce projet
          </a>
        </p>
        <p>
          <a
            href="https://joslsinfo.github.io/projet2-react-swapi-app/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visiter cette application créée en react
          </a>
        </p>
      </div>
      <div className="colonne">
        <h3>Projet en PHP et MySQL</h3>
        <p>
          Réalisation d'un projet de l'insfrastructure web <br />
          sur la manipulation de la base de données MySQL avec le langage PHP
        </p>
        <p>
          <a
            href="https://github.com/joslsinfo/projet-final-infrastructure-web-Saintus-Jean-Oldor-GR1041.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Accéder au contenu de ce projet
          </a>
        </p>
        <p>
          <a
            href="https://josaintus.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visiter ce site web pour visualiser ce projet
          </a>
        </p>
      </div>
      <div className="colonne" id="contacts">
        <h3>Mes coordonnées</h3>
        <p>
          <i className="fa-solid fa-location-dot"></i> Orlando,FL, USA
        </p>
        <p>
          <i className="fa-solid fa-envelope"></i>
          <a href="mailto:josaintus@gmail.com"> josaintus@gmail.com</a>
        </p>
        <p>
          <i className="fa-solid fa-envelope"></i>
          <a href="mailto:joslsinfo2022@gmail.com"> joslsinfo2022@gmail.com</a>
        </p>
        <p>
          <i className="fa-solid fa-globe"></i>
          <a
            href="https://www.josaintus.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.josaintus.com
          </a>
        </p>
      </div>
      <div className="colonne" id="contacts">
        <h3>Mes réseaux sociaux</h3>
        <p>
          <a
            href="https://www.facebook.com/Jean Saintus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook"></i> facebook / jeansaintus
          </a>
        </p>
        <p>
          <a
            href="https://linkedin.com/in/jean-oldor-saintus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook"></i>
            linkedin.com/in/jean-oldor-saintus
          </a>
        </p>
        <p>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i> instagram
          </a>
        </p>
        <p>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i> twitter / @josaintus2011
          </a>
        </p>
        <p>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-youtube"></i> youtube
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
