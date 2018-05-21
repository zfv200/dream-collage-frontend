import React from 'react'
// import { connect } from 'react-redux'


import Rnd from 'react-rnd'


const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // border: 'solid 1px #ddd',
  // background: '#f0f0f0',
};

class CollageImage extends React.Component {

  state={
    imageStyle: {
      width: "200px",
      height: "200px",
      opacity: "0.5",
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
        width: `${parseInt(this.state.imageStyle.width) + 50}px`,
      }
    })
  }

  widthMinus = () => {
    this.setState({
      imageStyle: {
        ...this.state.imageStyle,
        width: `${parseInt(this.state.imageStyle.width) - 50}px`,
      }
    })
  }

  heightPlus = () => {
    this.setState({
      imageStyle: {
        ...this.state.imageStyle,
        height: `${parseInt(this.state.imageStyle.height) + 50}px`
      }
    })
  }

  heightMinus = () => {
    this.setState({
      imageStyle: {
        ...this.state.imageStyle,
        height: `${parseInt(this.state.imageStyle.height) - 50}px`
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

  handleClick = () => {
    this.props.handleSelect(this.props.id)
  }


  render(){
    return (
      <div>
        <div>
          <button style={this.props.buttonStyle} onClick={this.widthPlus}>width +</button>
          <button style={this.props.buttonStyle} onClick={this.widthMinus}>width -</button>
          <button style={this.props.buttonStyle} onClick={this.heightPlus}>height +</button>
          <button style={this.props.buttonStyle} onClick={this.heightMinus}>height -</button>
          <button style={this.props.buttonStyle} onClick={this.opacityUp}>++</button>
          <button style={this.props.buttonStyle} onClick={this.opacityDown}>--</button>
        </div>
        <Rnd style={style} default={{ x: 0, y: 0, width: 200, height: 200, }} >
          <div onClick={this.handleClick} style={ this.props.selectedImage===this.props.id ? {backgroundColor:"green"} : {}}>
            <img
            style={this.state.imageStyle}
            className="collage-image"
            src={this.props.image}/>
          </div>
        </Rnd>
      </div>
    )
  }
}

export default CollageImage

// {this.state.selectedImage ?
//   <button onClick={this.largerImage}>+</button> : null
// }
