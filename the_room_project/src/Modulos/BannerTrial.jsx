import "./BannerTrial.css";
export default function BannerTrial() {
  return (
    <div className="contenedor">
      <div className="img-fondo">
        <div>
          <div className="texto-banner">
          <h2>¡Empieza tu prueba gratuita hoy!</h2>
          <p>
            Se trata de una llamada a la acción clara y concisa que anima a los usuarios a registrarse para obtener una prueba gratuita de StreamVibe.
          </p>
          </div>
          <button className="boton-trial">Start Free Trial</button>
        </div>
      </div>
    </div>
  );
}