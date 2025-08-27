import "./Footer.css";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <nav className="f-top">
          <div className="menu-link">
            <ul className="link">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/contenido">Peliculas</Link>
              </li>
              <li>
                <Link to="/contenido">Series</Link>
              </li>
              <li>
                <Link to="/soporte">Soporte</Link>
              </li>
            </ul>
          </div>

          <div className="social-wrap">
            <h3>Contactanos</h3>
            <div className="social">
              <a href="https://facebook.com">
                <img src="/Facebook.png" alt="Facebook" />
              </a>
              <a href="https://twitter.com">
                <img src="/Twitter.png" alt="Twitter" />
              </a>
              <a href="https://linkedin.com">
                <img src="/Linkedln.png" alt="Linkedln" />
              </a>
            </div>
          </div>
        </nav>

        <div className="f-bottom">
          <h3>© 2025 The Room, All Rights Reserved</h3>
          <div className="politicas">
            <a href="#">Terminos de uso</a>
            <a href="#">Politicas de Privacidad</a>
            <a href="#">Politicas de Cookkie</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
