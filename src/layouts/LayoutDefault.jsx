import  Header  from '../components/Header/index.jsx'
import React from 'react'
import Sidebar from '../components/Sidebar/index.jsx'
import "./style.css"
import { Outlet } from 'react-router-dom'
const LayoutDefault = () => {
  return (
        <div>
        <Header/>
        <Sidebar/>
        <main>
        <Outlet/>
        </main>
        
      </div>
      
  )
}

export default LayoutDefault
