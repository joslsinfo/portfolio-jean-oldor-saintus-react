import React from "react";
import "./Home.css";
import cv from "../../assets/docs/cv-jos.pdf";
import programming from "../../assets/img-programming.png";
import {
  burgerImages,
  refugeMimineImages,
  karateKidImages,
  josCoworkingImages,
} from "../../components/data/projectData.js";

import Carousel from "../../components/carousel/Carousel.jsx";
import ProjectSection from "../../components/projectSection/ProjectSection.jsx";

const Home = () => {
  return (
    <div className="container home">
      <h1>Bienvenue sur mon portfolio</h1>

      <p className="presentation">
        Bonjour, je suis Jean Oldor Saintus, développeur web front-end junior
      </p>
      <p>
        Très passionné par le développement web, dynamique et motivé à
        travailler seul ou en équipe pour développer des applications web.
        <br />
        Je travaille présentement comme agent technique dans une compagnie de
        luminaires depuis 2014. <br />
        Et je suis une formation en développement web front-end au Cégep de
        Trois-Rivières. <br />
        J'aimerais m'y orienter pour contribuer au développement de cette
        nouvelle technologie et avoir plus d'expériences dans ce domaine que
        j'aime beaucoup. <br />
        Je me forme continuellement pour trouver toutes les nouveautés de la
        technologie web et des solutions aux problèmes qui sont liés au
        développement web afin d'adapter les meilleures solutions techniques
        possibles à mes projets. <br />
        C'est un plaisir pour moi de coder et de résoudre des problèmes.
      </p>
      <a
        className="nav-link cv"
        href={cv}
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir mon CV
      </a>
      <div className="presentation-image">
        <img src={programming} alt="Programming" />
      </div>

      <section className="row mb-3">
        <ProjectSection />
      </section>
      <section className="title-projects">
        <div className="container">
          <h2>Vues des projets</h2>
          <div className="row mb-3">
            <Carousel title="BURGER SHOP" images={burgerImages} />
            <Carousel title="REFUGE MIMINE" images={refugeMimineImages} />
            <Carousel title="THE KARATE KID" images={karateKidImages} />
            <Carousel title="JOS COWORKING" images={josCoworkingImages} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
