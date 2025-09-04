import React from 'react'
import fotoVic from '../../assets/foto-vic.jpg'
import './About.css'

const About: React.FC = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        
        {/* Título de la sección */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 fw-bold about-title">Sobre Mí</h2>
            <p className="lead about-subtitle">
              Conoce un poco más sobre mi trayectoria profesional.
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          
          {/* Columna izquierda - Imagen */}
          <div className="col-lg-6 mb-4 text-center">
            <div className="position-relative photo-container">
              {/* Tu foto real */}
              <img 
                src={fotoVic} 
                alt="Victoria - Desarrolladora Full Stack" 
                className="img-fluid rounded shadow-lg about-photo"
                style={{ maxWidth: '400px', width: '100%', aspectRatio: '1/1', objectFit: 'cover' }}
              />
              {/* Badge de disponibilidad con tooltip nativo */}
              <span 
                className="badge-available"
                title="Disponible para trabajar"
              >
                <span className="available-dot"></span>
                <span className="available-text">Disponible</span>
              </span>
            </div>
          </div>

          {/* Columna derecha - Información personal */}
          <div className="col-lg-6">
            <p className="mb-4 fs-5 about-text">
              Soy una <strong className="highlight-text">desarrolladora Full Stack</strong> entusiasmada por crear 
              soluciones tecnológicas innovadoras y eficientes.
            </p>
            <p className="mb-4 about-text">
              Me especializo en el desarrollo de aplicaciones web modernas, combinando 
              mi experiencia en tecnologías front-end y back-end para crear productos 
              digitales completos y escalables.
            </p>
            <p className="mb-4 about-text">
              Mi objetivo es seguir creciendo profesionalmente mientras contribuyo a 
              proyectos que generen un impacto positivo. Me encanta aprender nuevas 
              tecnologías y enfrentar desafíos que me permitan expandir mis habilidades y conocimientos.
            </p>
            
            {/* Botones de acción */}
            <div className="d-flex justify-content-center">
              <a href="/cv-junco.pdf" download="CV-Victoria-Junco.pdf" className="btn-custom-about" target="_blank" rel="noopener noreferrer">
                📄 Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
