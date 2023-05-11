import { useState } from "react"
import { TypeForm, HomeContent, Navbar } from "../components"
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../images/uao-2.png';

export const Home = () => {
    const [type, setType] = useState('PROFESORES')
    return (
        <>
            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
                textAlign: "center",
            }}>
                <Navbar />
                <TypeForm type={type} setType={setType} />
                <HomeContent type={type} />
            </div>
        </>
    )
}