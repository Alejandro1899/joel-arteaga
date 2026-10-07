import React from "react";
import { motion } from "motion/react";
import NetworkVisual from "./NetworkVisual";

function Hero() {
return (

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
        )}
    
    export default Hero;