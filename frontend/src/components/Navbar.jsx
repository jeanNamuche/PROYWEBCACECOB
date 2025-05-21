import './Navbar.css';
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg'; // Cambia esta ruta si tu logo está en otro lado
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Navbar() {
  return (
    <header>
      <div className="navbar-top">
        <p>Síguenos en nuestras redes!</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/CACECOBPiura/?locale=es_LA"><FaFacebookF /></a>
          <a href="https://www.instagram.com/cacecob.piura/?hl=es-la"><FaInstagram /></a>
          <a href="#"><FaWhatsapp /></a>
        </div>
      </div>

      <div className="navbar-main">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
          <h1>CACECOB</h1>
        </div>

        <nav>
          <ul>
            <li><Link to="/" className="active">Inicio</Link></li>
            <li><Link to="/cursos">Cursos</Link></li>
            <li><Link to="/talleres">Talleres</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/examenes">Examenes</Link></li>
            <li><Link to="/admin" className="nav-link">Admin</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
