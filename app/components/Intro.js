import React from 'react'
import './Intro.css'
//import './img.jpg'

const containerStyle = {
  fontSize: '40px'
}


const Intro = () => {
  return (
    <div style={containerStyle} className="intro">
     {/* <img src={logo} alt="logo" className="logo"/> */}
     <p className="intro-text">On this page you must follow Xiao Wang's instructions to succeed in your studies!</p> 
     <p className="says">Xiao Wang says ...</p>
    
    </div>
  )
}

export default Intro