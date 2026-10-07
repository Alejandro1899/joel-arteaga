import React from "react";
import ProcessItem from "./ProcessItem";

function ProcessList() {
  return (
    <>
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
        </>)}

    export default ProcessList;