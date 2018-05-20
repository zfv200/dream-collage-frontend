import React from 'react'
// import { connect } from 'react-redux'


import Rnd from 'react-rnd'


// const style = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   border: 'solid 1px #ddd',
//   background: '#f0f0f0',
// };

class CollageImage extends React.Component {

  state={
    selectedImage: false,
    imageStyle: {
      width: "50px",
      height: "50px",
      opacity: "0.1"
    }
  }

  handleClick = () => {
    this.setState({
      selectedImage: !this.state.selectedImage
    })
  }

  widthPlus = () => {
    this.setState({
      imageStyle: {
        ...this.state.imageStyle,
        width: `${parseInt(this.state.imageStyle.width) + 20}px`,
      }
    })
  }

  widthMinus = () => {
    this.setState({
      imageStyle: {
        ...this.state.imageStyle,
        width: `${parseInt(this.state.imageStyle.width) - 20}px`,
      }
    })
  }

  heightPlus = () => {
    this.setState({
      imageStyle: {
        ...this.state.imageStyle,
        height: `${parseInt(this.state.imageStyle.height) + 20}px`
      }
    })
  }

  heightMinus = () => {
    this.setState({
      imageStyle: {
        ...this.state.imageStyle,
        height: `${parseInt(this.state.imageStyle.height) - 20}px`
      }
    })
  }

  opacityUp = () => {
    this.setState({
      imageStyle: {
        ...this.state.imageStyle,
        opacity: `${parseFloat(this.state.imageStyle.opacity) + .1}`
      }
    })
  }

  opacityDown = () => {
    this.setState({
      imageStyle: {
        ...this.state.imageStyle,
        opacity: `${parseFloat(this.state.imageStyle.opacity) - .1}`
      }
    })
  }

  render(){
    return (
      <div>
        <Rnd default={{ x: 0, y: 0, width: 200, height: 200, }} >
            <div>
              <button style={this.props.buttonStyle} onClick={this.widthPlus}>width +</button>
              <button style={this.props.buttonStyle} onClick={this.widthMinus}>width -</button>
              <button style={this.props.buttonStyle} onClick={this.heightPlus}>height +</button>
              <button style={this.props.buttonStyle} onClick={this.heightMinus}>height -</button>
              <button style={this.props.buttonStyle} onClick={this.opacityUp}>++</button>
              <button style={this.props.buttonStyle} onClick={this.opacityDown}>--</button>
            </div>
            <img
            onClick={this.handleClick}
            style={this.state.imageStyle}
            className="collage-image"
            src={this.props.image}/>
        </Rnd>
      </div>
    )
  }
}

export default CollageImage

// {this.state.selectedImage ?
//   <button onClick={this.largerImage}>+</button> : null
// }
