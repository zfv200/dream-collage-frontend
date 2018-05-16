import React from 'react'

class AuthForm extends React.Component{
  state = {
    username: "",
    password: "",
    errors: []
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    console.log(this.state)
    return (
        <div>
          <form>
            <input
              name="username"
              value={this.state.username}
              onChange={this.onChange}
            />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <button type="submit">{this.props.type}</button>
          </form>
        </div>
      )
  }
}

export default AuthForm
