import { Routes, Route } from "react-router-dom";
import Home from "./Paginas/Home";
import Movies from "./Paginas/Movies";
import MovieDetail from "./Paginas/MovieDetail";
import Suscripcion from "./Paginas/Suscripcion";
import Soporte from "./Paginas/Soporte";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contenido" element={<Movies />}></Route>
      <Route path="/contenido/detalle/:id" element={<MovieDetail />}></Route>
      <Route path="/suscripcion" element={<Suscripcion />}></Route>
      <Route path="/soporte" element={<Soporte />}></Route>
    </Routes>
  );
}
export default RoutesApp;
