import React from 'react'
import "./Login.css"
import {Link} from 'react-router-dom'

function LoginPage() {
  return (
    <div className='Loginpage h-auto rounded-2xl w-auto m-auto absolute left-1/3 top-1/3 p-5 bg-slate-900 text-white '>
      <form className='' action="">
        <h1 className='text-white bg-slate-900 font-bold text-3xl m-2'>Login</h1>
      <div className="input-group">
        <input className='h-auto w-72 md:w-62 m-2 p-2 rounded-xl text-black' id="femail" type="email" placeholder="Email Id" onkeyup="validateEmail()"/>
        <span id="email-error"></span>
      </div>

      <div className="input-group w-80" >
         <input className='h-auto w-72  md:w-62 m-2 p-2 rounded-xl text-black' id='pass' type="password" name="fpass" placeholder="Password..." onkeyup="validateConfirmPass()"/>
          <span id="pass-error"></span>
        </div>

        <button className='text-center m-2 bg-slate-600 h-8 w-20 rounded-lg hover:bg-white hover:text-gray-900 hover:font-bold' id='signup-btn' onclick="return validatefrom()">Sign In</button><br />

        <Link  to="/"><button className='m-2 p-2 hover:underline'>Create your account</button> </Link>
        <Link  to=""><button className='m-2 p-2 hover:underline'>Forgot password?</button> </Link>
      </form>
    </div>
  )
}

export default LoginPage
