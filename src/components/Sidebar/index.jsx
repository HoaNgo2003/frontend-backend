import React, { useEffect, useState } from 'react'
import "./index.css"
import { HomeOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons'
import { NavLink, useNavigate } from 'react-router-dom'
import { jwt } from '../../config/api'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../State/Auth/Action'
const Sidebar = () => {
  const [status, setStatus] = useState(false)
  const {auth} = useSelector(store=>store)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(()=>{
    if(!jwt){
      navigate('/login')
    }
     
  },[jwt])
  const handleClick = ()=>{
    dispatch(logout())
    localStorage.removeItem("jwt")
    
  }
  return (
    <div className='sider'>
      <div className="row">
      <span className='icon'><HomeOutlined /></span>
      <NavLink style={{ textDecoration: 'none' , color:"white"}} to={"/admin/static"}><span>Dashboard</span></NavLink>
      </div>
      <div className="row">
      <span className='icon'><SettingOutlined /></span>
      <NavLink style={{ textDecoration: 'none' , color:"white"}} to={"/admin/crud"}><span>Manage video</span></NavLink>
      
      </div>
      <div className="row down">
      <span className='icon'><LogoutOutlined /></span>
      <span onClick={()=>{handleClick()}}>Logout</span>
      </div>
    </div>
  )
}

export default Sidebar

