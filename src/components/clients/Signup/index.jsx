import React, { useEffect } from 'react'
import "./style.css"
import { NavLink, useNavigate } from 'react-router-dom'
import Password from 'antd/es/input/Password'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../State/Auth/Action'
import { jwt } from '../../../config/api'
const Login = () => {
  const {auth} = useSelector(store=>store)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(()=>{
    if(jwt){
      navigate('/admin')
    }
  }, [jwt])
  const handleSubmit = (e)=>{
    e.preventDefault()
    const data = new FormData(e.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password")

    }
    dispatch(login(userData))
    
  }
  return (
    <div className='login-form'>
      <div className="form-containner">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="form ">
      <div className="login-row">
      <p>Email</p>
      <input name="email" type="email" placeholder='Enter name here...' />
      </div>
      <div className="login-row">
      <p>Password</p>
      <input name='password' type="password" placeholder='Enter name here...' />
      </div>
      <div className="login-row">
      <button type='submit'>Submit</button>
      <p>Don't have any an account?<span className='' style={{color:'red',marginLeft:'5px', cursor:'pointer'}}><NavLink to={'/'} style={{textDecoration: 'none', color:'red'}}>Sign Up</NavLink></span> </p>
      </div>
      
      </form>
      </div>
      
      
    </div>
  )
}

export default Login
