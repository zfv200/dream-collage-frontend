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
      "1": { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'},
      "2": { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'},
      "3": { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'},
      "4": { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'},
      "5": { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'},
      "6": { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'},
      "7": { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'},
      "8": { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'},
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

    roundCorners = () => {
      if (this.state.selectedImage!==null) {
        let key = this.state.selectedImage.toString()
        this.state[key].borderRadius==="0%" ?
          this.setState({
            [key]: {
              ...this.state[key],
              borderRadius: "50%",
            }
          })
          : this.setState({
            [key]: {
              ...this.state[key],
              borderRadius: "0%",
            }
          })
      }
    }

    blurPlus = () => {
      if (this.state.selectedImage!==null) {
        let key = this.state.selectedImage.toString()
        this.setState({
          [key]: {
            ...this.state[key],
            WebkitFilter: this.state[key].WebkitFilter.replace(`${parseInt(this.state[key].WebkitFilter.split(/\(/)[1])}px)`, `${parseInt(this.state[key].WebkitFilter.split(/\(/)[1]) + 1}px)`)
          }
        })
      }
    }

    blurMinus = () => {
      if (this.state.selectedImage!==null) {
        let key = this.state.selectedImage.toString()
        this.setState({
          [key]: {
            ...this.state[key],
            WebkitFilter: this.state[key].WebkitFilter.replace(`${parseInt(this.state[key].WebkitFilter.split(/\(/)[1])}px)`, `${parseInt(this.state[key].WebkitFilter.split(/\(/)[1]) - 1}px)`)
          }
        })
      }
    }

    grayscale = () => {
      if (this.state.selectedImage!==null) {
        let key = this.state.selectedImage.toString()
        this.state[key].WebkitFilter.includes("grayscale(100%)") ?
        this.setState({
          [key]: {
            ...this.state[key],
            WebkitFilter: this.state[key].WebkitFilter.replace("grayscale(100%)", "grayscale(0%)"),
          }
        })
      : this.setState({
          [key]: {
            ...this.state[key],
            WebkitFilter: this.state[key].WebkitFilter.replace("grayscale(0%)", "grayscale(100%)"),
          }
        })
      }
    }

    invert = () => {
      if (this.state.selectedImage!==null) {
        let key = this.state.selectedImage.toString()
        this.state[key].WebkitFilter.includes("invert(100%)") ?
        this.setState({
          [key]: {
            ...this.state[key],
            WebkitFilter: this.state[key].WebkitFilter.replace("invert(100%)", "invert(0%)"),
          }
        })
      : this.setState({
          [key]: {
            ...this.state[key],
            WebkitFilter: this.state[key].WebkitFilter.replace("invert(0%)", "invert(100%)"),
          }
        })
      }
    }

    sepia = () => {
      if (this.state.selectedImage!==null) {
        let key = this.state.selectedImage.toString()
        this.state[key].WebkitFilter.includes("sepia(100%)") ?
        this.setState({
          [key]: {
            ...this.state[key],
            WebkitFilter: this.state[key].WebkitFilter.replace("sepia(100%)", "sepia(0%)"),
          }
        })
      : this.setState({
          [key]: {
            ...this.state[key],
            WebkitFilter: this.state[key].WebkitFilter.replace("sepia(0%)", "sepia(100%)"),
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
          <button style={this.state.buttonStyle} onClick={this.roundCorners}>round corners</button>
          <button style={this.state.buttonStyle} onClick={this.blurPlus}>blur+</button>
          <button style={this.state.buttonStyle} onClick={this.blurMinus}>blur-</button>
          <button style={this.state.buttonStyle} onClick={this.grayscale}>Black and White</button>
          <button style={this.state.buttonStyle} onClick={this.invert}>Invert</button>
          <button style={this.state.buttonStyle} onClick={this.sepia}>Sepia</button>
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
