import React from 'react'
import './Skills.css'

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        
        {/* Título de la sección */}
        <div className="row mb-5">
          <div className="col-12 text-center skills-title">
            <h2 className="display-5 fw-bold">Habilidades Técnicas</h2>
            <p className="lead skills-subtitle">
              Tecnologías y herramientas que domino para crear soluciones completas.
            </p>
          </div>
        </div>

        <div className="row g-4">
          
          {/* Front-end */}
          <div className="col-lg-4 col-md-6">
            <div className="card skill-card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <span className="category-icon">🎨</span>
                  <span className="badge category-badge">Frontend</span>
                </div>
                <h5 className="card-title skill-card-title">Desarrollo Frontend</h5>
                <p className="card-text skill-card-text">
                  Creación de interfaces modernas, responsivas e interactivas con las mejores prácticas de UX/UI.
                </p>
                <div className="d-flex flex-wrap">
                  <span className="badge tech-badge">HTML5</span>
                  <span className="badge tech-badge">CSS3</span>
                  <span className="badge tech-badge">JavaScript</span>
                  <span className="badge tech-badge">TypeScript</span>
                  <span className="badge tech-badge">React</span>
                  <span className="badge tech-badge">Bootstrap</span>
                  <span className="badge tech-badge">Angular</span>
                  <span className="badge tech-badge">Responsive Design</span>
                </div>
              </div>
            </div>
          </div>

          {/* Back-end */}
          <div className="col-lg-4 col-md-6">
            <div className="card skill-card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <span className="category-icon">⚙️</span>
                  <span className="badge category-badge">Backend</span>
                </div>
                <h5 className="card-title skill-card-title">Desarrollo Backend</h5>
                <p className="card-text skill-card-text">
                  Desarrollo de APIs robustas, bases de datos eficientes y arquitecturas escalables del lado del servidor.
                </p>
                <div className="d-flex flex-wrap">
                  <span className="badge tech-badge">Node.js</span>
                  <span className="badge tech-badge">Express</span>
                  <span className="badge tech-badge">APIs REST</span>
                  <span className="badge tech-badge">MySQL</span>
                  <span className="badge tech-badge">PHP</span>
                  <span className="badge tech-badge">.NET</span>
                  <span className="badge tech-badge">Spring</span>
                </div>
              </div>
            </div>
          </div>

          {/* Herramientas & DevOps */}
          <div className="col-lg-4 col-md-6">
            <div className="card skill-card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <span className="category-icon">🛠️</span>
                  <span className="badge category-badge">Herramientas</span>
                </div>
                <h5 className="card-title skill-card-title">Herramientas & DevOps</h5>
                <p className="card-text skill-card-text">
                  Manejo de herramientas de desarrollo, control de versiones y metodologías ágiles para trabajo en equipo.
                </p>
                <div className="d-flex flex-wrap">
                  <span className="badge tech-badge">Git</span>
                  <span className="badge tech-badge">GitHub</span>
                  <span className="badge tech-badge">VS Code</span>
                  <span className="badge tech-badge">Postman</span>
                  <span className="badge tech-badge">TDD</span>
                  <span className="badge tech-badge">NPM</span>
                  <span className="badge tech-badge">Vite</span>
                  <span className="badge tech-badge">XAMPP</span>
                  <span className="badge tech-badge">Figma</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Llamada a la acción */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <a href="#projects" className="btn-skills">
              Ver mis proyectos
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills
