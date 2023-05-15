import { Button } from 'react-bootstrap';
import "../../styles/Home.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export const HomeContent = () => {
    const [asignatura, setAsignatura] = useState("")
    const [asesor, setAsesor] = useState("")
    const [horario, setHorario] = useState("")
    const nav = useNavigate()
    const handleAsignatura = (e) => {
        setAsignatura(e.target.value)
    }
    const handleAsesor = (e) => {
        setAsesor(e.target.value)
    }
    const handleHorario = (e) => {
        setHorario(e.target.value)
    }
    const handleEnviar = (e) => {
        e.preventDefault()
        setInfo({
            "asesor": asesor,
            "asignatura": asignatura,
            "horario": horario
        })
        nav("/home")
    }
    return (
        <div className="box">
            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            <label className='red-label'>Asignatura</label>
                            <hr className='white-label' />
                            <select className="form-select" name="asignatura" id="asignatura" onChange={(event) => handleAsignatura(event)}>
                                <option value="Asignatura 1">Asignatura 1</option>
                                <option value="Asignatura 2">Asignatura 2</option>
                                <option value="Asignatura 3">Asignatura 3</option>
                                <option value="Asignatura 4">Asignatura 4</option>
                            </select>
                        </td>
                        <td>
                            <label className='red-label'>Asesor</label>
                            <hr className='white-label'/>
                            <select className="form-select" name="Asesor" id="Asesor" onChange={(event) => handleAsesor(event)}>
                                <option value="Asesor 1">Asesor 1</option>
                                <option value="Asesor 2">Asesor 2</option>
                                <option value="Asesor 3">Asesor 3</option>
                                <option value="Asesor 4">Asesor 4</option>
                            </select>
                        </td>
                        <td>
                            <label className='red-label'>Horario</label>
                            <hr className='white-label'/>
                            <select className="form-select" name="Horario" id="Horario" onChange={(event) => handleHorario(event)}>
                                <option value="Horario 1">Horario 1</option>
                                <option value="Horario 2">Horario 2</option>
                                <option value="Horario 3">Horario 3</option>
                                <option value="Horario 4">Horario 4</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <label className='red-label'>Horarios Disponibles</label>
            <br />
            <Button variant="success" onClick={(event) => handleEnviar(event)}>Solicitar</Button>
        </div>
    )
}
