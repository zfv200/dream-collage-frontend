import React from 'react'
import { connect } from 'react-redux'

class CanvasContainer extends React.Component{

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    const img = this.refs.image

    img.onload = () => {
      ctx.drawImage(img, 0, 0)
    }
  }

  render(){
    return (
      <div className="canvas">
        <canvas className="canvas" ref="canvas" width={640} height={425} />
        <img ref="image" src={this.props.backgroundImage} className="hidden"/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    backgroundImage: state.collageReducer.background_image
  }
}

export default connect(mapStateToProps)(CanvasContainer)
