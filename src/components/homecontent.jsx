import { Button } from 'react-bootstrap';
import "../../styles/Home.css"
import { useNavigate } from 'react-router-dom';


export const HomeContent = () => {
    const nav = useNavigate()

    const handleBuscar = (e) => {
        e.preventDefault()
        alert('En desarrollo')
    }

    const handleSolicitar = (e) => {
        e.preventDefault()
        nav("/solicitud")
    }
    
    return (
        <div className="box">
            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            <label className='red-label'>Asignatura</label>
                            <hr className='white-label' />
                            <select className="form-select" name="asignatura" id="asignatura">
                                <option value="Asignatura 1">Asignatura 1</option>
                                <option value="Asignatura 2">Asignatura 2</option>
                                <option value="Asignatura 3">Asignatura 3</option>
                                <option value="Asignatura 4">Asignatura 4</option>
                            </select>
                        </td>
                        <td>
                            <label className='red-label'>Asesor</label>
                            <hr className='white-label'/>
                            <select className="form-select" name="Asesor" id="Asesor">
                                <option value="Asesor 1">Asesor 1</option>
                                <option value="Asesor 2">Asesor 2</option>
                                <option value="Asesor 3">Asesor 3</option>
                                <option value="Asesor 4">Asesor 4</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Button className="button"variant="success" onClick={(event) => handleBuscar(event)}>Buscar</Button>
            <label className='red-label'>Horarios Disponibles</label>
            <br />
            <Button variant="success" onClick={(event) => handleSolicitar(event)}>Solicitar</Button>
        </div>
    )
}
