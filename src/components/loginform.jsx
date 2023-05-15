import "../../styles/Login.css"
import backgroundImage from '../images/uao-1.png';
import img from '../images/logocentro.png';
import logo from "../images/logo.ico"
import google from "../images/google.png"
import { useDispatch } from "react-redux";
import { startGoogleAuth } from "../actions/auth";
import { useNavigate } from "react-router-dom";

const Loginform = () => {
    const nav = useNavigate()
    const dispatch = useDispatch()
    const wait = (seconds) => {
        return new Promise((resolve) => {
            setTimeout(resolve, seconds * 1000);
        });
    };

    const handleGoogleAuth = async () => {
        dispatch(startGoogleAuth())
        await wait(1)
        nav("/home")
    }

    return (
        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            textAlign: "center",
            opacity: "0.9",
        }}>
            <div className="left-side">
                <img src={logo} alt="Logo" className="logo" />

            </div>
            <div className="center">
                <h1 className="font">Asesorias Academicas</h1>
                <div className="img">
                    <img src={img} alt="Logo" />
                </div>
                <div style={{ marginTop: "25%" }} >
                    <button onClick={handleGoogleAuth}>Iniciar sesión {<img style={{ height: "20px" }} src={google} alt="google" />}</button>
                </div>
            </div>
        </div>
    )
}
export default Loginform