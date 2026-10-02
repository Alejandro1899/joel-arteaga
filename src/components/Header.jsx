import React from "react";


function Header({brand}) {

    const links = [
        { href: "#soluciones",
        label: "Soluciones" },

        { href: "#proyectos",
        label: "Proyectos" },
        
        { href: "#sobre-mi", 
        label: "Sobre mí" },
        
        { href: "#contacto",
        label: "Contacto" },
    ];


    return (

<header className="header">
        <a href="/" className="brand">
                {brand}
            </a>
        <nav className="nav">
          {links.map((link, index) => (
            <a key={index} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
</header>
    );
}


export default Header;