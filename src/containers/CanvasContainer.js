import React from 'react'
import { connect } from 'react-redux'
import { addDream, endDreaming, resetCropping, endCollage, resetCollageState, saveDream } from '../actions/actions'
import { Button } from 'semantic-ui-react'
import html2canvas from 'html2canvas'
import screenshot from 'image-screenshot'

class CanvasContainer extends React.Component{

  state={
    buttonStyle: {visibility: 'visible'},
    boxStyle: {visibility: 'visibile'}
  }

  handleClick = () => {
    this.props.hideButtons()
    this.setState({buttonStyle: {visibility: 'hidden'}, boxStyle: {visibility: 'hidden'}})
    //hide redundant elements
    const image = html2canvas(document.getElementById('root'))
      .then(canvas=> {
        //add dream to current session
        this.props.addDream(Object.assign({},
          { content: this.props.content, collage: canvas.toDataURL('image/png'), analysis_links: this.props.analysis_links }))
        //save dream in backend
        this.props.saveDream(this.props.userId, this.props.content, canvas.toDataURL('image/png'))
        //reset program flow
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
          <div className="box"></div>
          <br></br><br></br>
          <Button color='teal' style={this.state.buttonStyle} onClick={this.handleClick}>Save Collage</Button>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // backgroundImage: state.collageReducer.background_image,
    content: state.collageReducer.content,
    // adjectives: state.collageReducer.adjectives,
    // mood: state.collageReducer.mood,
    // dreaming: state.userReducer.dreaming,
    // dreams: state.dreamReducer.dreams,
    userId: state.userReducer.userId,
    // rosetteRes: state.collageReducer.rosetteRes,
    analysis_links: state.dreamReducer.analysis_links,
  }
}

export default connect(mapStateToProps, {addDream, endDreaming, resetCropping, endCollage, resetCollageState, saveDream})(CanvasContainer)
