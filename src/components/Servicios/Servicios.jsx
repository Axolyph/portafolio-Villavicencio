import './Servicios.css';

const Servicios = () => {
    const serviciosData = [
        {
            id: 1,
            titulo: "Diseño UI/UX",
            descripcion: "Creación de prototipos interactivos, wireframes y wireflows modernos utilizando Figma y Adobe XD orientados a la experiencia de usuario.",
            icono: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="M12 6v12M6 12h12"></path>
                </svg>
            )
        },
        {
            id: 2,
            titulo: "Desarrollo Web Frontend",
            descripcion: "Construcción de aplicaciones web interactivas y responsivas usando React, JavaScript, HTML5 y CSS3 (Flexbox/Grid).",
            icono: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
            )
        },
        {
            id: 3,
            titulo: "Bases de Datos y Backend",
            descripcion: "Diseño de esquemas relacionales, gestión de datos y persistencia utilizando SQL, control de versiones con Git y despliegues en GitHub.",
            icono: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
                </svg>
            )
        }
    ];

    return (
        <section id="servicios" className="servicios-section">
            <div className="servicios-container">
                <h2 className="section-title">Mis Servicios</h2>
                <div className="servicios-grid">
                    {serviciosData.map((servicio) => (
                        <div key={servicio.id} className="servicio-card">
                            <div className="servicio-icon-box">
                                {servicio.icono}
                            </div>
                            <h3>{servicio.titulo}</h3>
                            <p>{servicio.descripcion}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Servicios;