import React from 'react'

export default class Search extends React.Component {
  state = {
    image: {
    hits: '',
    q: ''
  }
}

handleQueryChange = (e) => {
  this.setState({
    q: e.target.value
  })
}
handleImageSearch = (e) => {
  const url = `https://pixabay.com/api/?key=9170654-511d57ce5cf8f8ee39522ce06&q=${this.state.q}&image_type=photo&pretty=true` //${data.kDefinition.split(' ')[0]}
  fetch(url)
  .then(res => res.json())//converting json to js
  .then(res => {
    this.setState({
      images: res.hits //a.hits[0].previewURL
    })
  })
}

renderImage = (image,index)=>{
  return <p  onClick={this.showImage} key={index}>{image.hits[0] && image.hits[0].previewURL}</p>
}

render() {
  // const title = this.state.title
  const {images} = this.state
  return <div>
    <h1>Search for images</h1>
    <form>
      <input type="name" onChange={this.handleQueryChange}/>
      <button onClick={this.handleImageSearch}>search</button>
    </form>
    
   <img src= {images && images.map(this.renderImage)} className="image"/>
  </div>
}

}