import React from 'react'
import { connect } from 'react-redux'
import { addDream } from '../actions/actions'

class CanvasContainer extends React.Component{

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    const img = this.refs.image
    img.onload = () => {
      ctx.drawImage(img, 0, 0)
    }
    this.image = this.refs.canvas.toDataURL()

  }

  render(){
    return (
        <div className="canvas">
          <canvas className="canvas" ref="canvas" width={800} height={600} />
          <button onClick={()=>this.props.addDream(Object.assign({}, {content: this.props.content, image: this.image}))}>Save Collage</button>
          <img ref="image" src={this.props.backgroundImage} className="hidden"/>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    backgroundImage: state.collageReducer.background_image,
    content: state.collageReducer.content,
    adjectives: state.collageReducer.adjectives,
    mood: state.collageReducer.mood,
    dreams: state.dreamReducer.dreams
  }
}

export default connect(mapStateToProps, {addDream})(CanvasContainer)
