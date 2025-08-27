import BannerMovieDetail from "../Modulos/BannerMovieDetail";
import MovieDetailContent from "../Modulos/MovieDetailContent";
import BannerTrial from "../Modulos/BannerTrial";
import { useParams } from "react-router-dom";
import { allMovies } from "../scripts";

function MovieDetail() {
  const { id } = useParams();
  const movie = allMovies.find((mov) => mov.id === id);
  if (!movie) return <div>Pagina no encontrada</div>;
  return (
    <>
      <BannerMovieDetail movie={movie}/>
      <MovieDetailContent movie={movie}/>
      <BannerTrial/>
    </>
  );
}
export default MovieDetail;
