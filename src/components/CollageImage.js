import React from 'react'
import Rnd from 'react-rnd'

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

class CollageImage extends React.Component {

  handleClick = () => {
    this.props.handleSelect(this.props.id)
  }

  render(){
    return (
      <div>
        <Rnd className="rnd" style={style} default={{ x: 0, y: 0, width: 100, height: 100, }} >
          <div onClick={this.handleClick} style={ this.props.selectedImage===this.props.id ? {backgroundColor:"green"} : {}}>
            <img style={this.props.style} className="collage-image" src={this.props.image}/>
          </div>
        </Rnd>
      </div>
    )
  }
}

export default CollageImage
