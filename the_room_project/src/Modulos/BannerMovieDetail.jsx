import "./BannerMoviesDetail.css"
function BannerMovieDetail({ movie }) {
  if (!movie) return null;
  console.log(movie.banner)
  return (
    <div className="Contenedor-BannerMovies" style={{
        backgroundImage: `linear-gradient(
          to top,
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 0.85) 35%,
          rgba(0, 0, 0, 0.6) 60%,
          rgba(0, 0, 0, 0) 100%
        ), url(${movie.banner})`,
      }} >
      <div className="TextoBannerMovies">
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
      </div>
      <div className="botonesBanner">
        <a className="btnPlay">
          <img src="/icon-play.png" alt="play" /> Play Now
        </a>
        <a>
          <img src="/Icon+BanneMovies.png" alt="" />
        </a>
        <a>
          <img src="/IconLikeBanneMovies.png" alt="" />
        </a>
        <a>
          <img src="/IconAudioBanneMovies.png" alt="" />
        </a>
      </div>
    </div>
  );
}
export default BannerMovieDetail;
