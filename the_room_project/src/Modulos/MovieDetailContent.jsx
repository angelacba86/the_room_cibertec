import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { IoLanguage } from "react-icons/io5";
import { PiCirclesFour } from "react-icons/pi";

import "./MovieDetailContent.css";
function MovieDetailContent({ movie }) {
  const photoProfile = "https://i.pravatar.cc/150?img=";
  const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8];
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
            {arrayNum.map((num, index) => (
              <img
                src={`${photoProfile}${num}`}
                alt={`img-${num}`}
                key={index}
              />
            ))}
          </div>
          <div className="reviews">
            <h5>Reviews</h5>
            <div className="reviews-container">
              {movie.reviews?.map((review, index) => (
                <div className="review-card" key={index}>
                  <div className="review-card-head">
                    <div className="user-data">
                      <h6>{review.nombre}</h6>
                      <p>{review.pais}</p>
                    </div>
                    <div className="stars">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <small>{review.rating}</small>
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
            <div>
              <h5>
                <CiCalendar />
                Año de Lanzamiento
              </h5>
            </div>
            <p>{movie.year}</p>
          </div>
          <div className="seccion">
            <h5>
              <IoLanguage />
              Lenguajes Disponibles
            </h5>
            <div>
              {movie.lenguajesDisponibles?.map((lengua, i) => (
                <div key={i}>{lengua}</div>
              ))}
            </div>
          </div>
          <div className="seccion">
            <h5>
              <FaRegStar />
              Rating
            </h5>
            <div>
              <div className="rating-card">
                <h5>IMDB</h5>
                <div>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar /> <small>{movie.rating}</small>
                </div>
              </div>
              <div className="rating-card">
                <h5>The Room</h5>
                <div>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar /> <small>{movie.rating}</small>
                </div>
              </div>
            </div>
          </div>
          <div className="seccion">
            <h5>
              <PiCirclesFour></PiCirclesFour>
              Géneros
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
