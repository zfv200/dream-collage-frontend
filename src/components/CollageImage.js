import React from 'react'
import Rnd from 'react-rnd'

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

class CollageImage extends React.Component {
  constructor(){
    super();

    // this.image = document.getElementById(`${this.props.image.id}`)
    // this.position = this.image.getBoundingClientRect()
    // this.x = this.position.left
    // this.y = this.position.top

    this.state = {
      x: null,
      y: null,
    }
  }

  handleClick = () => {
    this.props.handleSelect(this.props.id)
  }

  handleDrag = () => {
    const image = document.getElementById(`${this.props.id}`)
    const position = image.getBoundingClientRect()
    const x = position.left
    const y = position.top
    this.setState({
      x: x,
      y: y
    })
    this.props.setPosition(this.state.x, this.state.y)
  }

//for the morning--try using the x and the y of the Rnd component to position stuff and draw it out again.
  render(){
    return (
      <div>
        <Rnd onDrag={this.handleDrag} className="rnd" style={style} default={{ x: 0, y: 0, width: 100, height: 100, }} >
          <div onClick={this.handleClick} style={ this.props.selectedImage===this.props.id ? {backgroundColor:"green"} : {}}>
            <img id={this.props.id} draggable="true" style={this.props.style} className="collage-image" src={this.props.image}/>
          </div>
        </Rnd>
      </div>
    )
  }
}

export default CollageImage
