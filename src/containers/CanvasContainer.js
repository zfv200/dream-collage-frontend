import React from 'react'
import { connect } from 'react-redux'
import { addDream, endDreaming, resetCropping, endCollage, resetCollageState } from '../actions/actions'
import { Button } from 'semantic-ui-react'
import html2canvas from 'html2canvas'

class CanvasContainer extends React.Component{

  state={
    buttonStyle: {display: 'block', margin: 'auto'},
    boxStyle: {display: 'block'}
  }

  handleClick = () => {
    this.setState({buttonStyle: {display: 'none'}, boxStyle: {display: 'none'}})
    const image = html2canvas(document.body).then(canvas=> {
      this.props.addDream(Object.assign({},
          { content: this.props.content, image: canvas.toDataURL('image/png') }
        ))
      this.reset()
    })
  }

  reset = () => {
    this.props.endDreaming()
    this.props.resetCropping()
    this.props.resetCollageState()
    this.props.endCollage()
  }

  render(){
    return (
        <div className="canvas">
          <div className="box" style={this.state.boxStyle}></div>
          <Button style={this.state.buttonStyle} onClick={this.handleClick}>Save Collage</Button>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    backgroundImage: state.collageReducer.background_image,
    content: state.collageReducer.content,
    adjectives: state.collageReducer.adjectives,
    mood: state.collageReducer.mood,
    dreaming: state.userReducer.dreaming,
    dreams: state.dreamReducer.dreams
  }
}

export default connect(mapStateToProps, {addDream, endDreaming, resetCropping, endCollage, resetCollageState})(CanvasContainer)
