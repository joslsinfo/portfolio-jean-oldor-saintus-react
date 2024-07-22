import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="container about-page home">
      <h1 className="about-title">À Propos de Moi</h1>
      <div className="about-content">
        <p>
          Bonjour et bienvenue sur mon portfolio ! Je m'appelle
          <strong> Jean Oldor Saintus</strong>, et je suis un
          <strong> développeur web junior passionné</strong>. <br />
          Depuis mes débuts dans le développement web, j'ai acquis une solide
          compréhension des technologies front-end et back-end.
        </p>
        <p>
          Mon parcours académique m'a permis de développer des compétences en :
          <ul>
            <li>
              Développement front-end avec React, Angular, Vue.js, HTML, CSS,
              Bootstrap et JavaScript
            </li>
            <li>Création d'interfaces utilisateur intuitives et réactives</li>
            <li>Intégration d'API et de services tiers</li>
            <li>Développement back-end avec Node.js, PHP et Express</li>
            <li>Gestion de bases de données avec MySQL et MongoDB</li>
          </ul>
        </p>
        <p>
          Pendant mes études, j'ai travaillé sur plusieurs projets académiques
          et personnels, où j'ai pu appliquer mes compétences techniques et
          collaborer avec d'autres développeurs. Ces expériences m'ont appris
          l'importance de la communication, du travail d'équipe et de la gestion
          de projet.
        </p>
        <p>
          Je suis constamment à la recherche de nouvelles opportunités pour
          apprendre et me développer. Je suis particulièrement intéressé par les
          projets qui me permettent de travailler sur des technologies modernes
          et de relever de nouveaux défis.
        </p>
        <p>
          Si vous avez des opportunités professionnelles, des idées de projets,
          ou si vous souhaitez simplement discuter, n'hésitez pas à me
          contacter. Je serais ravi de vous répondre et de discuter de la
          manière dont nous pourrions collaborer ensemble.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
