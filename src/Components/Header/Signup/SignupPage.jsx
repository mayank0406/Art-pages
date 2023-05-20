import React from 'react'
import "./sign.css"
import {Link} from 'react-router-dom';


function LoginPage() {
  return (
    <>
     <div className=" className='Loginpage text-center min-w-300 h-auto   rounded-2xl  m-auto absolute left-1/4 top-1/4 p-5 bg-slate-900 text-white '">
      
    <form action='' >
    <h1  className='text-white bg-slate-900 font-bold text-3xl m-2' id='signup'>Sign up </h1>

      <div className="input-group">
        <input className='h-auto w-43  sm:w-72 sm:h-12 m-2 p-2 rounded-xl text-black' id="fname" type="text" placeholder="First name" onkeyup="validatename()"/>
        <span id="name-error"></span>
      </div>

      <div className="input-group">
        <input className='h-auto w-43  sm:w-72 sm:h-12 m-2 p-2 rounded-xl text-black'  id="fname" type="text" placeholder="Last name" onkeyup="validatename()"/>
        <span id="name-error"></span>
      </div>

      <div className="input-group">
        <input className='h-auto w-43 sm:w-72 sm:h-12 m-2 p-2 rounded-xl text-black'  id="fphone" type="tel" placeholder="Phone No" onkeyup="validatephone()"/>
        <span id="phone-error"></span>
      </div>

      <div className="input-group">
        <input className='h-auto w-43 sm:w-72 sm:h-12 m-2 p-2 rounded-xl text-black'  id="femail" type="email" placeholder="Email Id" onkeyup="validateEmail()"/>
        <span id="email-error"></span>
      </div>

       <div className="input-group">
        <input className='h-auto w-43 sm:w-72 sm:h-12 m-2 p-2 rounded-xl text-black'  id='fpass' type="password" name="fpass" placeholder="Password..." onkeyup="validatePass()"/>
        <span id="pass-error"></span>
        </div>

        <div className="input-group" >
         <input className='h-auto w-43  sm:w-72 sm:h-12 m-2 p-2 rounded-xl text-black'  id='cpass' type="password" name="fcpass" placeholder="Confirm Password..." onkeyup="validateConfirmPass()"/>
          <span id="cpass-error"></span>
        </div>

      <button className='h-10 w-32 hover:text-gray-950 hover:font-bold  m-2 hover:bg-white  rounded-xl text-white'  onclick="">Submit</button><br />
      <Link to="/Login"><p className='hover:underline'>Already have account?</p></Link>
    </form>
  </div>  
    </>
  )
}

export default LoginPage
