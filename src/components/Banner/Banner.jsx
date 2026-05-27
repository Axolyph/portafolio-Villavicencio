import './Banner.css';
import miFoto from '../../assets/miFoto.png';
const Banner = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                {/* 1. Etiqueta de Estado (Badge) */}
                <div className="status-badge">
                    <span className="status-dot"></span>
                    Disponible para nuevos proyectos
                </div>
                {/* 2. Foto de Perfil Circular */}
                <div className="profile-photo-container">
                    {/* Reemplazar src con {miFoto} cuando importen su imagen local*/}
                    <img
                        src={miFoto}
                        alt="Foto de Perfil"
                        className="profile-photo"
                    />
                </div>
                {/* 3. Título Principal */}
                <h1 className="hero-title">
                    Fabian <br />
                    <span className="text-cyan">Chavez</span>
                </h1>
                {/* 4. Subtítulo (Rol) */}
                <h2 className="hero-subtitle">
                    ESTUDIANTE DE 3ER CICLO DE DESARROLLO DE PÁGINAS WEB EN SENATI </h2>
                {/* 5. Descripción */}
                <p className="hero-description">
                    Desarrollo aplicaciones y páginas web responsivas utilizando tecnologías como React, Laravel, Node.js, 
                    HTML, CSS y MySQL. Me enfoco en crear soluciones funcionales, interfaces intuitivas y 
                    proyectos que aporten una mejor experiencia digital.
                </p>
                {/* 6. Botones de Acción */}
                <div className="hero-buttons">
                    <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>

                    <a href="#contacto" className="btn btn-secondary">Contáctame</a>

                </div>
            </div>
            {/* 7. Indicador de Scroll (Flecha animada hacia abajo) */}
            <div className="scroll-indicator">
                ↓
            </div>
        </section>
    );
};
export default Banner;