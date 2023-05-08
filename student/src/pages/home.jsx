import { useState } from "react"
import { TypeForm, HomeContent, Navbar } from "../components"

export const Home = () => {
    const [type, setType] = useState('PROFESORES')
    return (
        <>  
            <Navbar />
            <TypeForm type={type} setType={setType} />
            <HomeContent type={type} />
        </>
    )
}