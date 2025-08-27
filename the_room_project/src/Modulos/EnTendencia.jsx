import { useState } from "react";
import { Link } from "react-router-dom";
import "./EnTendencia.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { LuClock3, LuEye } from "react-icons/lu";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { allMovies } from "../scripts";

// Agrupa las películas por sección usando los datos reales
const seccionesPeliculas = [
  {
    titulo: "En Tendencia",
    peliculas: allMovies
      .filter((m) => m.poster?.startsWith("/trending/"))
      .map((m) => ({
        ...m,
        img: m.poster,
        duracion: `${Math.floor(m.duracion / 60)}h ${m.duracion % 60}min`,
        vistas: m.cantidadVistas,
      })),
  },
  {
    titulo: "Nuevos Lanzamientos",
    peliculas: allMovies
      .filter((m) => m.poster?.startsWith("/last_release/"))
      .map((m) => ({
        ...m,
        img: m.poster,
        duracion: `${Math.floor(m.duracion / 60)}h ${m.duracion % 60}min`,
        vistas: m.cantidadVistas,
        estrellas: m.rating,
        votos: m.cantidadVistas,
      })),
  },
  {
    titulo: "Películas más vistas",
    peliculas: allMovies
      .filter((m) => m.poster?.startsWith("/most_watched/"))
      .map((m) => ({
        ...m,
        img: m.poster,
        duracion: `${Math.floor(m.duracion / 60)}h ${m.duracion % 60}min`,
        estrellas: 4,
        votos: m.cantidadVistas,
      })),
  },
];

// Componente reutilizable para cada fila
function CarruselFila({ titulo, peliculas }) {
  // 👉 Para la fila “Películas más vistas” usamos 4 visibles y estilo XL
  const isGrande = titulo === "Películas más vistas";
  const ITEMS = isGrande ? 4 : 5;

  const maxStart = Math.max(0, peliculas.length - ITEMS);
  const calculatedDots =
    peliculas.length > ITEMS ? Math.min(3, maxStart + 1) : 1;

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
    setDotIndex(
      calculatedDots > 1 ? (d) => (d - 1 + calculatedDots) % calculatedDots : 0
    );
  };

  const handleDotClick = (i) => {
    setDotIndex(i);
    const jump =
      calculatedDots > 1
        ? Math.round((i * maxStart) / Math.max(1, calculatedDots - 1))
        : 0;
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
          <Link to={`/contenido/detalle/${peli.id}`} key={peli.id}>
            <div
              key={`${titulo}-${peli.id}`}
              className={`card1 ${isGrande ? "card--xl" : ""}`}
            >
              <div className="poster-content">
                  <img src={peli.img} alt={`Pelicula ${peli.id}`} />
              </div>

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
            </div>
          </Link>
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
