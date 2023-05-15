import { Link } from "react-router-dom"
export const Loading = ({isLogginIn}) => {
    const handleError = () => {
        alert('La autenticación ha sido interrumpida.')
    }
    return (
        <>
            <h5>Cargando...</h5>
            {isLogginIn ? <Link to="/home"><small>Si no redirecciona automáticamente, clickéame</small></Link> : <Link to="/"><small onClick={handleError}>Si no redirecciona automáticamente, clickéame</small></Link>}
            
        </>

    )
}