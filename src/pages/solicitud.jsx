import { Navbar, SolicitudContent } from "../components"
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../images/uao-2.png';

export const Solicitud = ({name}) => {
    return (
        <>
            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
                textAlign: "center",
            }}>
                <Navbar name={name}/>
                <SolicitudContent />
            </div>
        </>
    )
}