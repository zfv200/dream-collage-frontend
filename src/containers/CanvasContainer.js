import React from 'react'
import { connect } from 'react-redux'
import { addDream, endDreaming, resetCropping, endCollage, resetCollageState, saveDream, postAnalysis, postCollage, removeLinks } from '../actions/actions'
import { Button } from 'semantic-ui-react'
import html2canvas from 'html2canvas'
import screenshot from 'image-screenshot'

class CanvasContainer extends React.Component{

  state={
    buttonStyle: {visibility: 'visible'},
    boxStyle: {visibility: 'visibile'},
    // nextDreamId: (parseInt(this.props.dreams[0].id) + 1)
  }

  handleClick = () => {
    this.props.hideButtons()
    this.setState({buttonStyle: {visibility: 'hidden'}, boxStyle: {visibility: 'hidden'}})
    //hide redundant elements
    this.props.analysis_links.map(result=>{
      postAnalysis(result.url, result.name, this.state.nextDreamId)
    })
    const image = html2canvas(document.getElementById('root'))
      .then(canvas=> {
        //add dream to current session
        this.props.addDream(Object.assign({},
          { content: this.props.content, collage: canvas.toDataURL('image/png'), analyses: this.props.analysis_links }))
        //save dream in backend
        this.props.postCollage(this.props.currentDreamId, canvas.toDataURL('image/png'))
        // this.props.saveDream(this.props.userId, this.props.content, canvas.toDataURL('image/png'))
        //reset program flow
        let links = this.props.analysis_links
        // let nextDreamId = this.state.nextDreamId
        links.map(result=>{
          postAnalysis(result.url, result.name, this.props.currentDreamId)
        })
        this.reset()
    })
  }

  reset = () => {
    this.props.endDreaming()
    this.props.resetCropping()
    this.props.resetCollageState()
    this.props.endCollage()
    this.props.removeLinks()
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
    dreams: state.dreamReducer.dreams,
    currentDreamId: state.dreamReducer.currentDreamId
  }
}

export default connect(mapStateToProps, {addDream, endDreaming, resetCropping, endCollage, resetCollageState, saveDream, postCollage, removeLinks})(CanvasContainer)
