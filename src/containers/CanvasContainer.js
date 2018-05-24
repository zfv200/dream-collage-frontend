import React from 'react'
import { connect } from 'react-redux'
import { addDream, endDreaming, resetCropping, endCollage, resetCollageState, saveDream, saveImage } from '../actions/actions'
import { Button } from 'semantic-ui-react'
import html2canvas from 'html2canvas'
import screenshot from 'image-screenshot'

let dreamId = 45

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
        // this.props.saveDream(this.props.userId, this.props.content)
        //reset program flow
        this.reset()
    })
    dreamId += 1
    this.props.collageImages.map(image=>{
      this.props.saveImage(image.url, this.props.state[image.id], dreamId)
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
    content: state.collageReducer.content,
    userId: state.userReducer.userId,
    analysis_links: state.dreamReducer.analysis_links,
    collageImages: state.collageReducer.cropped_images,
  }
}

export default connect(mapStateToProps, {addDream, endDreaming, resetCropping, endCollage, resetCollageState, saveDream, saveImage})(CanvasContainer)
