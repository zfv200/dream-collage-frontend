import React from 'react'
import { connect } from 'react-redux'
import CollageImage from '../components/CollageImage'
import CanvasContainer from './CanvasContainer'

class CollageContainer extends React.Component {

    state = {
      // imageStyle: {
      //   width: "200px",
      //   height: "200px",
      //   opacity: "0.5"
      // },
      buttonStyle: {
        display: "block"
      },
      selectedImage: null
    }

    hideButtons = () => {
      this.setState({
        buttonStyle: {
          display: "none"
        }
      })
    }

    handleSelect = (id) => {
      this.setState({
        selectedImage: id
      })
    }

    displayImages(){
      return this.props.collageImages.slice().map(image=>{
        return <CollageImage
                handleSelect={this.handleSelect}
                selectedImage={this.state.selectedImage}
                id={image.id}
                buttonStyle={this.state.buttonStyle}
                largerImage={this.largerImage}
                style={this.state.imageStyle}
                image={image.url}/>
      })
    }

    render() {
      return (
        <div id="collage">
          <div>
            {this.displayImages()}
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
