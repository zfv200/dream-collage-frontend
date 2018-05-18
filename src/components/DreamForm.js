import React from 'react'
import { connect } from 'react-redux'
import { addDream } from '../actions/actions'
import { startCollage } from '../actions/actions'
import { addKeywords } from '../actions/actions'

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
          <textarea
          onChange={this.handleChange}
          name="content"
          /><br/>
          <textarea
          onChange={this.handleChange}
          name="adjectives"
          /><br/>
          <input
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
