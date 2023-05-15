import { Link, useNavigate } from "react-router-dom";
import logo from ".././images/logo.ico";
import "../../styles/Navbar.css";
import { useDispatch } from "react-redux";
import { startGoogleLogout } from "../actions/auth";

export const Navbar = ({ name }) => {
  const dispatch = useDispatch()
  const nav = useNavigate()
  const handleLogout = () => {

    dispatch(startGoogleLogout())
    nav("/")
  }
  return (
    <nav className="navigation">
      <div className="left-side">
        <img src={logo} alt="Logo" className="logo" />
        <div className="student">{name}</div>
      </div>
      <div className="center-side">
        <ul >
          <li>
            <Link to="/misAsesorias">
              <span style={{ cursor: "pointer" }}>Mis Asesorias</span>
            </Link>
          </li>
          <li>
            <Link to="/home">
              <span style={{ cursor: "pointer" }}>Asesorias Academicas</span>
            </Link>
          </li>
          <li>
            <div style={{ cursor: "pointer" }}>
              <span onClick={handleLogout}>Cerrar Sesion</span>
            </div>
          </li>
        </ul>
      </div>

    </nav>
  );
};
