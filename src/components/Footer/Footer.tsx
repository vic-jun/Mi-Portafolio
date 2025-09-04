import React from "react";
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer-custom">
            <div className="container text-center py-4">
                <h5 className="footer-title mb-2">Victoria Junco</h5>
                <p className="footer-desc mb-3">
                    <span role="img" aria-label="rocket">🚀</span> Desarrolladora Full Stack apasionada por crear soluciones web innovadoras.
                </p>
                <hr className="footer-divider my-3" />
                <p className="footer-copy mb-0">
                    &copy; {new Date().getFullYear()} Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}

export default Footer;