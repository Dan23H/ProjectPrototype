export const TypeForm = ({type ,setType}) => {
    const handleType1 = (e) => {
        e.preventDefault()
        setType('PROFESORES')
        
    }

    const handleType2 = (e) => {
        e.preventDefault()
        setType('MONITOR CEA')
    }

    return (
        <div>
            <label>Tipo de asesor</label>
            <hr />
            <button type="button" onClick={(event) => handleType1(event)}>Profesores</button>
            <button type="button" onClick={(event) => handleType2(event)}>Monitor CEA</button>
        </div>
    )
}