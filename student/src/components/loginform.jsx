import { useState } from "react"
import { fakedata } from "../assets/fakedata"
import { useNavigate } from "react-router-dom"

export const Loginform = () => {
    const [profile, setProfile] = useState('')
    const [password, setPassword] = useState('')
    
    const nav = useNavigate()

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
        const checking = fakedata.filter((usuario) => { return usuario.profile === profile && usuario.password === password })
        if (checking.length > 0) {
            console.log("El usuario y contraseña coinciden.");
            console.log(checking)
            nav("/home")
        } else {
            console.log("El usuario o contraseña son incorrectos");
        }
    }

    return (
        <div>
            <div>
                <input type="text" placeholder="Usuario" value={profile} onChange={(event) => handleProfile(event)} />
                <input type="password" placeholder="Contraseña" value={password} onChange={(event) => handlePassword(event)} />
                <button onClick={(event) => check(event)}>Acceder</button>
            </div>
        </div>
    )
}