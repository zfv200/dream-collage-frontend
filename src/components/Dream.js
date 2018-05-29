import React from 'react'
import DreamLinks from './DreamLinks'

class Dream extends React.Component {
  state={
    interpreting: false
  }

  handleClick = () => {
    this.setState({
      interpreting: !this.state.interpreting
    })
  }

  render(){
    console.log(this.props)
    return (
      <div>
        {!this.state.interpreting ?
        <div className="dream-div">
          {(this.props.dream.collage && this.props.dream.collage.length)===undefined ?
          <img className="dream-image" src={this.props.dream.collage.image_url}/>
          : <img className="dream-image" src={this.props.dream.collage}/> }
          <h1>{this.props.dream.content}</h1>
          <br></br>
          <button onClick={this.handleClick}>Interpret this dream!</button>
        </div>
        : <DreamLinks handleClick={this.handleClick} links={this.props.dream.analyses}/> }
      </div>
    )
  }
}

export default Dream

// <h1>{dream.analysis_links ? dream.analysis_links.map(link=><h1>link</h1>) : null}</h1>
