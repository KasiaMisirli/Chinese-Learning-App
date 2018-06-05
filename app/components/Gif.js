import React from 'react'
import './Gif.css'


var Gif = (props) => {
  return <div className="gif">
  <img height="200px" src={props.gif.images.original.url}></img>
  </div>
}

export default Gif