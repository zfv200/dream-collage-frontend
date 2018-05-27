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
      "1": { left: null, top: null, style: { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'} },
      "2": { left: null, top: null, style: { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'} },
      "3": { left: null, top: null, style: { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'} },
      "4": { left: null, top: null, style: { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'} },
      "5": { left: null, top: null, style: { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'} },
      "6": { left: null, top: null, style: { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'} },
      "7": { left: null, top: null, style: { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'} },
      "8": { left: null, top: null, style: { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'} },
      "9": { left: null, top: null, style: { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'} },
      "10": { left: null, top: null, style: { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'} },
      "11": { left: null, top: null, style: { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'} },
      "12": { left: null, top: null, style: { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'} },
      "13": { left: null, top: null, style: { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'} },
      "14": { left: null, top: null, style: { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'} },
      "15": { left: null, top: null, style: { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'} },
      "16": { left: null, top: null, style: { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'} },
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
            style: {
              ...this.state[key].style,
              width: `${parseInt(this.state[key].style.width) + 50}px`,
            }
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
            style:{
              ...this.state[key].style,
              width: `${parseInt(this.state[key].style.width) - 50}px`,
            }
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
            style:{
              ...this.state[key].style,
              height: `${parseInt(this.state[key].style.height) + 50}px`,
            }
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
            style:{
              ...this.state[key].style,
              height: `${parseInt(this.state[key].style.height) - 50}px`,
            }
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
            style:{
              ...this.state[key].style,
              opacity: `${parseFloat(this.state[key].style.opacity) + .1}`,
            }
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
            style:{
              ...this.state[key].style,
              opacity: `${parseFloat(this.state[key].style.opacity) - .1}`,
            }
          }
        })
      }
    }

    roundCorners = () => {
      if (this.state.selectedImage!==null) {
        let key = this.state.selectedImage.toString()
        this.state[key].style.borderRadius==="0%" ?
          this.setState({
            [key]: {
              ...this.state[key],
              style:{
                ...this.state[key].style,
                borderRadius: "50%",
              }
            }
          })
          : this.setState({
            [key]: {
              ...this.state[key],
              style:{
                ...this.state[key].style,
                borderRadius: "0%",
              }
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
            style:{
              ...this.state[key].style,
              WebkitFilter: this.state[key].style.WebkitFilter.replace(`${parseInt(this.state[key].style.WebkitFilter.split(/\(/)[1])}px)`, `${parseInt(this.state[key].style.WebkitFilter.split(/\(/)[1]) + 1}px)`)
            }
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
            style:{
              ...this.state[key].style,
              WebkitFilter: this.state[key].style.WebkitFilter.replace(`${parseInt(this.state[key].style.WebkitFilter.split(/\(/)[1])}px)`, `${parseInt(this.state[key].style.WebkitFilter.split(/\(/)[1]) - 1}px)`)
            }
          }
        })
      }
    }

    grayscale = () => {
      if (this.state.selectedImage!==null) {
        let key = this.state.selectedImage.toString()
        this.state[key].style.WebkitFilter.includes("grayscale(100%)") ?
        this.setState({
          [key]: {
            ...this.state[key],
            style:{
              ...this.state[key].style,
              WebkitFilter: this.state[key].style.WebkitFilter.replace("grayscale(100%)", "grayscale(0%)"),
            }
          }
        })
      : this.setState({
          [key]: {
            ...this.state[key],
            style:{
              ...this.state[key].style,
              WebkitFilter: this.state[key].style.WebkitFilter.replace("grayscale(0%)", "grayscale(100%)"),
            }
          }
        })
      }
    }

    invert = () => {
      if (this.state.selectedImage!==null) {
        let key = this.state.selectedImage.toString()
        this.state[key].style.WebkitFilter.includes("invert(100%)") ?
        this.setState({
          [key]: {
            ...this.state[key],
            style:{
              ...this.state[key].style,
              WebkitFilter: this.state[key].style.WebkitFilter.replace("invert(100%)", "invert(0%)"),
            }
          }
        })
      : this.setState({
          [key]: {
            ...this.state[key],
            style:{
              ...this.state[key].style,
              WebkitFilter: this.state[key].style.WebkitFilter.replace("invert(0%)", "invert(100%)"),
            }
          }
        })
      }
    }

    sepia = () => {
      if (this.state.selectedImage!==null) {
        let key = this.state.selectedImage.toString()
        this.state[key].style.WebkitFilter.includes("sepia(100%)") ?
        this.setState({
          [key]: {
            ...this.state[key],
            style:{
              ...this.state[key].style,
              WebkitFilter: this.state[key].style.WebkitFilter.replace("sepia(100%)", "sepia(0%)"),
            }
          }
        })
      : this.setState({
          [key]: {
            ...this.state[key],
            style:{
              ...this.state[key].style,
              WebkitFilter: this.state[key].style.WebkitFilter.replace("sepia(0%)", "sepia(100%)"),
            }
          }
        })
      }
    }

    setPosition = (x, y) => {
      console.log(x,y)
      if (this.state.selectedImage!==null) {
        let key = this.state.selectedImage.toString()
        this.setState({
          [key]: {
            ...this.state[key],
            left: `${x}px`,
            top: `${y}px`
          }
        })
      }
    }


    displayImages(){
      return this.props.collageImages.slice().map(image=>{
        let num = image.id
        return <CollageImage
                setPosition={this.setPosition}
                handleSelect={this.handleSelect}
                selectedImage={this.state.selectedImage}
                id={image.id}
                buttonStyle={this.state.buttonStyle}
                largerImage={this.largerImage}
                style={this.state[num.toString()].style}
                image={image.url}/>
      })
    }

    render() {
      return (
        <div id="collage">
          <div className="main-container">
            <div className="fixer-container">
            <Grid columns={12}>
              <Grid.Row>
                <Grid.Column>
                  <Button className="style-button" color='teal' style={this.state.buttonStyle} onClick={this.widthPlus}>width+</Button>
                </Grid.Column>
                <Grid.Column>
                  <Button className="style-button" color='teal' style={this.state.buttonStyle} onClick={this.widthMinus}>width+</Button>
                </Grid.Column>
                <Grid.Column>
                  <Button className="style-button" color='teal' style={this.state.buttonStyle} onClick={this.heightPlus}>height+</Button>
                </Grid.Column>
                <Grid.Column>
                  <Button className="style-button" color='teal' style={this.state.buttonStyle} onClick={this.heightMinus}>height-</Button>
                </Grid.Column>
                <Grid.Column>
                  <Button className="style-button" color='teal' style={this.state.buttonStyle} onClick={this.opacityPlus}>opacity+</Button>
                </Grid.Column>
                <Grid.Column>
                  <Button className="style-button" color='teal' style={this.state.buttonStyle} onClick={this.opacityMinus}>opacity-</Button>
                </Grid.Column>
                <Grid.Column>
                  <Button className="style-button" color='teal' style={this.state.buttonStyle} onClick={this.roundCorners}>round corners</Button>
                </Grid.Column>
                <Grid.Column>
                  <Button className="style-button" color='teal' style={this.state.buttonStyle} onClick={this.blurPlus}>blur+</Button>
                </Grid.Column>
                <Grid.Column>
                  <Button className="style-button" color='teal' style={this.state.buttonStyle} onClick={this.blurMinus}>blur-</Button>
                </Grid.Column>
                <Grid.Column>
                  <Button className="style-button" color='teal' style={this.state.buttonStyle} onClick={this.grayscale}>Black and White</Button>
                </Grid.Column>
                <Grid.Column>
                  <Button className="style-button" color='teal' style={this.state.buttonStyle} onClick={this.invert}>Invert</Button>
                </Grid.Column>
                <Grid.Column>
                <Button className="style-button" color='teal' style={this.state.buttonStyle} onClick={this.sepia}>Sepia</Button>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                {this.displayImages()}
              </Grid.Row>
            </Grid>
            </div>
          </div>
          <div className="collage-area">
          </div>
          <CanvasContainer state={this.state} hideButtons={this.hideButtons} />
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
