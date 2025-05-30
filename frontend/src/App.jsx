import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Workers from './pages/Workers'
import Login from './pages/Login'
import Contact from './pages/Contact'
import About from './pages/About'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    
    <BrowserRouter className='mx-4 sm:mx-[10%]'>
  
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/workers' element={<Workers />} />
    <Route path='/workers/:services' element={<Workers />} />
    <Route path='/login' element={<Login />} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/my-profile' element={<MyProfile/>} />
    <Route path='/my-appointments' element={<MyAppointments/>} />
    <Route path='/appointment/:workersId' element={<Appointment/>} />
  </Routes>
  <Footer/>
    </BrowserRouter>
  )
}


export default App