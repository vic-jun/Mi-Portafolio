import React from 'react'
import './Hero.css'

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-container">
      {/* Burbujas flotantes */}
      <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>   
        <div className="bubble"></div>   
        <div className="bubble"></div>   
        <div className="bubble"></div>   
      </div>

      <div className="container-fluid px-3">
        <div className="row align-items-center min-vh-100">
          {/* Columna principal con el contenido */}
          <div className="col-lg-8 mx-auto text-center hero-content">
            
            {/* Saludo */}
            <h1 className="hero-title mb-3">
              Hola! Soy <span style={{color: '#FFD700'}}>Victoria Junco</span>
            </h1>
            
            {/* Título profesional */}
            <h2 className="hero-subtitle mb-4">
              Desarrolladora Full Stack
            </h2>
            
            {/* Descripción */}
            <p className="hero-description mb-4">
              Apasionada por crear aplicaciones web modernas y eficientes. 
              Especializada en tecnologías front-end y back-end, con conocimiento 
              en diferentes lenguajes de programación.
            </p>
            
            {/* Botones de acción */}
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
              <a href="#projects" className="btn-hero">
                Ver mis proyectos
              </a>
              <a href="#contact" className="btn-hero">
                Contáctame
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
