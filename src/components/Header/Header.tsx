import React from 'react'
import './Header.css'

const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-custom">
      <div className="container">
        {/* Logo/Nombre */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#home" style={{ textDecoration: "none" }}>
  <span className="logo-vj">
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
  <circle cx="19" cy="19" r="18" fill="#FFD700" stroke="#6B2C47" strokeWidth="2"/>
  <text
    x="19"
    y="27"
    textAnchor="middle"
    fontFamily="'Dancing Script', cursive"
    fontWeight="700"
    fontSize="20"
    fill="#6B2C47"
  >VJ</text>
</svg>
  </span>
  <span className="logo-text ms-2">Portfolio</span>
</a>
        
        {/* Botón hamburguesa */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Enlaces de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">Sobre Mí</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Habilidades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
