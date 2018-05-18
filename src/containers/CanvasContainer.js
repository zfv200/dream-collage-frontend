import React from 'react'
import { connect } from 'react-redux'
import { addDream, endDreaming, resetCropping, endCollage, resetCollageState } from '../actions/actions'

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

  handleClick = () => {
    this.props.addDream(Object.assign({}, {content: this.props.content, image: this.image}))
    this.props.endDreaming()
    this.props.resetCropping()
    this.props.resetCollageState()
  }

  render(){
    console.log(this.props.dreams)
    return (
        <div className="canvas">
          <canvas className="canvas" ref="canvas" width={800} height={600} />
          <button onClick={this.handleClick}>Save Collage</button>
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
    dreaming: state.userReducer.dreaming,
    dreams: state.dreamReducer.dreams
  }
}

export default connect(mapStateToProps, {addDream, endDreaming, resetCropping, endCollage, resetCollageState})(CanvasContainer)
