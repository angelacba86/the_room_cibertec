import "./Header.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      <header className={isHome ? "header header-home" : "header header-default"}>
        <img src="./logo.png" alt="The Room" />
        <nav>
          <ul className="nav-header">
            <Link to="/" className={location.pathname==="/" ? "active":"" }>
              <li>Inicio</li>
            </Link>
            <Link to="/contenido" className={location.pathname==="/contenido" ? "active":"" }>
              <li>Películas y Series</li>
            </Link>
            <Link to="/soporte" className={location.pathname==="/soporte" ? "active":"" }>
              <li>Soporte</li>
            </Link>
          </ul>
        </nav>
        <div className="usuario">
          <a href="#">
            <img src="./icon-nav.svg" alt="buscar" />
          </a>
          <a href="#">
            <img src="./icon-nav2.svg" alt="novedades" />
          </a>
          <a href="#">
            <img src="./icon-nav3.svg" alt="usuario" />
          </a>
        </div>
      </header>
    </>
  );
}
export default Header;
