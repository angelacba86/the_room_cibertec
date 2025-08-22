import React, { useState } from "react";
import "./BannerMovies.css";

const movies = [
  {
    title: "Avengers : Endgame",
    description:
      "Con la ayuda de los aliados restantes, los Vengadores deben reunirse una vez más para deshacer las acciones de Thanos y deshacer el caos en el universo, sin importar las consecuencias que puedan aguardar y sin importar a quién se enfrenten... Vengar a los caídos.",
    background: "url('/banner_movie01.png')",
  },
  {
    title: "Las guerreras K-pop",
    description:
      "Un supergrupo de k-pop usa sus poderes secretos para proteger a sus fans de amenazas sobrenaturales y de una banda rival de chicos decididos a robar corazones y mentes.",
    background: "url('/banner_movie02.png')",
  },
  {
    title: "Karate Kid: Leyendas",
    description:
      "Daniel llega a Beijing y descubre que Han tiene un nuevo protegido, Li Fong. Los dos mentores deben colaborar y ajustar enfoques educativos para preparar a Li Fong.",
    background: "url('/banner_movie03.png')", 
  },
  {
    title: "La hora de la desaparición",
    description:
      "Cuando todos menos uno de los niños de la misma clase desaparecen misteriosamente en la misma noche, a la comunidad le queda preguntarse quién o qué está detrás de su desaparición.La película está protagonizada por Josh Brolin, Julia Garner, Alden Ehrenreich, Austin Abrams, Cary Christopher, junto con Benedict Wong y Amy Madigan.",
    background: "url('/banner_movie04.png')",
  },
];

function BannerMovies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMovie = movies[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="Contenedor-BannerMovies"
      style={{
        backgroundImage: `linear-gradient(
          to top,
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 0.85) 35%,
          rgba(0, 0, 0, 0.6) 60%,
          rgba(0, 0, 0, 0) 100%
        ), ${currentMovie.background}`,
      }}
    >
      <div className="TextoBannerMovies">
        <h1>{currentMovie.title}</h1>
        <p>{currentMovie.description}</p>
      </div>

      <div className="botonesBanner">
        <a className="btnPlay">
          <img src="/icon-play.png" alt="play" /> Play Now
        </a>
        <a>
          <img src="/Icon+BanneMovies.png" alt="info" />
        </a>
        <a>
          <img src="/IconLikeBanneMovies.png" alt="like" />
        </a>
        <a>
          <img src="/IconAudioBanneMovies.png" alt="audio" />
        </a>
      </div>

      <div className="nav-buttons">
        <a className="arrow-left" onClick={handlePrev}>←</a>

        <div className="image-index">
          {movies.map((_, index) => (
            <span
              key={index}
              className={`index-box ${index === currentIndex ? "active" : ""}`}
            />
          ))}
        </div>

        <a className="arrow-right" onClick={handleNext}>→</a>
      </div>
    </div>
  );
}

export default BannerMovies;
