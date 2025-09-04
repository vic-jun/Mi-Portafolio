import React from "react";
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="row align-items-center min-vh-100">
                    {/* Columna principal con el contenido */}
                    <div className="col-lg-8 mx-auto text-center">
                        
                        {/* Título principal */}
                        <h2 className="display-4 fw-bold mb-3">
                            ¡Hablemos!
                        </h2>
                        
                        {/* Subtítulo */}
                        <h3 className="h4 text-muted mb-4">
                            Conecta conmigo
                        </h3>
                        
                        {/* Descripción */}
                        <p className="lead mb-3 contact-description">
                            ¿Interesado en trabajar conmigo? 
                            Estoy siempre abierta a nuevas oportunidades y colaboraciones.
                            No dudes en contactarme a través de cualquiera de estos medios.
                        </p>
                        
                        {/* Información de contacto */}
                        <div className="row g-4 mb-5">
                            {/* Email */}
                            <div className="col-md-6">
                                <div className="contact-item">
                                    <div className="fs-1 text-primary mb-3">📧</div> 
                                    <h5>Email</h5>
                                    <a href="mailto:victooriaajunco@gmail.com" className="text-decoration-none">
                                        victooriaajunco@gmail.com
                                    </a>
                                </div>
                            </div>
                            
                            {/* Teléfono */}
                            <div className="col-md-6">
                                <div className="contact-item">
                                    <div className="fs-1 text-primary mb-3">📱</div>
                                    <h5>Teléfono</h5>
                                    <a href="tel:+5491149891312" className="text-decoration-none">
                                        +54 9 11 4989-1312
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        {/* Redes sociales */}
                        <div className="mb-5 mt-5">
                            <h5 className="mb-4">Sígueme en</h5>
                            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
                                <a 
                                    href="https://www.linkedin.com/in/victoria-junco-5409b022b/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="btn btn-outline-primary btn-lg"
                                >
                                    <span className="me-2">💼</span>
                                    LinkedIn
                                </a>
                                <a 
                                    href="https://github.com/vic-jun" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="btn btn-outline-primary btn-lg"
                                >
                                    <span className="me-2">🐙</span>
                                    GitHub
                                </a>
                            </div>
                        </div>
                        
                   </div>
               </div>
            </div>
        </section>
    );
}

export default Contact;