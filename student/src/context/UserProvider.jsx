import React, { useState } from "react"
import { UserContext } from "./UserContext"

const user = {}

export const UserProvider = ({page}) => {
    const [user, setUser] = useState(null)
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {page}
        </UserContext.Provider>
    )
}