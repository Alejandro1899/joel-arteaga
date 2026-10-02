import SolutionCard from "./SolutonsCard";


function Solutions() {

    const solutions = [
        {
            title: "Consultoría de TI",
            number: "01",
            text: "Ofrecemos servicios de consultoría de TI para ayudar a las empresas a optimizar sus procesos, mejorar la eficiencia y reducir costos mediante el uso estratégico de la tecnología."}
            ,
        {
            title: "Desarrollo de Software",
            number: "02",
            text: "Creamos soluciones de software personalizadas que se adaptan a las necesidades específicas de cada cliente, utilizando las últimas tecnologías y metodologías de desarrollo ágil para garantizar resultados de alta calidad."}
            ,
        {
            title: "Implementación de Redes",
            number: "03",
            text: "Diseñamos e implementamos redes de comunicación seguras y eficientes, asegurando la conectividad y el rendimiento óptimo de los sistemas de información de nuestros clientes."}
            ,
        {
            number: "04",
            title: "Administración de TI",
            text: "Administración y soporte de infraestructura, sistemas y plataformas tecnológicas.",
        }
    ];
    return(

        <section className="section" id="soluciones">
            
            <p className="section-label">01 — SOLUCIONES</p>
            <h2>Tecnología conectada a 
                <span> necesidades reales.</span>
            </h2>
            <div className="solution-grid">
                {solutions.map((solution) =>(
                        <SolutionCard
                        key={solution.number}
                        title={solution.title}
                        number={solution.number}
                        text={solution.text}
                        />
                ))}
            </div>
        </section>
    );
}

export default Solutions;