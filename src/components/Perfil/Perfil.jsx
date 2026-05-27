import './Perfil.css';
const Perfil = () => {
    return (
        <section id="sobre-mi" className="sobre-mi-section">
            <div className="sobre-mi-container">
                <h2 className="section-title">Sobre mí</h2>
                <div className="sobre-mi-grid">
                    {/* =====================================
                        TARJETA 1: PERFIL PROFESIONAL
                    ====================================== */}
                    <div className="card">
                        <div className="card-header">
                            {/* Ícono de Usuario (SVG) */}
                            <div className="icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <h3>Perfil profesional</h3>
                        </div>
                        <p className="card-text">
                            Estudiante de Informática y Desarrollo de Páginas Web en SENATI, 
                            actualmente cursando el 3.er ciclo, con formación orientada al desarrollo de software y aplicaciones web. 
                            Cuento con conocimientos en tecnologías como React, Laravel, Node.js, HTML, CSS y MySQL para la creación de interfaces y sistemas web.
                            <br /><br />
                            Además, tengo experiencia en diseño de dashboards e interfaces mediante Figma, 
                            modelado de bases de datos SQL y automatización de tareas con Python, enfocado en desarrollar soluciones funcionales y 
                            mejorar procesos.
                        </p>
                    </div>
                    {/* =====================================
                        TARJETA 2: EDUCACIÓN
                    ====================================== */}
                    <div className="card">
                        <div className="card-header">
                            {/* Ícono de Educación / Sombrero (SVG) */}
                            <div className="icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                </svg>
                            </div>
                            <h3>Educación</h3>
                        </div>
                        <div className="timeline">
                            {/* Ítem de Educación 1 */}
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>Informatica y Desarrollo de Páginas Web</h4>
                                    <span className="badge badge-outline">En Curso</span>
                                </div>
                                <span className="timeline-date"> SENATI </span>
                            </div>
                            {/* Ítem de Educación 2 */}
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>Conceptos básicos de redes</h4>
                                    <span className="badge badge-outline">Titulado</span>
                                </div>
                                <span className="timeline-date">Cisco Networking Academy</span>
                            </div>
                            {/* Ítem de Educación 3 */}
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>Conceptos Básicos de Hardware de Computadora</h4>
                                    <span className="badge badge-outline">Titulado</span>
                                </div>
                                <span className="timeline-date">Cisco Networking Academy</span>
                            </div>
                            {/* Ítem de Educación 4 */}
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>Introducción al Internet de las Cosas y Transformación Digital</h4>
                                    <span className="badge badge-outline">Titulado</span>
                                </div>
                                <span className="timeline-date">Cisco Networking Academy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Perfil;