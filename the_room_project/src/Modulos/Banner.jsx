import Header from "./Header";
import "./Banner.css";
function Banner() {
  return (
    <>
      <div className="contenedor-banner">
        <Header></Header>
        <div className="banner-texto">
          <h1>La Mejor Experiencia de Streaming</h1>
          <p>
            StreamVibe es la mejor experiencia de streaming para ver tus
            películas y series favoritas online, cuando quieras y donde
            quieras.Con StreamVibe, puedes disfrutar de una gran variedad de
            contenido, incluyendo los últimos blockbuster, cine clásico, las
            series mas populares del momento, y más.
          </p>
          <a>
            <img src="./icon-play.png" alt="suscribete" />
            Empieza Ahora
          </a>
        </div>
      </div>
    </>
  );
}
export default Banner;
