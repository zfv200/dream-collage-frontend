import React from 'react'
import { connect } from 'react-redux'
import CollageImage from '../components/CollageImage'
import CanvasContainer from './CanvasContainer'

class CollageContainer extends React.Component {
    // const indexHalf = Math.floor(props.collageImages.length / 2)
    // const leftSide = props.collageImages.slice(0, indexHalf)
    // const rightSide = this.props.collageImages.slice()
    state = {
      imageStyle: {
        width: "50px",
        height: "50px",
        opacity: "0.1"
      },
      buttonStyle: {
        display: "block"
      }
    }

    hideButtons = () => {
      this.setState({
        buttonStyle: {
          display: "none"
        }
      })
    }

    render() {
      return (
        <div id="collage">
          <div>
            {this.props.collageImages.slice().map(image=>{
              return <CollageImage buttonStyle={this.state.buttonStyle} largerImage={this.largerImage} style={this.state.imageStyle} image={image}/>
            })}
          </div>
          <CanvasContainer hideButtons={this.hideButtons} />
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    collageImages: state.collageReducer.cropped_images
  }
}

export default connect(mapStateToProps)(CollageContainer)
