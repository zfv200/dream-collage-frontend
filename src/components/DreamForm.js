import React from 'react'
import { connect } from 'react-redux'
import { addDream } from '../actions/actions'
import { startCollage } from '../actions/actions'
import { addKeywords } from '../actions/actions'
import { TextArea } from 'semantic-ui-react'

class DreamForm extends React.Component{
  state = {
    content: "",
    adjectives: "",
    mood: "",
    // collageUrl: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addKeywords(this.state)
    this.props.startCollage()
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Tell me about your dream...</h1>
          <TextArea
          className="text-area"
          onChange={this.handleChange}
          name="content"
          /><br/>
          <h1>What adjectives would you use to describe the dream?</h1>
          <TextArea
          className="text-area"
          onChange={this.handleChange}
          name="adjectives"
          /><br/>
          <h1>Describe the overall mood in one word...</h1>
          <input
          className="text-area"
          onChange={this.handleChange}
          name="mood"
          /><br/>
          <button>Study Dream</button>
        </form>
      </div>
    )
  }
}


export default connect(null, {addDream, startCollage, addKeywords})(DreamForm)
