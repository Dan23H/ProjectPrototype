import React from "react"
import { Route, Routes } from "react-router-dom"
import { Login, Home } from "./pages"
import 'bootstrap/dist/css/bootstrap.min.css';
import { MisAsesorias } from "./pages/misAsesorias";
import { UserProvider } from "./context/UserProvider";



function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/misAsesorias" element={<MisAsesorias />} />
      </Routes>
    </UserProvider>

  )
}

export default App
