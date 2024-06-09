import {React} from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import cravings from './images/cravings.png'


const Layout = () => {

  return (
    <>
      
      <Navbar navimage={cravings} />
      <Outlet/>
      <Footer footimage={cravings}/>
    </>
  )
}

export default Layout