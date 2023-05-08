export const HomeContent = ({ type }) => {
    const handleBuscar = (e) => {
        e.preventDefault()
        // Comando para buscar en mongoDB
    }
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label>Asignatura</label>
                            <hr />
                            <select name="asignatura" id="asignatura">
                                <option value="Asignatura 1">Asignatura 1</option>
                                <option value="Asignatura 2">Asignatura 2</option>
                                <option value="Asignatura 3">Asignatura 3</option>
                                <option value="Asignatura 4">Asignatura 4</option>
                            </select>
                        </td>
                        <td>
                            <label>Asesor</label>
                            <hr />
                            <select name="Asesor" id="Asesor">
                                <option value="Asesor 1">Asesor 1</option>
                                <option value="Asesor 2">Asesor 2</option>
                                <option value="Asesor 3">Asesor 3</option>
                                <option value="Asesor 4">Asesor 4</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <button type="button" onClick={(event) => handleBuscar(event)}>Buscar</button>
                    </tr>
                </tbody>
            </table>
            <label>Horarios Disponibles</label>
            <br />
            <button type="button" >Solicitar</button>
        </div>
    )
}