import { Link } from "react-router-dom";
import logo from ".././images/logo.ico";
import "../../styles/Navbar.css";
import { useContext } from "react";
import { UserContext } from "../App";

export const Navbar = () => {
  const { user } = useContext(UserContext)
  return (
    <nav className="navigation">
      <div className="left-side">
        <img src={logo} alt="Logo" className="logo" />
        <div className="student">Estudiante: {user}</div>
      </div>
      <div className="center-side">
        <ul>
          <li>
            <Link to="/misAsesorias">
              <span>Mis Asesorias</span>
            </Link>
          </li>
          <li>
            <Link to="/home">
              <span>Asesorias Academicas</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="right-side">
        <Link to="/">
          <span>Cerrar Sesion</span>
        </Link>
      </div>
    </nav>
  );
};
