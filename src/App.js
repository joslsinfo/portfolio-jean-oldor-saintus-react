import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Home from "./pages/home/Home.jsx";
import AboutPage from "./pages/aboutPage/AboutPage.jsx";
import ProjectsPage from "./pages/projectsPage/ProjectsPage.jsx";
import ContactPage from "./pages/contactPage/ContactPage.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./index.css";

const App = () => {
  return (
    <div>
      <BrowserRouter basename="portfolio-jean-oldor-saintus-react">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
