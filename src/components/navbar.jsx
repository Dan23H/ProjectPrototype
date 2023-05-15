import { Link } from "react-router-dom";
import logo from ".././images/logo.ico";
import "../../styles/Navbar.css";
import { useDispatch } from "react-redux";
import { startGoogleLogout } from "../actions/auth";

export const Navbar = () => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(startGoogleLogout())
  }
  return (
    <nav className="navigation">
      <div className="left-side">
        <img src={logo} alt="Logo" className="logo" />
        <div className="student"></div>
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
      <div className="right-side" style={{cursor:"pointer"}}>
        <span onClick={handleLogout}>Cerrar Sesion</span>
      </div>
    </nav>
  );
};
