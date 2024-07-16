import React from 'react'
import logo from "../../images/youtubeAdmin.svg"
import { UserOutlined } from '@ant-design/icons'
import "./style.css"
const Header = () => {
  return (
    <div className='header'>
      <div className="header-container">
        <div className="logo-img">
          <img src={logo} alt="" />
        </div>
        <div className="section-right">
        <UserOutlined />
        </div>
      </div>
    </div>
  )
}

export default Header
