import React from 'react'

class DreamForm extends React.Component{
  state = {
    content: "",
    adjectives: "",
    mood: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return (
      <div>
        <form>
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
          <button>Add Dream</button>
        </form>
      </div>
    )
  }
}

export default DreamForm
