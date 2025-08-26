import "./BannerMoviesDetail.css"
function BannerMovieDetail() {
  return (
    <div className="Contenedor-BannerMovies">
      <div className="TextoBannerMovies">
        <h1>Avengers : Endgame</h1>
        <p>
          Con la ayuda de los aliados restantes, los Vengadores deben reunirse
          una vez más para deshacer las acciones de Thanos y deshacer el caos en
          el universo, sin importar las consecuencias que puedan aguardar y sin
          importar a quién se enfrenten... Vengar a los caídos.
        </p>
      </div>
      <div className="botonesBanner">
        <a className="btnPlay">
          <img src="./icon-play.png" alt="play" /> Play Now
        </a>
        <a>
          <img src="./Icon+BanneMovies.png" alt="" />
        </a>
        <a>
          <img src="./IconLikeBanneMovies.png" alt="" />
        </a>
        <a>
          <img src="./IconAudioBanneMovies.png" alt="" />
        </a>
      </div>.
    </div>
  );
}
export default BannerMovieDetail;
