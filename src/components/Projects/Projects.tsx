import React from "react";
import finanzapp from '../../assets/Finanzapp.jpg';
import ecommerce from '../../assets/E-commerce.jpg';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 fw-bold">Mis Proyectos</h2>
            <p className="lead projects-subtitle">
              Algunos de mis trabajos más destacados
            </p>
          </div>
        </div>
        
        {/* Grid de proyectos */}
        <div className="row g-4 justify-content-center">
          {/* Proyecto 1 */}
          {/*
          <div className="col-lg-4 col-md-6">
            <div className="card project-card h-100 shadow-sm border-0">
              <img 
                src="https://via.placeholder.com/400x250/007bff/ffffff?text=Portfolio+Personal" 
                className="card-img-top" 
                alt="Proyecto Portfolio Personal"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Portfolio Personal</h5>
                <p className="card-text text-muted">
                  Portfolio responsivo desarrollado con React y TypeScript. 
                  Incluye navegación smooth, formulario de contacto y diseño moderno.
                </p>
                
                <div className="mb-3">
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">TypeScript</span>
                  <span className="tech-badge">Bootstrap</span>
                </div>
                
                <div className="mt-auto d-flex gap-2">
                  <a 
                  href="#" 
                  className="btn btn-outline-dark btn-sm flex-fill"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    📂 Código
                  </a>
                  <a href="#" className="btn btn-primary btn-sm flex-fill">
                    👁️ Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
           */}

          {/* Proyecto 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="card project-card h-100 shadow-sm border-0">
              <img 
                src={finanzapp} 
                className="card-img-top" 
                alt="Aplicación de Finanzas"
                style={{ height: '300px', objectFit: 'cover' }}
              />
              
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">FinanzApp</h5>
                <p className="card-text text-muted">
                  Aplicación web para administrar tus finanzas personales y grupales. 
                  Permite visualizar estadísticas con gráficos de líneas y torta, establecer metas y recibir notificaciones (movimientos compartidos).
                </p>
                
                <div className="mb-3">
                  <span className="tech-badge">JavaScript</span>
                  <span className="tech-badge">Java</span>
                  <span className="tech-badge">Thymeleaf</span>
                  <span className="tech-badge">Spring</span>
                </div>
                
                <div className="mt-auto d-flex gap-2">
                  <a 
                  href="https://github.com/RamiroValdez/Trabajo_Practico_G10" 
                  className="btn btn-outline-dark btn-sm flex-fill"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    📂 Código
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Proyecto 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="card project-card h-100 shadow-sm border-0">
              <img 
                src={ecommerce}
                className="card-img-top" 
                alt="Tienda Online"
                style={{ height: '300px', objectFit: 'cover' }}
              />
              
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">E-commerce</h5>
                <p className="card-text text-muted">
                  Tienda online completa con carrito de compras, base de vistas para compras (sin funcionalidades), funcionalidad de filtrado.
                  Diseño responsive y moderno.
                </p>
                
                <div className="mb-3">
                  <span className="tech-badge">Angular</span>
                  <span className="tech-badge">Node</span>
                  <span className="tech-badge">TypeScript</span>
                  <span className="tech-badge">Prisma</span>
                </div>
                
                <div className="mt-auto d-flex gap-2">
                  <a 
                  href="https://github.com/Chud50/TpWeb2-Grupo17" 
                  className="btn btn-outline-dark btn-sm flex-fill"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    📂 Código
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;