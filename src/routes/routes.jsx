import { Route, Routes, Navigate } from "react-router-dom";
import { Home, Login, Loading, MisAsesorias, Solicitud } from "../pages";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { firebase } from "../firebase/firebaseConfig"

export const Routing = () => {
  const dispatch = useDispatch()
  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [authCompleted, setAuthCompleted] = useState(false)
  const [name, setName] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName))
        setIsLoggedIn(true)
        setName(user.displayName)
      } else {
        setIsLoggedIn(false)
      }
      setChecking(false)
      setAuthCompleted(true)
    });
  }, [dispatch]);

  if (checking) {
    return <h2>Cargando...</h2>;
  }

  if (!authCompleted) {
    return null;
  }

  console.log(isLoggedIn)

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {isLoggedIn ? (
        <Route path="/home" element={<Home name={name} />} />
      ) : (
        <Route path="*" element={<Loading isLoggedIn={isLoggedIn} />} />
      )}
      {isLoggedIn ? ( <Route path="/misAsesorias" element={<MisAsesorias name={name} />} /> ) : (<></>)}
      {isLoggedIn ? ( <Route path="/solicitud" element={<Solicitud name={name} />} /> ) : (<></>)}
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
)}