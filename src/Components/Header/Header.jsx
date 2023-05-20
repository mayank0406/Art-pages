import React from 'react'
import SignupPage from './Signup/SignupPage'
// import LoginPage from './Login/LoginPage'
import ArtContent from '../Main/ArtContent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Header() {
  return (
    <>
   <BrowserRouter>
     <Routes>
      <Route path='/' element={<SignupPage/>} />
      <Route path='/Login' element={<ArtContent/>} />
      
     </Routes>
   </BrowserRouter>
   </>
 

  )
}

export default Header
