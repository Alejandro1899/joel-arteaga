import React from "react";
import { motion } from "motion/react";
import NetworkVisual from "./NetworkVisual";


function Specialties() {

    const  specialties=[
        { id:1,text:"SOFTWARE"},
        { id:2 , text:"REDES"},
        { id:3 , text:"INFRAESTRUCTURA"},
        { id:4 , text:"SEGURIDAD"}
    ];


    return (      
    <>


<section className="specialties">
    {specialties.map((specialty) => (
        <span key={specialty.id}>{specialty.text}</span>
    ))}
    </section>
</>   
)

}

export default Specialties;