import React from 'react'
import "./index.css"
import { HomeOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sider'>
      <div className="row">
      <span className='icon'><HomeOutlined /></span>
      <NavLink style={{ textDecoration: 'none' , color:"white"}} to={"/static"}><span>Dashboard</span></NavLink>
      </div>
      <div className="row">
      <span className='icon'><SettingOutlined /></span>
      <NavLink style={{ textDecoration: 'none' , color:"white"}} to={"/crud"}><span>Manage video</span></NavLink>
      
      </div>
      <div className="row down">
      <span className='icon'><LogoutOutlined /></span>
      <span>Logout</span>
      </div>
    </div>
  )
}

export default Sidebar

