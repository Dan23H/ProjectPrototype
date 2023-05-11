import { useContext, useState } from "react"
import { fakedata } from "../assets/fakedata"
import { useNavigate } from "react-router-dom"
import "../../styles/Login.css"
import backgroundImage from '../images/uao-1.png';
import img from '../../src/images/logocentro.png';
import logo from "../../src/images/logo.ico"
import { UserContext } from "../App";

export const Loginform = () => {
    const [profile, setProfile] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const nav = useNavigate()
    const {setUser} = useContext(UserContext)

    const handleProfile = (e) => {
        e.preventDefault()
        setProfile(e.target.value)
    }

    const handlePassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    const check = (e) => {
        e.preventDefault()
        if (profile === '' || password === '') {
            setErrorMessage('Por favor, llene todos los campos.')

        } else {
            const checking = fakedata.filter((usuario) => { return usuario.profile === profile && usuario.password === password })
            if (checking.length > 0) {
                console.log("El usuario y contraseña coinciden.");
                setUser(checking)
                nav("/home")
            } else {
                setProfile('')
                setPassword('')
                setErrorMessage('El usuario o contraseña son incorrectos.')
            }
        }
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
                <form method="post">
                    <div className="txt_field">
                        <input type="text" required value={profile} onChange={(event) => handleProfile(event)} />
                        <span></span>
                        <label>Usuario</label>
                    </div>
                    <div className="txt_field">
                        <input type="password" required value={password} onChange={(event) => handlePassword(event)} color="white" />
                        <span></span>
                        <label>Contraseña</label>
                    </div>
                    <p className="errorMessage">{errorMessage}</p>
                    <button className="submitButton" onClick={(event) => check(event)} >Ingresar</button>

                </form>
            </div>
        </div>
    )
}
