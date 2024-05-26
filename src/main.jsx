import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import SignIn from './components/SignIn.jsx'
import Card from './components/Card.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import LogIn from './components/LogIn.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/LogIn' element={<LogIn/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Home' element={<App/>}/>
      </Routes>
    </BrowserRouter>
)


//redux tool kit

