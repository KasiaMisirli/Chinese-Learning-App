import React from 'react'
import './Character.css'

export default class Character extends React.Component {
  state = {
    character: {
      string: 'click here to start learning chinese characters'
    }
      
}

handleCharSearch = (e) => {
  const url = "http://ccdb.hemiola.com/characters/filter=gb%7Csimplified/?fields=kDefinition,kMandarin,string"
  fetch(url)
  .then(res => res.json())//converting json to js
  .then(res => {
    this.setState({
      character: _.sample(res)
    })
  })
}

renderCharacter = (character,index) => {
  return <div key={index}>{character.string}<p>
    </p></div>
}


render() {
  const {character} = this.state
  const data = character
  
  return  <div onClick={this.handleCharSearch} className="character">
    <p className="char">{data.string}</p>
    <p>{data.kMandarin}</p>
    <p>{data.kDefinition}</p>
  </div> 
  }
}