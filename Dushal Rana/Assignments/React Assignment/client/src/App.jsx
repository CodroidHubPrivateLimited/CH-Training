import { useState } from 'react'
import RegistrationForm from './assets/registrationForm/registrationForm'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import LoginForm from './assets/loginForm/loginForm'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<RegistrationForm/>} />
        <Route path="/login"  element={<LoginForm/>} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
