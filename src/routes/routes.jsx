import { Route, Routes, Navigate } from "react-router-dom";
import { Home, Login } from "../pages";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { firebase } from "../firebase/firebaseConfig"
import PrivateRoute from "./privateRoutes";

export const Routing = () => {
    const dispatch = useDispatch()
    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [authCompleted, setAuthCompleted] = useState(false)
  
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user?.uid) {
            dispatch(login(user.uid, user.displayName))
            setIsLoggedIn(true)
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
    
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<PrivateRoute isLoggedIn={isLoggedIn} ><Home /></PrivateRoute>} />
            <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
    )
}