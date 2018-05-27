import React from 'react'
import DreamLinks from './DreamLinks'

class Dream extends React.Component {
  state={
    interpreted: false
  }

  handleClick = () => {
    this.setState({
      interpreted: !this.state.interpreted
    })
  }

  displayCollage(){
    return this.props.dream.images.map(image=>{
      return <img src={image.image_data} style={{WebkitFilter: image.WebkitFilter, borderRadius: image.border_radius, height: image.height,
        left: `${parseInt(image.left) / window.innerWidth * 100}%`,
        top: `${parseInt(image.top) / window.innerHeight * 100}%`,
        opacity: image.opacity, width: image.width, zIndex: image.z_index, position: "absolute"}}/>
    })
  }


  render(){
    return (
      <div>
        {!this.state.interpreted ?
        <div>
        {this.displayCollage()}
        <h1>{this.props.dream.content}</h1>
        <button onClick={this.handleClick}>See analysis!</button>
        </div>
        : <DreamLinks goBack={this.handleClick} analyses={this.props.dream.analyses}/>}
      </div>
    )
  }
}

export default Dream

// const Dream = ({dream}) => {
//   console.log(dream)
//   return (
//     <div className="dream-div">
//
//       <h1>{dream.content}</h1>
//       {dream.images ? dream.images.map(image=>{
//         return <img src={image.image_data} style={{width: image.width, WebkitFilter: image.WebkitFilter, opacity: image.opacity, height: image.height, border_radius: image.border_radius, left: image.left, bottom: image.bottom}}/>
//       }) : null}
//       <br></br>
//     </div>
//   )
// }
//
// class Dream extends React.Component{
//   state={
//     loaded: false
//   }
//
//   componentDidMount() {
//     this.updateCanvas()
//   }
//
//   updateCanvas() {
//     if (this.props.dream.images[0]) {
//       const ctx = this.refs.canvas.getContext('2d')
//       const image = this.props.dream.images[0]
//       const img = new Image(parseInt(image.width), parseInt(image.height));
//       console.log(img);
//       img.style.opacity = "0.5"
//       console.log("opacity",img.style.opacity);
//       img.onload = () => {
//         ctx.drawImage(img, parseInt(image.left), parseInt(image.top))
//       }
//       img.src = image.image_data
//       this.setState({loaded: true})
//
//     }
//   }
//
//   render() {
//     return (
//       <div>
//         <canvas ref="canvas" width={1000} height={800}/>
//         <h1>{this.props.dream.content}</h1>
//       </div>
//     )
//   }
//
// }
//
// export default Dream

// <h1>{dream.analysis_links ? dream.analysis_links.map(link=><h1>link</h1>) : null}</h1>
// { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'},


// <img className="dream-image" src={dream.collage}/>
