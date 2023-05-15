import { Button } from 'react-bootstrap';
import "../../styles/Home.css"
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { agendaContext } from '../context/agendaContext';


export const SolicitudContent = () => {
    const {handleInfo} = useContext(agendaContext)
    const [asignatura, setAsignatura] = useState("Asignatura 1")
    const [asesor, setAsesor] = useState("Asesor 1")
    const [horaInicio, setHoraInicio] = useState([0, 0])
    const [horaFinal, setHoraFinal] = useState([0, 0])
    const [dia, setDia] = useState(1)
    const [title, setTitle] = useState(asignatura)
    const nav = useNavigate()

    const [mes, setMes] = useState(1)
    const [days, setDays] = useState([])
    const [limit, setLimit] = useState(0)

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleAsignatura = (e) => {
        setAsignatura(e.target.value)
    }
    const handleAsesor = (e) => {
        setAsesor(e.target.value)
    }
    const handleHorario = (e) => {
        let valor = e.target.value
        let ini = valor.split(" ")
        let inicio1 = ini[0].split(":")
        let hora_inicial_comp = inicio1.map(x => parseInt(x))
        let hora_inicial = ini[1] === "pm" ? parseInt(hora_inicial_comp[0]) + 12 : hora_inicial_comp[0]
        let final1 = ini[3].split(":")
        let hora_final_comp = final1.map(x => parseInt(x))
        let hora_final = ini[4] === "pm" ? parseInt(hora_final_comp[0]) + 12 : hora_final_comp[0]
        setHoraInicio([hora_inicial, hora_inicial_comp[1]])
        setHoraFinal([hora_final, hora_final_comp[1]])
    }
    const handleDia = (e) => {
        setDia(e.target.value)
    }
    const handleMes = (e) => {
        const Mes = parseInt(e.target.value)
        setMes(Mes)

        let diasMes
        if (Mes === 2) {
            diasMes = 28;
          } else if (Mes === 4 || Mes === 6 || Mes === 9 || Mes === 11) {
            diasMes = 30;
          } else {
            diasMes = 31;
          }
        setLimit(diasMes);
    }

    useEffect(() => {
        const updatedDays = [];
        for (let day = 1; day <= limit; day++) {
          updatedDays.push(day);
        }
        setDays(updatedDays);
      }, [limit]);

      
    const handleEnviar = async (e) => {
        e.preventDefault()
        title == "" ? setTitle(asignatura) : title
        dia == "" ? setDia(1) : dia
        let start = new Date(2023, mes, dia, horaInicio[0], parseInt(horaInicio[1]))
        let end = new Date(2023, mes, dia, horaFinal[0], parseInt(horaFinal[1]))
        await handleInfo(title, start, end)
        alert("Solicitud enviada correctamente")
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
                            <hr className='white-label' />
                            <select className="form-select" name="Asesor" id="Asesor" onChange={(event) => handleAsesor(event)}>
                                <option value="Asesor 1">Asesor 1</option>
                                <option value="Asesor 2">Asesor 2</option>
                                <option value="Asesor 3">Asesor 3</option>
                                <option value="Asesor 4">Asesor 4</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            <label className='red-label'>Horario</label>
                            <hr className='white-label' />
                            <select className="form-select" name="Horario" id="Horario" onChange={(event) => handleHorario(event)}>
                                <option value="2:00 pm - 3:00 pm">2:00 pm - 3:00 pm</option>
                                <option value="3:00 pm - 4:00 pm">3:00 pm - 4:00 pm</option>
                                <option value="5:00 pm - 6:00 pm">5:00 pm - 6:00 pm</option>
                                <option value="10:00 pm - 11:00 pm">10:00 pm - 11:00 pm</option>
                            </select>
                        </td>
                        <td>
                            <label className='red-label'>Día</label>
                            <hr className='white-label' />
                            <select className="form-select" name="Dia" id="Dia" onChange={(event) => handleDia(event)}>
                                <option value="">Select a day</option>
                                {days.map((day) => (
                                    <option key={day} value={day}>
                                        {day}
                                    </option>
                                ))}
                            </select>
                        </td>
                        <td>
                            <label className='red-label'>Mes</label>
                            <hr className='white-label' />
                            <select className="form-select" name="Mes" id="Mes" onChange={(event) => handleMes(event)}>
                                <option value="0">Enero</option>
                                <option value="1">Febrero</option>
                                <option value="2">Marzo</option>
                                <option value="3">Abril</option>
                                <option value="4">Mayo</option>
                                <option value="5">Junio</option>
                                <option value="6">Julio</option>
                                <option value="7">Agosto</option>
                                <option value="8">Septiembre</option>
                                <option value="9">Octubre</option>
                                <option value="10">Noviembre</option>
                                <option value="11">Diciembre</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <label className='red-label'>Título de la solicitud</label>
            <hr className='white-label' />
            <input type="text" onChange={(event) => handleTitle(event)} placeholder='Título' />
            <br />
            <Button variant="success" onClick={(event) => handleEnviar(event)}>Solicitar</Button>
        </div>
    )
}
