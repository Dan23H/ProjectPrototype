import React, { createContext, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Login, Home } from "./pages"
import 'bootstrap/dist/css/bootstrap.min.css';
import { MisAsesorias } from "./pages/misAsesorias";

export const UserContext = createContext()

function App() {
  const [user, setUser] = useState()
  return (
    <UserContext.Provider value={{user, setUser}} >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/misAsesorias" element={<MisAsesorias />} />
      </Routes>
    </UserContext.Provider>

  )
}

export default App
