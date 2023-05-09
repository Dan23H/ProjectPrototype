import { useContext, useState } from "react"
import { TypeForm, HomeContent, Navbar } from "../components"
import { UserContext } from "../context/UserContext"

export const Home = () => {
    const [type, setType] = useState('PROFESORES')
    const { user } = useContext(UserContext)
    return (
        <>  
            <Navbar data={user}/>
            <TypeForm type={type} setType={setType} />
            <HomeContent type={type} />
        </>
    )
}