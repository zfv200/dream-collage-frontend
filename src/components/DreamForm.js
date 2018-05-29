import React from 'react'
import { connect } from 'react-redux'
import { addDream } from '../actions/actions'
import { startCollage, saveDream } from '../actions/actions'
import { addKeywords } from '../actions/actions'
import { TextArea, Button } from 'semantic-ui-react'

class DreamForm extends React.Component{
  state = {
    content: "",
    adjectives: "",
    mood: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.adjectives.includes("calm") || this.state.mood.includes("calm")){
      alert("sorry, 'calm' skews search results too much! Please think of another word.")
    } else {
      this.props.addKeywords(this.state)
      this.props.startCollage()
      this.props.saveDream(this.props.userId, this.state.content)
    }
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Tell me about your dream...</h1>
          <TextArea className="text-area" onChange={this.handleChange} name="content"/>
          <br/>
          <h1>What adjectives would you use to describe the dream?</h1>
          <TextArea className="text-area" onChange={this.handleChange} name="adjectives"/>
          <br/>
          <h1>Describe the overall mood in one word...</h1>
          <input className="text-input" onChange={this.handleChange} name="mood"/>
          <br/><br/>
          <Button color='teal'>Study Dream</Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.userReducer.userId
  }
}


export default connect(mapStateToProps, {addDream, startCollage, addKeywords, saveDream})(DreamForm)
