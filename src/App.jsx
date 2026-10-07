import { motion } from "motion/react";
import HEADER from "./components/Header";
import SOLUTIONS from "./components/Solutions";
import HERO from "./components/Hero";
import SPECIALTIES from "./components/Specialties";
import PROCESSLIST from "./components/ProcessList";
import PROJECTS from "./components/Projects";
import FOOTER from "./components/Footer";
import "./App.css";

function App() {
  return (
    //MENU HEADER
    <div className="site">
      
      <HEADER brand="TECH SOLUTIONS"/>

      <main>

      <HERO/>

      <SPECIALTIES/>
      
      <SOLUTIONS/>
      
      <PROCESSLIST/>

      <PROJECTS/>

        <section id="sobre-mi" className="about-section">
          <div>
            <p className="section-label">04 — SOBRE MÍ</p>

            <h2>
              TECH SOLUTIONS
            </h2>
          </div>

          <p>
            Ingeniero en Tecnologías de la Información y Comunicaciones
            enfocado en la integración de software, redes e infraestructura.
          </p>
        </section>

        <section id="contacto" className="contact-section">
          <p className="section-label">05 — CONTACTO</p>

          <h2>
            ¿Tienes un proyecto o un
            <span> problema tecnológico?</span>
          </h2>

          <a href="mailto:email@example.com">
            Hablemos →
          </a>
        </section>
      </main>

      <FOOTER/>

    </div>
  );
}







export default App;
