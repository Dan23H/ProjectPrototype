import { useState } from "react"
import { TypeForm, HomeContent, Navbar } from "../components"
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../images/uao-2.png';

export const Home = ({name}) => {
    const [tipo, setTipo] = useState('PROFESORES')
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
                <TypeForm tipo={tipo} setTipo={setTipo} />
                <HomeContent tipo={tipo} />
            </div>
        </>
    )
}