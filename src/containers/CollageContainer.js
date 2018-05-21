import React from 'react'
import { connect } from 'react-redux'
import CollageImage from '../components/CollageImage'
import CanvasContainer from './CanvasContainer'

class CollageContainer extends React.Component {

    state = {
      imageStyle: {
        width: "200px",
        height: "200px",
        opacity: "0.5"
      },
      buttonStyle: {
        display: "block"
      },
      selectedImage: null,
      "1": { width: "200px", height: "200px", opacity: "0.5"},
      2: { width: "200px", height: "200px", opacity: "0.5"},
      3: { width: "200px", height: "200px", opacity: "0.5"},
      4: { width: "200px", height: "200px", opacity: "0.5"},
      5: { width: "200px", height: "200px", opacity: "0.5"},
      6: { width: "200px", height: "200px", opacity: "0.5"},
      7: { width: "200px", height: "200px", opacity: "0.5"},
      8: { width: "200px", height: "200px", opacity: "0.5"},
    }

    hideButtons = () => {
      this.setState({
        buttonStyle: {
          display: "none"
        }
      })
    }

    handleSelect = (id) => {
      this.state.selectedImage!==id ?
        this.setState({
          selectedImage: id
        })
      : this.setState({
          selectedImage: null
      })
    }

    widthPlus = () => {
      if (this.state.selectedImage!==null) {
        let key = this.state.selectedImage.toString()
        this.setState({
          [key]: {
            ...this.state[key],
            width: `${parseInt(this.state[key].width) + 50}px`,
          }
        })
      }
    }

    widthMinus = () => {
      if (this.state.selectedImage!==null) {
        let key = this.state.selectedImage.toString()
        this.setState({
          [key]: {
            ...this.state[key],
            width: `${parseInt(this.state[key].width) - 50}px`,
          }
        })
      }
    }

    heightPlus = () => {
      if (this.state.selectedImage!==null) {
        let key = this.state.selectedImage.toString()
        this.setState({
          [key]: {
            ...this.state[key],
            height: `${parseInt(this.state[key].height) + 50}px`,
          }
        })
      }
    }

    heightMinus = () => {
      if (this.state.selectedImage!==null) {
        let key = this.state.selectedImage.toString()
        this.setState({
          [key]: {
            ...this.state[key],
            height: `${parseInt(this.state[key].height) - 50}px`,
          }
        })
      }
    }

    opacityPlus = () => {
      if (this.state.selectedImage!==null) {
        let key = this.state.selectedImage.toString()
        this.setState({
          [key]: {
            ...this.state[key],
            opacity: `${parseFloat(this.state[key].opacity) + .1}`,
          }
        })
      }
    }

    opacityMinus = () => {
      if (this.state.selectedImage!==null) {
        let key = this.state.selectedImage.toString()
        this.setState({
          [key]: {
            ...this.state[key],
            opacity: `${parseFloat(this.state[key].opacity) - .1}`,
          }
        })
      }
    }

    displayImages(){
      return this.props.collageImages.slice().map(image=>{
        let num = image.id
        return <CollageImage
                handleSelect={this.handleSelect}
                selectedImage={this.state.selectedImage}
                id={image.id}
                buttonStyle={this.state.buttonStyle}
                largerImage={this.largerImage}
                style={this.state[num.toString()]}
                image={image.url}/>
      })
    }

    render() {
      console.log(this.state["1"])
      return (
        <div id="collage">
          <button style={this.state.buttonStyle} onClick={this.widthPlus}>width+</button>
          <button style={this.state.buttonStyle} onClick={this.widthMinus}>width-</button>
          <button style={this.state.buttonStyle} onClick={this.heightPlus}>height+</button>
          <button style={this.state.buttonStyle} onClick={this.heightMinus}>height-</button>
          <button style={this.state.buttonStyle} onClick={this.opacityPlus}>opacity+</button>
          <button style={this.state.buttonStyle} onClick={this.opacityMinus}>opacity-</button>
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
