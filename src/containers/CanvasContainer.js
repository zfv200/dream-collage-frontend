import React from 'react'
import { connect } from 'react-redux'
import { addDream, endDreaming, resetCropping, endCollage, resetCollageState, saveDream, hideHeader, resetHeader } from '../actions/actions'
import { Button } from 'semantic-ui-react'
import html2canvas from 'html2canvas'

class CanvasContainer extends React.Component{

  state={
    buttonStyle: {display: 'block', margin: 'auto'},
    boxStyle: {display: 'block'}
  }

  handleClick = () => {
    this.props.hideButtons()
    // this.props.hideHeader()
    this.setState({buttonStyle: {display: 'none'}, boxStyle: {display: 'none'}})
    const image = html2canvas(document.body).then(canvas=> {
      this.props.addDream(Object.assign({},
          { content: this.props.content, collage: canvas.toDataURL('image/png') }
        ))
      this.props.saveDream(this.props.userId, this.props.content, canvas.toDataURL('image/png'))
      this.reset()
    })
  }

  reset = () => {
    this.props.endDreaming()
    this.props.resetCropping()
    this.props.resetCollageState()
    this.props.endCollage()
    // this.props.resetHeader()
  }

  render(){
    console.log(this.props.backgroundImage)
    return (
        <div className="canvas">
          <div className="box"></div>
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
    dreams: state.dreamReducer.dreams,
    userId: state.userReducer.userId
  }
}

export default connect(mapStateToProps, {addDream, endDreaming, resetCropping, endCollage, resetCollageState, saveDream, hideHeader, resetHeader})(CanvasContainer)
