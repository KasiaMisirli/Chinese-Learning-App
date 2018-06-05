import React from 'react'
import PasswordInput from './PasswordInput'
import Lodash from 'lodash'
import Header from './Header.js'
import Card from './Card.js'
import Footer from './Footer.js'
import Character from './Character.js'
import Gif from './Gif.js'
import Image from './Image.js'
import Intro from './Intro.js'
import Blurb from './Blurb.js'
import Zodiac from './Zodiac.js'


export default class App extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    proverb: {
      chinese: 'click here to start learning chinese proverbs',
    },
    q: '',//gif.images.original.url
    gif:{
      images:{
        original:{
          url:"https://thebigboredomtheory.files.wordpress.com/2014/03/picasion-com_58734baee95c2d79770bf28ae4efe0ff.gif?w=400&zoom=2"
        }
      }
    }
  }
}
  
handleProverbSearch = (e) => {
  const url = "https://database-tzdaknuqpn.now.sh/api/random_proverb"
  fetch(url)
  .then(res => res.json())//converting json to js
  .then(res => {
    this.setState({
      proverb: res
    })
    this.handleGifSearch(res.translation)
  })
}

handleGifSearch = (term) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${term}&api_key=FF09pHdbqHXj3f7K4RjHTNqvvpzL1SXF&limit=1&offset=${Math.floor(Math.random()*50)}&rating=pg-13`
  fetch(url)
  .then(res => res.json())//converting json to js
  .then(res => {
    console.log(res.data[0])
    this.setState({
      gif: res.data[0]
    })
  })
}

render() {
  return <div >
    <Header/>
    <Intro/>
    {/* <div className="container">
    <Character />
    <Character className="card-character"/>
    </div> */}
    <div className="container">
    <Card className="card-proverb"
      proverb={this.state.proverb} 
      handleProverbSearch={this.handleProverbSearch} />
      {this.state.gif && <Gif className="card-gif"gif={this.state.gif} />} 
      </div>
      <div className="container">
      <Blurb/>
      <Image/>
      </div>
      <div>
        <Zodiac/>
      </div>
    <Footer/>
  </div>
  }
}


// //my api key 9170654-511d57ce5cf8f8ee39522ce06
// https://pixabay.com/api/?key=9170654-511d57ce5cf8f8ee39522ce06&q=yellow+flowers&image_type=photo&pretty=true