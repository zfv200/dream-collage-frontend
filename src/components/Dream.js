import React from 'react'
import DreamLinks from './DreamLinks'
import { Button } from 'semantic-ui-react'


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
        <br></br><br></br>
        <div className="dream-div">
          {(this.props.dream.collage && this.props.dream.collage.length)===undefined ?
          <img className="dream-image" src={this.props.dream.collage.image_url}/>
          : <img className="dream-image" src={this.props.dream.collage}/> }
          <h1 className="dream-font">{this.props.dream.content}</h1>
          <br></br>
        </div>
          {this.state.interpreting ?
          <DreamLinks handleClick={this.handleClick} links={this.props.dream.analyses}/>
          : <Button color='teal' onClick={this.handleClick}>Interpret this dream!</Button> }
        <br></br><br></br>
      </div>
    )
  }
}

export default Dream

// <h1>{dream.analysis_links ? dream.analysis_links.map(link=><h1>link</h1>) : null}</h1>
