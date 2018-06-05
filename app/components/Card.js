import React from 'react'
import './Card.css'


var Card = (props)=> {
  return <div onClick={props.handleProverbSearch} className="card">
    <p className="characters">{props.proverb.chinese}</p>
    <p className="pinyin">{props.proverb.pinyin}</p>
    <p className="translation">{props.proverb.translation}</p>
  </div>
}

export default Card
