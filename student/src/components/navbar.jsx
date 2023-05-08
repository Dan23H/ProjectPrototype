import { Link } from "react-router-dom"
export const Navbar = ({data}) => {
    return (
        <div>
            <img src="" alt="Asesorías CEA (LOGO)" />
            <br />
            <Link to="/perfil">
                <label>Estudiante: </label>
            </Link>
            <br />
            <Link to="/agenda">
                <label>Mis Asesorías</label>
            </Link>
        </div>
    )
}