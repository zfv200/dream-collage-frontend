import React from 'react'
import { connect } from 'react-redux'
import { addDream, endDreaming, resetCropping, endCollage, resetCollageState } from '../actions/actions'
import html2canvas from 'html2canvas'

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
    //source of the image doesn't get past the promise.
    const image = html2canvas(document.body).then(canvas=> {
      this.props.addDream(Object.assign(
          {},
          {
            content: this.props.content,
            image: canvas.toDataURL('image/png')
          }))
      // canvas.toDataURL('image/png')
    })
    // this.props.addDream(Object.assign(
    //     {},
    //     {
    //       content: this.props.content,
    //       image: image
    //     }))
    this.props.endDreaming()
    this.props.resetCropping()
    this.props.resetCollageState()
    this.props.endCollage()
  }

  render(){
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
