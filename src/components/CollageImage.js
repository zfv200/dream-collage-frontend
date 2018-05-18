import React from 'react'
// import { connect } from 'react-redux'

class CollageImage extends React.Component {
  state={
    x: 300,
    y: 200,
    beingDragged: false
  }

  handleDrag = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render(){
    return (
      <div>
        <img
        draggable="true"
        style={{}}
        onDrag={this.handleDrag}
        src={this.props.image}
        />
      </div>
    )
  }
}



export default CollageImage
