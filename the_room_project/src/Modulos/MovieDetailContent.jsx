import { CiCalendar } from "react-icons/ci";
import { IoLanguage } from "react-icons/io5";
import { PiCirclesFour } from "react-icons/pi";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";

import "./MovieDetailContent.css";

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      // Estrella llena
      stars.push(<FaStar key={i} color="red" />);
    } else if (rating >= i - 0.5) {
      // Media estrella
      stars.push(<FaStarHalfAlt key={i} color="red" />);
    } else {
      // Estrella vacía
      stars.push(<FaRegStar key={i} color="red" />);
    }
  }
  return stars;
};
function MovieDetailContent({ movie }) {
  const avatarUrl = "https://ui-avatars.com/api/?name="; // 👈 también faltaba el "="

  return (
    <>
      <div className="contenedor detail">
        <div className="detalles">
          <div className="descripcion">
            <h5>Descripción</h5>
            <p>{movie.description}</p>
          </div>
          <div className="cast">
            <h5>Cast</h5>
            <div className="actors-list">
              {movie.cast?.map((actor, index) => (
                <div key={index} className="actor">
                  <img src={`${avatarUrl}${actor}`} alt={actor} />
                  <small>{actor}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="reviews">
            <div className="reviews-head">
              <h5>Reviews</h5>
              <a href="#">
                <FaPenToSquare />
                Dejar Comentario
              </a>
            </div>

            <div className="reviews-container">
              {movie.reviews?.map((review, index) => (
                <div className="review-card" key={index}>
                  <div className="review-card-head">
                    <div className="user-data">
                      <h6>{review.nombre}</h6>
                      <p>{review.pais}</p>
                    </div>
                    <div className="stars">
                      {renderStars(review.calificacion)}
                      <small>{review.calificacion}</small>
                    </div>
                  </div>
                  <div className="review-card-body">
                    <p>{review.mensaje}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="general">
          <div className="seccion">
            <h5>
              <CiCalendar /> Año de Lanzamiento
            </h5>
            <p>{movie.year}</p>
          </div>

          <div className="seccion">
            <h5>
              <IoLanguage /> Lenguajes Disponibles
            </h5>
            <div>
              {movie.lenguajesDisponibles?.map((lengua, i) => (
                <div key={i}>{lengua}</div>
              ))}
            </div>
          </div>

          <div className="seccion">
            <h5>
              <FaRegStar /> Rating
            </h5>
            <div>
              <div className="rating-card">
                <h5>IMDB</h5>
                <div>
                  {renderStars(movie.rating)}
                  <small>{movie.rating}</small>
                </div>
              </div>
              <div className="rating-card">
                <h5>The Room</h5>
                <div>
                  {renderStars(movie.rating)} <small>{movie.rating}</small>
                </div>
              </div>
            </div>
          </div>

          <div className="seccion">
            <h5>
              <PiCirclesFour /> Géneros
            </h5>
            <div>
              {movie.generos?.map((genre, i) => (
                <div key={i}>{genre}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetailContent;
