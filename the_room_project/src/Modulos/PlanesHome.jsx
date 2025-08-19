import "./PlanesHome.css";

function PlanesHome() {
    return (
        <div className="contenedor-titulos">
            <div className="titulo">
                <h2>Elige el plan adecuado para ti</h2>
                <p>
                    Únete a StreamVibe y elige entre nuestras flexibles opciones de suscripción, adaptadas a tus preferencias. ¡Prepárate para entretenimiento sin límites!
                </p>
            </div>
            <div className="planes">
                <div className="plan">
                    <div className="detallePlan">
                        <h3>Plan Basico</h3>
                        <p>
                            Disfruta de una amplia biblioteca de películas y programas, con una variedad de contenido, incluidos títulos de reciente lanzamiento.
                        </p>
                    </div>
                    <div className="precio">
                        <h2>$9.99</h2>
                        <p>
                            /mes
                        </p>
                    </div>
                    <div className="botons">
                        <a href="#" id="BotonNegro">Comience una prueba gratuita</a>
                        <a href="#">Elige un Plan</a>
                    </div>
                </div>
                <div className="plan">
                    <div className="detallePlan">
                        <h3>Plan Estandar</h3>
                        <p>
                            Acceso a una selección más amplia de películas y programas, incluyendo la mayoría de los estrenos y contenido exclusivo.
                        </p>
                    </div>
                    <div className="precio">
                        <h2>$12.99</h2>
                        <p>
                            /mes
                        </p>
                    </div>
                    <div className="botons">
                        <a href="#" id="BotonNegro">Comience una prueba gratuita</a>
                        <a href="#">Elige un Plan</a>
                    </div>
                </div>
                <div className="plan">
                    <div className="detallePlan">
                        <h3>Plan Premiun</h3>
                        <p>
                            Acceso a la más amplia selección de películas y programas, incluyendo todos los estrenos y la posibilidad de ver sin conexión.
                        </p>
                    </div>
                    <div className="precio">
                        <h2>$14.99 </h2>
                        <p>
                            /mes
                        </p>
                    </div>
                    <div className="botons">
                        <a href="#" id="BotonNegro">Comience una prueba gratuita</a>
                        <a href="#">Elige un Plan</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PlanesHome;
