import React from 'react'
import { connect } from 'react-redux'
import { addAnalysis } from '../actions/actions'
import { addImage, imageSearch, analysisSearch, finishCropping } from '../actions/actions'
import ImageList from './ImageList'
import CollageContainer from './CollageContainer'
import { Button } from 'semantic-ui-react'

class CropperContainer extends React.Component{

  // componentDidMount() {
  //   window.scrollTo(0, 0)
  // }
  //
  // componentDidMount(){
  //   window.scrollTo(0, 0)
  //   this.props.analysisSearch(this.props.content)
  //      this.props.imageSearch(this.props.mood, "mood")
  // }
  //
  // componentWillReceiveProps(nextProps){
  //   (nextProps.analyzedContent && nextProps.analyzedContent.keyphrases) ?
  //   nextProps.analyzedContent.keyphrases.map(entry=>{
  //     if (this.props.images <= this.props.analyzedContent.length && this.props.images < 5) {
  //       this.props.imageSearch(entry.phrase + " " + this.props.adjectives)
  //     }
  //   }) : null
  // }

  render(){
    return (
      <div>
        {this.props.cropping ?
        <div>
          <ImageList />
          <br/><br/>
          <Button color='teal' onClick={()=>this.props.finishCropping()}>Save Image Crops</Button>
        </div>
        : <CollageContainer />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    content: state.collageReducer.content,
    adjectives: state.collageReducer.adjectives,
    mood: state.collageReducer.mood,
    analyzedContent: state.collageReducer.rosetteRes,
    images: state.collageReducer.images,
    cropping: state.userReducer.cropping
  }
}

export default connect(mapStateToProps, {addAnalysis, addImage, imageSearch, analysisSearch, finishCropping})(CropperContainer)
