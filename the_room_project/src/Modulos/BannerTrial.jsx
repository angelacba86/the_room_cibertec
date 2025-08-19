import "./BannerTrial.css";
export default function BannerTrial() {
  return (
    <div className="contenedor">
      <div className="img-fondo">
        <div>
          <div className="texto-banner">
          <h2>Start your free trial today!</h2>
          <p>
            This is a clear and concise call to action that encourages users to
            sign up for a free trial of StreamVibe.
          </p>
          </div>
          <button className="boton-trial">Start Free Trial</button>
        </div>
      </div>
    </div>
  );
}