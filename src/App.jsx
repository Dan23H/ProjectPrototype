import React from "react"
import { Route, Routes} from "react-router-dom"
import { Login, Home } from "./pages"
import 'bootstrap/dist/css/bootstrap.min.css';
import { MisAsesorias } from "./pages/misAsesorias";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/misAsesorias" element={<MisAsesorias />} />
    </Routes>
  )
}

export default App
