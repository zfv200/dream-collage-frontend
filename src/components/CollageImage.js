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

  largerImage = () => {
    this.setState({
      imageStyle: {
        ...this.state.imageStyle,
        width: `${parseInt(this.state.imageStyle.width) + 20}px`,
        height: `${parseInt(this.state.imageStyle.height) + 20}px`
      }
    })
  }

  smallerImage = () => {
    this.setState({
      imageStyle: {
        ...this.state.imageStyle,
        width: `${parseInt(this.state.imageStyle.width) - 20}px`,
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
        {this.state.selectedImage ?
          <div>
            <button style={this.props.buttonStyle} onClick={this.largerImage}>size +</button>
            <button style={this.props.buttonStyle} onClick={this.smallerImage}>size -</button>
            <button style={this.props.buttonStyle} onClick={this.opacityUp}>++</button>
            <button style={this.props.buttonStyle} onClick={this.opacityDown}>--</button>
          </div>
          : null}
        <Rnd default={{ x: 0, y: 0, width: 200, height: 200, }} >
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
