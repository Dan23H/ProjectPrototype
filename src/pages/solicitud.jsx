import { Navbar, SolicitudContent } from "../components"
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../images/uao-2.png';
import { useContext } from "react";
import { InfoContext } from "../context/InfoContext";
import { InfoProvider } from "../context/InfoProvider";

export const Solicitud = ({ name }) => {
    const { info } = useContext(InfoContext)
    return (
        <>
            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
                textAlign: "center",
            }}>
                <Navbar name={name} info={info} />
                <InfoProvider>
                    <SolicitudContent />
                </InfoProvider>

            </div>
        </>
    )
}