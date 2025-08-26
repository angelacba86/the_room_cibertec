import "./Banner.css";
function Banner() {
  return (
    <>
      <div className="contenedor-banner">
        <div className="banner-texto">
          <h1>La Mejor Experiencia de Streaming</h1>
          <p>
            The Room es la mejor experiencia de streaming para ver tus
            películas y series favoritas online, cuando quieras y donde
            quieras.Con The Room, puedes disfrutar de una gran variedad de
            contenido, incluyendo los últimos blockbuster, cine clásico, las
            series mas populares del momento, y más.
          </p>
          <a href="#">
            <img src="./icon-play.png" alt="suscribete" />
            Empieza Ahora
          </a>
        </div>
      </div>
    </>
  );
}
export default Banner;
