import { motion } from "motion/react";
import HEADER from "./components/Header";
import SOLUTIONS from "./components/Solutions";
import "./App.css";

function App() {
  return (
    //MENU HEADER
    <div className="site">
      
      <HEADER brand="TECH SOLUTIONS"/>

      <main>
        <section className="hero">
          <div className="hero-content">
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              CONSULTORÍA Y SOLUCIONES INTEGRALES DE TI
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Tecnología diseñada
              <span> para resolver.</span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Diseño, implemento y administro soluciones que integran
              software, redes e infraestructura para resolver necesidades
              reales de las organizaciones.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <a href="#proyectos" className="button button-primary">
                Ver proyectos
              </a>

              <a href="#contacto" className="button button-secondary">
                Hablemos
              </a>
            </motion.div>
          </div>

          <div className="hero-visual">
            <NetworkVisual />
          </div>
        </section>

        <section className="specialties">
          <span>SOFTWARE</span>
          <span>REDES</span>
          <span>INFRAESTRUCTURA</span>
          <span>SEGURIDAD</span>
        </section>

    <SOLUTIONS/>

        <section className="process-section">
          <div>
            <p className="section-label">02 — METODOLOGÍA</p>

            <h2>
              Del problema a la
              <span> solución.</span>
            </h2>
          </div>

          <div className="process-list">
            <ProcessItem number="01" title="Analizar" />
            <ProcessItem number="02" title="Diseñar" />
            <ProcessItem number="03" title="Implementar" />
            <ProcessItem number="04" title="Integrar" />
            <ProcessItem number="05" title="Administrar" />
          </div>
        </section>

        <section id="proyectos" className="section">
          <p className="section-label">03 — PROYECTOS</p>

          <h2>
            Trabajo que habla por
            <span> sí mismo.</span>
          </h2>

          <div className="project-placeholder">
            <span>PROYECTOS DESTACADOS</span>
            <p>
              Aquí construiremos los casos técnicos que demostrarán cómo
              convierto problemas reales en soluciones funcionales.
            </p>
          </div>
        </section>

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

      <footer className="footer">
        <span>TECH SOLUTIONS</span>
        <span>CONSULTORÍA Y SOLUCIONES INTEGRALES DE TI</span>
      </footer>
    </div>
  );
}



function ProcessItem({ number, title }) {
  return (
    <motion.div
      className="process-item"
      whileHover={{ x: 8 }}
      transition={{ duration: 0.2 }}
    >
      <span>{number}</span>
      <strong>{title}</strong>
    </motion.div>
  );
}

function NetworkVisual() {
  return (
    <div className="network">
      <div className="network-grid" />

      <div className="connection connection-one" />
      <div className="connection connection-two" />
      <div className="connection connection-three" />
      <div className="connection connection-four" />

      <div className="node node-center">
        <span>CORE</span>
      </div>

      <div className="node node-software">
        <span>SOFTWARE</span>
      </div>

      <div className="node node-network">
        <span>NETWORK</span>
      </div>

      <div className="node node-infra">
        <span>INFRA</span>
      </div>

      <div className="node node-security">
        <span>SECURITY</span>
      </div>

      <div className="network-status">
        SYSTEM / ONLINE
      </div>
    </div>
  );
}

export default App;
