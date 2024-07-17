import React, { useEffect } from 'react'
import "./style.css"
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { register } from '../../../State/Auth/Action'
import { jwt } from '../../../config/api'
const SignUp = () => {
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
    const data = new FormData(e.currentTarget)
    const userData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password")
    }
    dispatch(register(userData))
  }
  
  return (
    <div className='login-form'>
      <div className="form-containner">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className="form ">
      <div className="login-row">
      <p>Name</p>
      <input name='name' type="text" placeholder='Enter name here...' />
      </div>
      <div className="login-row">
      <p>Email</p>
      <input name='email' type="email" placeholder='Enter name here...' />
      </div>
      <div className="login-row">
      <p>Password</p>
      <input name='password' type="password" placeholder='Enter name here...' />
      </div>
      <div className="login-row">
      <button type='submit'>Submit</button>
      <p>Already have an account?<span className='' style={{marginLeft:'5px', cursor:'pointer'}}><NavLink to={'/login'} style={{textDecoration: 'none', color:'red'}}>Login</NavLink></span> </p>
      </div>
      
      </form>
      </div>
      
      
    </div>
  )
}

export default SignUp
