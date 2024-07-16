import React from 'react'
import "./style.css"
import { NavLink } from 'react-router-dom'
const SignUp = () => {
  return (
    <div className='login-form'>
      <div className="form-containner">
      <h1>Sign Up</h1>
      <form action="" className="form ">
      <div className="login-row">
      <p>Name</p>
      <input type="text" placeholder='Enter name here...' />
      </div>
      <div className="login-row">
      <p>Email</p>
      <input type="email" placeholder='Enter name here...' />
      </div>
      <div className="login-row">
      <p>Password</p>
      <input type="password" placeholder='Enter name here...' />
      </div>
      <div className="login-row">
      <button>Submit</button>
      <p>Already have an account?<span className='' style={{marginLeft:'5px', cursor:'pointer'}}><NavLink to={'/'} style={{textDecoration: 'none', color:'red'}}>Login</NavLink></span> </p>
      </div>
      
      </form>
      </div>
      
      
    </div>
  )
}

export default SignUp
