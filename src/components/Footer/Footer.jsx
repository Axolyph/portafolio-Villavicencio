import './Footer.css';

const Footer = () => {
    const añoActual = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {añoActual} <span className="text-cyan">Fabian</span> Chavez. Todos los derechos reservados.</p>
                <div className="footer-socials">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;