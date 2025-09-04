import React from 'react'
import './AboutPortfolio.css'

const AboutPortfolio: React.FC = () => {
  return (
    <section id="about-portfolio" className="about-portfolio-section">
      <div className="container">
        
        {/* Título de la sección */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="about-portfolio-title">Acerca de Este Portfolio</h2>
            <p className="about-portfolio-subtitle">
              Tecnologías y herramientas utilizadas en el desarrollo de este proyecto.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            
            {/* Card principal */}
            <div className="card about-portfolio-card shadow-lg">
              <div className="card-body text-center">
                
                {/* Descripción */}
                <p className="fs-5 mb-4" style={{color: "#f8f2f6"}}>
                  Este portfolio fue desarrollado desde cero utilizando las siguientes tecnologías modernas:
                </p>
                
                {/* Grid de tecnologías */}
                <div className="row g-4 mb-5">
                  
                  {/* React */}
                  <div className="col-md-3 col-sm-6">
                    <div className="text-center">
                      <div className="bg-info bg-opacity-10 rounded-circle p-4 mb-3 mx-auto" style={{width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span className="about-portfolio-tech-icon">⚛️</span>
                      </div>
                      <h6 className="fw-bold text-white">React 18</h6>
                      <small className="text-light">Biblioteca JavaScript</small>
                    </div>
                  </div>
                  
                  {/* TypeScript */}
                  <div className="col-md-3 col-sm-6">
                    <div className="text-center">
                      <div className="bg-primary bg-opacity-10 rounded-circle p-4 mb-3 mx-auto" style={{width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span className="about-portfolio-tech-icon">📘</span>
                      </div>
                      <h6 className="fw-bold text-white">TypeScript</h6>
                      <small className="text-light">Tipado estático</small>
                    </div>
                  </div>
                  
                  {/* Vite */}
                  <div className="col-md-3 col-sm-6">
                    <div className="text-center">
                      <div className="bg-warning bg-opacity-10 rounded-circle p-4 mb-3 mx-auto" style={{width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span className="about-portfolio-tech-icon">⚡</span>
                      </div>
                      <h6 className="fw-bold text-white">Vite</h6>
                      <small className="text-light">Build tool rápido</small>
                    </div>
                  </div>
                  
                  {/* Bootstrap */}
                  <div className="col-md-3 col-sm-6">
                    <div className="text-center">
                      <div className="bg-success bg-opacity-10 rounded-circle p-4 mb-3 mx-auto" style={{width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span className="about-portfolio-tech-icon">🎨</span>
                      </div>
                      <h6 className="fw-bold text-white">Bootstrap 5</h6>
                      <small className="text-light">Framework CSS</small>
                    </div>
                  </div>
                  
                </div>
                
                {/* Características destacadas */}
                <div className="row mb-4">
                  <div className="col-12">
                    <h5 className="mb-3 text-white">✨ Características destacadas:</h5>
                    <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
                      <span className="about-portfolio-feature-badge">📱 Diseño Responsive</span>
                      <span className="about-portfolio-feature-badge">🚀 Carga Rápida</span>
                      <span className="about-portfolio-feature-badge">♿ Accesible</span>
                      <span className="about-portfolio-feature-badge">🎯 SEO Optimizado</span>
                      <span className="about-portfolio-feature-badge">🔧 Componentes Modulares</span>
                    </div>
                  </div>
                </div>
                
                {/* Botones de acción */}
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <a 
                    href="https://github.com/vic-jun/Mi-Portafolio.git" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-dark btn-lg"
                  >
                    🐙 Ver código fuente
                  </a>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default AboutPortfolio;