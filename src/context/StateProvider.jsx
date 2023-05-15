import React, { useState } from "react";
import { agendaContext } from "./agendaContext";
import { eventos } from "../assets/fakedata";

const StateProvider = ({ children }) => {
    const [ info, setInfo ] = useState(eventos)
    const handleInfo = (title, start, end) => {
        setInfo(prev => [...prev, {
            id: prev.length + 1,
            title: title,
            start: start,
            end: end
        }])
    }
    return (
        <agendaContext.Provider value={{info, handleInfo}}>
            { children }
        </agendaContext.Provider>
    )
}

export default StateProvider