import React from 'react'
import './Zodiac.css'
import checkChineseZodiac from './calcZodiac.js'

export default class Zodiac extends React.Component {

  state = {
    q: '',
    zodiac: {          
    image:"https://www.chinesegenderchart.info/wp-content/uploads/2015/09/12zo.gif",
    chinese: '',
  
    }
  }
  handleQueryChange = (e) => {
    this.setState({
      q: e.target.value
    })
  }

  findChineseZodiac = (e) => {
    e.preventDefault()
    let zodiac = checkChineseZodiac(this.state.q)
    this.setState({zodiac: zodiac})
  }

  renderChineseZodiac = () => {
    return <div className="container">
      <div className="zodiac-details">
        <div className="ch-zod">{this.state.zodiac.chinese}</div><br/>
        <div className="en-zod">{this.state.zodiac.zodiac}</div><br/>
        <div className="ch-zod-pin">{this.state.zodiac.pinyin}</div><br/>
        <div className="zod-desc">{this.state.zodiac.description}</div><br/>
        <div className="zod-best-match">{this.state.zodiac.best_match}</div>
      </div>
      <div className="zodiac-image">
        <div className="zod-img-div"><img className="zod-img" src={this.state.zodiac.image}/></div>
      </div>
    </div>
  }

  render() {
    // const title = this.state.title
    
    return <div className="chinese-zodiac">
      <div className="top">
      <h1 className="check">Check your chinese zodiac</h1>
      <form className="form">
        <input placeholder="enter your birth year" className="input" type="zodiac" onChange={this.handleQueryChange}/>
        <button  className="btn"onClick={this.findChineseZodiac}>search</button>
      </form>
        </div>
      <div>{this.renderChineseZodiac()}</div>
    </div>
  }
}
  