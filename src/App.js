
import React from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



const App =()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn/>} />
      <Route path="/dashboard" element={<Home />} />
    </Routes>
  </BrowserRouter>
  )
}


export default App;