import React from 'react'
import { connect } from 'react-redux'
import { imageSearch, analysisSearch, finishCropping, analysisQuery } from '../actions/actions'
import ImageList from './ImageList'
import CollageContainer from './CollageContainer'
import { Button } from 'semantic-ui-react'
let timeout = 0

class CropperContainer extends React.Component{

  componentDidMount(){
    window.scrollTo(0, 0)
    this.props.analysisSearch(this.props.content)
    this.props.imageSearch(this.props.mood + "landscape", "mood")
  }

  componentWillReceiveProps(nextProps){
    (nextProps.analyzedContent && nextProps.analyzedContent.keyphrases && nextProps.analyzedContent.keyphrases[0]!=="") ?
      nextProps.analyzedContent.keyphrases.map(entry=>{
        if (this.props.images <= this.props.analyzedContent.length && this.props.images < 5) {
          timeout += 1100
          let imageSearch = this.props.imageSearch
          let adjectives = this.props.adjectives
          setTimeout(function(){
            imageSearch(entry.phrase + " " + adjectives)
          }, timeout)
      }
    }) : null
  }

  handleClick = () => {
    if (this.props.rosetteRes.keyphrases) {
      let timer = 0
      this.props.rosetteRes.keyphrases.map(entry=>{
        timer += 1100
        let analysisQuery = this.props.analysisQuery
        setTimeout(function(){
          analysisQuery(entry.phrase + " meaning in dreams")
        }, timer)
      })
    }
    this.props.finishCropping()
  }

  render(){
    return (
      <div>
        {this.props.cropping ?
        <div>
          <ImageList />
          <br/><br/>
          <Button color='teal' onClick={this.handleClick}>Save Image Crops</Button>
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
    cropping: state.userReducer.cropping,
    rosetteRes: state.collageReducer.rosetteRes
  }
}

export default connect(mapStateToProps, {imageSearch, analysisSearch, analysisQuery, finishCropping})(CropperContainer)
