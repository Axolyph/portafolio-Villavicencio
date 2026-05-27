import './Certificados.css';
const Certificados = () => {
    const certificadosData = [
        {
            id: 1,
            titulo: "Conceptos básicos de redes",
            institucion: "Cisco Networking Academy",
            fecha: "AÑO: 2025",
            estado: "Completado",
            link: "https://drive.google.com/file/d/1YlCBtiN0JCCPY9vlJx7eyt2145vz0akc/view?usp=sharing"
        },
        {
            id: 2,
            titulo: "Conceptos Básicos de Hardware de Computadora",
            institucion: "Cisco Networking Academy",
            fecha: "AÑO: 2025",
            estado: "Completado",
            link: "https://drive.google.com/file/d/1cW6RP0fKERYNbgA80l8eRuL-EBQrHfED/view?usp=sharing"
        },
        {
            id: 3,
            titulo: "Introducción a la Ciencia de Datos",
            institucion: "Cisco Networking Academy",
            fecha: "AÑO: 2025",
            estado: "Completado",
            link: "https://drive.google.com/file/d/1gjVZQSDCEFLxDa9DjBuVCsulExzPvse/view?usp=sharing"
        },
        {
            id: 4,
            titulo: "Introducción al Internet de las Cosas y Transformación Digital",
            institucion: "Cisco Networking Academy",
            fecha: "AÑO: 2025",
            estado: "Completado",
            link: "https://drive.google.com/file/d/16URJdb7ABntFvo5ycLvzhZeffEnuJTLD/view?usp=sharing"
        }
    ];

    return (
        <section id="certificados" className="certificados-section">
            <div className="certificados-container">
                <h2 className="section-title">Certificaciones y Logros</h2>
                <div className="certificados-grid">
                    {certificadosData.map((cert) => (
                        <div key={cert.id} className="certificado-card">
                            <div className="cert-header">
                                <span className={`cert-badge ${cert.estado === 'Completado' ? 'badge-complete' : 'badge-process'}`}>
                                    {cert.estado}
                                </span>
                                <span className="cert-date">{cert.fecha}</span>
                            </div>
                            <h3>{cert.titulo}</h3>
                            <p className="cert-inst">{cert.institucion}</p>

                            {/* Contenedor del botón ajustado para Google Drive */}
                            <div className="cert-download-container">
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-download"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="download-icon">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                    Ver Certificado
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificados;