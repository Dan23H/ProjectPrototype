import { useState } from "react"
import { UserContext } from "./UserContext"


export const InfoProvider = ({children}) => {
    const [info, setInfo] = useState()

    return (
        <UserContext.Provider value={{info, setInfo}}>
            {children}
        </UserContext.Provider>
    )
}