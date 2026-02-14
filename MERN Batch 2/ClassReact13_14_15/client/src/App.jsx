import { useState } from 'react'
import './App.css'

import NormalComponent from './Class13/First Component/firstReactCode'
import SecondComponent from './Class13/Second Component/secondComponent'
import HeaderComponent from './Class14 Components/Header Component/header'
import FooterComponent from './Class14 Components/Footer Component/footer'
import BodyComponent from './Class14 Components/Body Component/body'
import SideBarComponent from './Class14 Components/SideBar Component/sideBar'
import HeaderPage from './Pages/headerpage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SidePage from './Pages/sideBar'
import MainPage from './Pages/mainPage'
import RegistrationForm from './Class 15/Common Component/Registration Form/registrationForm'

function App() {
  return (
    <BrowserRouter>
      <div>

        {/* <NormalComponent /> */}

        {/* <SideBarComponent /> */}


        <Routes>
          <Route path="/" element={<RegistrationForm /> } />
          <Route path="/headerPage" element={<HeaderPage />} />
          <Route path="/sidePage" element={<SidePage />} />

        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
