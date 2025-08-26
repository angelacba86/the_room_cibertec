import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { IoLanguage } from "react-icons/io5";
import { PiCirclesFour } from "react-icons/pi";

import "./MovieDetailContent.css";
function MovieDetailContent() {
  const photoProfile = "https://i.pravatar.cc/150?img=";
  const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <div className="contenedor detail">
        <div className="detalles">
          <div className="descripcion">
            <h5>Descripción</h5>
            <p>
              A fiery young man clashes with an unflinching forest officer in a
              south Indian village where spirituality, fate and folklore rule
              the lands.
            </p>
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
            <div>
              <div className="review-card">
                <div className="review-card-head">
                  <div className="user-data">
                    <h6>Nombre</h6>
                    <p>Pais</p>
                  </div>
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <small>5</small>
                  </div>
                </div>
                <div className="review-card-body">
                  <p>
                    This movie was recommended to me by a very dear friend who
                    went for the movie by herself. I went to the cinemas to
                    watch but had a houseful board so couldn’t watch it.
                  </p>
                </div>
              </div>
              <div className="review-card">
                <div className="review-card-head">
                  <div className="user-data">
                    <h6>Nombre</h6>
                    <p>Pais</p>
                  </div>
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <small>5</small>
                  </div>
                </div>
                <div className="review-card-body">
                  <p>
                    This movie was recommended to me by a very dear friend who
                    went for the movie by herself. I went to the cinemas to
                    watch but had a houseful board so couldn’t watch it.
                  </p>
                </div>
              </div>
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
            <p>2025</p>
          </div>
          <div className="seccion">
            <h5>
              <IoLanguage />
              Lenguajes Disponibles
            </h5>
            <div>
              <div>Ingles</div>
              <div>Español</div>
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
                  <FaStar /> <small>4</small>
                </div>
              </div>
              <div className="rating-card">
                <h5>The Room</h5>
                <div>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar /> <small>4</small>
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
              <div>genero1</div>
              <div>genero2</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MovieDetailContent;
