import React from 'react'
import { connect } from 'react-redux'
import { addDream, endDreaming, resetCropping, endCollage, resetCollageState, saveDream, hideHeader, resetHeader, resetImageId } from '../actions/actions'
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
    // this.props.hideHeader()
    this.setState({buttonStyle: {visibility: 'hidden'}, boxStyle: {visibility: 'hidden'}})
    const image = html2canvas(document.getElementById('root')).then(canvas=> {
      this.props.addDream(Object.assign({},
          { content: this.props.content, collage: canvas.toDataURL('image/png') }
        ))
      this.props.saveDream(this.props.userId, this.props.content, canvas.toDataURL('image/png'))
      this.reset()
    })
    // const img = document.getElementsByClassName('collage-image')
    // var arr = Array.prototype.slice.call(img)
    // arr.map(image=>{
    //   screenshot(img).then(url=>{
    //     console.log('the base 64 is', url)
    //   })
    // })
    // screenshot(img).then(url=>{
    //   console.log('the base 64 data url of the image is:', url)
    // })
    // this.reset()
  }

  reset = () => {
    this.props.endDreaming()
    this.props.resetCropping()
    this.props.resetCollageState()
    this.props.endCollage()
    // this.props.resetImageId()
    // this.props.resetHeader()
  }

  render(){
    console.log(this.props.backgroundImage)
    return (
        <div className="canvas">
          <div className="box"></div>
          <Button color='teal' style={this.state.buttonStyle} onClick={this.handleClick}>Save Collage</Button>
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

export default connect(mapStateToProps, {addDream, endDreaming, resetCropping, endCollage, resetCollageState, saveDream, hideHeader, resetHeader, resetImageId})(CanvasContainer)
