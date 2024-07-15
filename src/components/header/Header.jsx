import React from "react";
import { Link } from "react-router-dom";
import "../../components/header/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import profil from "../../assets/josprofilsize.jpg";
import cv from "../../assets/docs/cv-jos.pdf";
import { changeDarkMode } from "../../js/darkMode.js";

const Header = () => {
  return (
    <header className="header navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center ms-5">
          <img
            src={profil}
            alt="profil"
            className="profile-img rounded-circle"
            width="60"
            height="60"
          />
          <span className="ms-2">Jean Oldor Saintus</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                À propos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                Projets
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </a>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <button
                id="dark-light-mode"
                className="nav-link btn btn-link"
                onClick={changeDarkMode}
              >
                Dark mode
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
