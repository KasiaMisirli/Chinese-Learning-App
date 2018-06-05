import React from 'react'
import './Header.css'
import logo from './logo.png'

const containerStyle = {
  fontSize: '40px'
}


const Header = () => {
  return (
    <div style={containerStyle} className="Header">
    <p className="lucky">Lucky Wang's Chinese</p>
     <img src={logo} alt="logo" className="logo"/>
      
    
    </div>
  )
}

export default Header