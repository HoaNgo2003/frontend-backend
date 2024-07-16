import React from 'react'
import "./style.css"
import { NavLink } from 'react-router-dom'
const Login = () => {
  return (
    <div className='login-form'>
      <div className="form-containner">
      <h1>Login</h1>
      <form action="" className="form ">
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
      <p>Don't have any an account?<span className='' style={{color:'red',marginLeft:'5px', cursor:'pointer'}}><NavLink to={'/signup'} style={{textDecoration: 'none', color:'red'}}>Sign Up</NavLink></span> </p>
      </div>
      
      </form>
      </div>
      
      
    </div>
  )
}

export default Login
