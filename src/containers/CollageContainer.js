import React from 'react'
import { connect } from 'react-redux'
import { addAnalysis } from '../actions/actions'
import { response_handler, bing_image_search } from '../actions/bingSearch'
import Api from 'rosette-api'


class CollageContainer extends React.Component{
  constructor(){
    super();
    this.api = new Api('027a59c5132d1fd52eedf6e798f52645');
    this.endpoint = "topics"
  }

  componentDidMount(){
    fetch("https://cors-anywhere.herokuapp.com/https://api.rosette.com/rest/v1/topics", {
      headers: {
        'X-RosetteAPI-Key':'027a59c5132d1fd52eedf6e798f52645',
        'Content-Type':'application/json',
        'Accept':'application/json',
      },
      method: "POST",
      body: JSON.stringify({"content":this.props.content})
    }).then(res=>res.json()).then(json=>{
      console.log(json['keyphrases'])
      
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
    mood: state.collageReducer.mood
  }
}

export default connect(mapStateToProps, {addAnalysis})(CollageContainer)
