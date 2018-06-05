import React from 'react'
import china from './china-map.png'
import './Blurb.css'


const Blurb = () => {
  return (
    <div className="blurb">
    <p >Now you can relax with Xiao Wang and look at some beatiful photos of China &#x261E;</p>
     <img  src={china} alt="china" className="china"/>
      
    
    </div>
  )
}

export default Blurb