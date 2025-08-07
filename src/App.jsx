import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'

function App() {
  

  return (
    <>
    <Navbar/>
    <Home/>
    <Footer/>
    </>
  )
}

export default App
