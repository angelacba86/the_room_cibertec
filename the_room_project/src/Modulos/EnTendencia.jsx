import { useState } from "react";
import { Link } from "react-router-dom";
import "./EnTendencia.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { LuClock3, LuEye } from "react-icons/lu";
import { MdOutlineStarPurple500 } from "react-icons/md";

// Datos de películas por sección
const seccionesPeliculas = [
  {
    titulo: "En Tendencia",
    peliculas: [
      { id: 1, img: "/cards/card1.png", duracion: "1h 30min", vistas: "2k" },
      { id: 2, img: "/cards/card2.png", duracion: "1h 57min", vistas: "1.5k" },
      { id: 3, img: "/cards/card3.png", duracion: "2h 10min", vistas: "1.8k" },
      { id: 4, img: "/cards/card4.png", duracion: "1h 15min", vistas: "1.4k" },
      { id: 5, img: "/cards/card5.png", duracion: "2h 10min", vistas: "7k" },
      { id: 6, img: "/cards/card6.png", duracion: "1h 55min", vistas: "4k" },
      { id: 7, img: "/cards/card7.png", duracion: "2h 10min", vistas: "1.5k" },
      { id: 8, img: "/cards/card8.png", duracion: "1h 50min", vistas: "1.4k" },
    ],
  },
  {
    titulo: "Nuevos Lanzamientos",
    peliculas: [
      { id: 1, img: "/cards/cardNL1.png", duracion: "1h 40min", vistas: "5k" },
      { id: 2, img: "/cards/cardNL2.png", duracion: "2h 00min", vistas: "3.2k" },
      { id: 3, img: "/cards/cardNL3.png", duracion: "1h 50min", vistas: "4k" },
      { id: 4, img: "/cards/cardNL4.png", duracion: "2h 15min", vistas: "2.5k" },
      { id: 5, img: "/cards/cardNL5.png", duracion: "1h 35min", vistas: "6k" },
      { id: 6, img: "/cards/cardNL6.png", duracion: "2h 05min", vistas: "3k" },
      { id: 7, img: "/cards/cardNL7.png", duracion: "1h 25min", vistas: "1.5k" },
      { id: 8, img: "/cards/cardNL8.png", duracion: "2h 25min", vistas: "1.8k" },
    ],
  },
  {
    titulo: "Películas más vistas",
    peliculas: [
      { id: 1, img: "/cards/cardPMM1.png", duracion: "1h 57min", estrellas: 4, votos: "20k" },
      { id: 2, img: "/cards/cardPMM2.png", duracion: "1h 30min", estrellas: 4, votos: "20k" },
      { id: 3, img: "/cards/cardPMM3.png", duracion: "1h 42min", estrellas: 4, votos: "20k" },
      { id: 4, img: "/cards/cardPMM4.png", duracion: "2h 10min", estrellas: 4, votos: "20k" },
      { id: 5, img: "/cards/cardPMV5.png", duracion: "2h 10min", estrellas: 4, votos: "20k" },
      { id: 6, img: "/cards/cardPMV6.png", duracion: "2h 10min", estrellas: 4, votos: "20k" },
      { id: 7, img: "/cards/cardPMV7.png", duracion: "2h 10min", estrellas: 4, votos: "20k" },
    ],
  },
];

// Componente reutilizable para cada fila
function CarruselFila({ titulo, peliculas }) {
  // 👉 Para la fila “Películas más vistas” usamos 4 visibles y estilo XL
  const isGrande = titulo === "Películas más vistas";
  const ITEMS = isGrande ? 4 : 5;

  const maxStart = Math.max(0, peliculas.length - ITEMS);
  const calculatedDots = peliculas.length > ITEMS ? Math.min(3, maxStart + 1) : 1;

  const [startIndex, setStartIndex] = useState(0);
  const [dotIndex, setDotIndex] = useState(0);

  const handleNext = () => {
    const nextStart = startIndex + 1 <= maxStart ? startIndex + 1 : 0;
    setStartIndex(nextStart);
    setDotIndex(calculatedDots > 1 ? (d) => (d + 1) % calculatedDots : 0);
  };

  const handlePrev = () => {
    const prevStart = startIndex - 1 >= 0 ? startIndex - 1 : maxStart;
    setStartIndex(prevStart);
    setDotIndex(calculatedDots > 1 ? (d) => (d - 1 + calculatedDots) % calculatedDots : 0);
  };

  const handleDotClick = (i) => {
    setDotIndex(i);
    const jump = calculatedDots > 1 ? Math.round((i * maxStart) / Math.max(1, calculatedDots - 1)) : 0;
    setStartIndex(jump);
  };

  const visibles = peliculas.slice(startIndex, startIndex + ITEMS);

  return (
    <div className={`EnTendencia ${isGrande ? "grande" : ""}`}>
      <div className="titulo-flechas">
        <h3>{titulo}</h3>
        <div className="flechas">
          <GoArrowLeft className="icono-flecha" onClick={handlePrev} />
          <div className="botones">
            {Array.from({ length: calculatedDots }).map((_, i) => (
              <button
                key={i}
                type="button"
                className={i === dotIndex ? "active" : ""}
                onClick={() => handleDotClick(i)}
                aria-label={`Indicador ${i + 1}`}
              />
            ))}
          </div>
          <GoArrowRight className="icono-flecha" onClick={handleNext} />
        </div>
      </div>

      <div className="contenedor-card">
        {visibles.map((peli) => (
            <Link to="/contenido/detalle">
          <div
            key={`${titulo}-${peli.id}`}
            className={`card1 ${isGrande ? "card--xl" : ""}`}
          >
            <a href="#">
              <img src={peli.img} alt={`Pelicula ${peli.id}`} />
            </a>

            <div className="duracion">
              <div className="tiempo">
                <LuClock3 size={isGrande ? 20 : 18} color="#555" />
                <p>{peli.duracion}</p>
              </div>

              {"estrellas" in peli ? (
                <div className="estrellas">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <MdOutlineStarPurple500
                      key={idx}
                      color={idx < (peli.estrellas ?? 0) ? "red" : "#aaa"}
                      size={isGrande ? 22 : 18}
                    />
                  ))}{" "}
                  <span>{peli.votos ?? ""}</span>
                </div>
              ) : (
                <div className="vista">
                  <LuEye size={isGrande ? 20 : 18} color="#555" />
                  <p>{peli.vistas}</p>
                </div>
              )}
            </div>
          </div></Link>
        ))}
      </div>
    </div>
  );
}

// Componente principal que genera todas las filas
function EnTendencia() {
  return (
    <div className="contenedor1">
      {seccionesPeliculas.map((seccion, i) => (
        <CarruselFila
          key={seccion.titulo || i}
          titulo={seccion.titulo}
          peliculas={seccion.peliculas}
        />
      ))}
    </div>
  );
}

export default EnTendencia;


