import React from 'react'
import { connect } from 'react-redux'
import { addAnalysis } from '../actions/actions'
import { addImage, imageSearch, analysisSearch } from '../actions/actions'
import ImageList from './ImageList'

import Api from 'rosette-api'


class CollageContainer extends React.Component{

  componentDidMount(){
    this.props.analysisSearch(this.props.content)
  }

  componentWillReceiveProps(nextProps){
    nextProps.analyzedContent.keyphrases.map(entry=>{
      if (this.props.images <= this.props.analyzedContent.length && this.props.images < 5) {
        this.props.imageSearch(entry.phrase)
      }
    })
  }

  render(){
    return (
      <div>
        <ImageList />
        <button>Save Collage</button>
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
    images: state.collageReducer.images
  }
}

export default connect(mapStateToProps, {addAnalysis, addImage, imageSearch, analysisSearch})(CollageContainer)
