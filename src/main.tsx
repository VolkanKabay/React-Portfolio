import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About.tsx";
import Skills from "./Skills.tsx";
import Projects from "./Projects.tsx";
import Disclaimer from "./Disclaimer.tsx";
import ParticlesComponent from "./components/Particles.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ParticlesComponent id="particles" />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/impressum" element={<Disclaimer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
