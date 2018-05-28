import React from 'react'

class Dream extends React.Component {

  render(){
    console.log(this.props.dream, this.props.dream.collage.length)
    return (
      <div className="dream-div">
        {this.props.dream.collage.length===undefined ?
        <img className="dream-image" src={this.props.dream.collage.image_url}/>
        : <img className="dream-image" src={this.props.dream.collage}/> }
        <h1>{this.props.dream.content}</h1>
        <br></br>
      </div>
    )
  }
}

export default Dream

// <h1>{dream.analysis_links ? dream.analysis_links.map(link=><h1>link</h1>) : null}</h1>
