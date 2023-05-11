import { Link } from "react-router-dom";
import logo from ".././images/logo.ico";
import "../../styles/Navbar.css";

export const Navbar = ({ data }) => {
  return (
    <nav className="navigation">
      <div className="left-side">
        <img src={logo} alt="Logo" className="logo" />
        <div className="student">Estudiante: {data}</div>
      </div>
      <div className="center-side">
        <ul>
          <li>
            <Link to="/misAsesorias">
              <a>Mis Asesorias</a>
            </Link>
          </li>
          <li>
            <Link to="/home">
              <a>Asesorias Academicas</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="right-side">
        <Link to="/">
          <a>Cerrar Sesion</a>
        </Link>
      </div>
    </nav>
  );
};
