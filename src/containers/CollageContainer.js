import React from 'react'
import { connect } from 'react-redux'
import CollageImage from '../components/CollageImage'
import CanvasContainer from './CanvasContainer'
import { Grid, Button } from 'semantic-ui-react'

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
      "9": { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'},
      "10": { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'},
      "11": { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'},
      "12": { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'},
      "13": { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'},
      "14": { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'},
      "15": { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'},
      "16": { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'},
    }

    hideButtons = () => {
      this.setState({
        buttonStyle: {
          visibility: "hidden"
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
      return (
        <div id="collage">
          <div className="main-container">
            <div className="fixer-container">
            <Grid columns={7}>
              <Grid.Row>
                <Grid.Column>
                  <Button class="fluid ui button" color='teal' style={this.state.buttonStyle} onClick={this.widthPlus}>width+</Button>
                </Grid.Column>
                <Grid.Column>
                  <Button class="fluid ui button" color='teal' style={this.state.buttonStyle} onClick={this.widthMinus}>width+</Button>
                </Grid.Column>
                <Grid.Column>
                  <Button class="fluid ui button" color='teal' style={this.state.buttonStyle} onClick={this.heightPlus}>height+</Button>
                </Grid.Column>
                <Grid.Column>
                  <Button class="fluid ui button" color='teal' style={this.state.buttonStyle} onClick={this.heightMinus}>height-</Button>
                </Grid.Column>
                <Grid.Column>
                  <Button class="fluid ui button" color='teal' style={this.state.buttonStyle} onClick={this.opacityPlus}>opacity+</Button>
                </Grid.Column>
                <Grid.Column>
                  <Button class="fluid ui button" color='teal' style={this.state.buttonStyle} onClick={this.opacityMinus}>opacity-</Button>
                </Grid.Column>
                <Grid.Column>
                  <Button class="fluid ui button" color='teal' style={this.state.buttonStyle} onClick={this.roundCorners}>round corners</Button>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row id='image-row'>
                {this.displayImages()}
              </Grid.Row>
            </Grid>
            </div>
          </div>
          <div className="collage-area">
          </div>
          <CanvasContainer hideButtons={this.hideButtons} />
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    collageImages: state.collageReducer.cropped_images,
  }
}

export default connect(mapStateToProps)(CollageContainer)
