import React from 'react'
import './Image.css'



export default class Image extends React.Component {
  state = {
    image: { 
    webformatURL: "https://image.ibb.co/cLgWDJ/28nx_Y1528080751.jpg"
  }
}
handleImageSearch = (e) => {
  const url = `https://pixabay.com/api/?key=9170654-511d57ce5cf8f8ee39522ce06&q=china+landscape&image_type=ilustration&pretty=true&per_page=50` 
  fetch(url)
  .then(res => res.json())//converting json to js
  .then(res => {
    //console.log(res)
    //console.log(res.hits)
    this.setState({
      image: res.hits[Math.floor((Math.random() * 20) + 1)] //a.hits[0].previewURL
    })
  })
}
renderImage = (image)=>{
  return <div><img className="img" onClick={this.showImage} src={image.webformatURL}/>
  </div>
}
render() {
  const {image} = this.state
  const photo = image
  console.log(photo)
  
  return  <div className="image" onClick={this.handleImageSearch}>
  {/* {photo && photo.previewURL} */}
     {photo && this.renderImage(photo)}
  </div> 
  }
}
