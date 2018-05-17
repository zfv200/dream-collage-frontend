import React from 'react'
import { connect } from 'react-redux'
import { addAnalysis } from '../actions/actions'
import { response_handler, bing_image_search } from '../actions/bingSearch'
import { addImage, imageSearch, analysisSearch } from '../actions/actions'

import Api from 'rosette-api'


class CollageContainer extends React.Component{
  constructor(){
    super();
    this.api = new Api('027a59c5132d1fd52eedf6e798f52645');
    this.endpoint = "topics"
  }

  componentDidMount(){
    this.props.analysisSearch(this.props.content)
  }

  componentWillReceiveProps(nextProps){
    nextProps.analyzedContent.keyphrases.map(entry=>{
      if (this.props.images <= this.props.analyzedContent.length) {
        this.props.imageSearch(entry.phrase)
      }
    })
  }

  render(){
    return (
      <div>
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
