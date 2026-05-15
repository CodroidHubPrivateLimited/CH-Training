import React from "react"
import RegistrationForm from "./Forms/Registration Form/registrationForm"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginForm from "./Forms/Login Form/loginForm"
import HomePage from "./pages/homePage/heroSection/heroSection"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<RegistrationForm/>} />
        <Route path="/login" element={<LoginForm/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
