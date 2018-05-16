import React from 'react'

class AuthForm extends React.Component{
  state = {
    username: "",
    password: "",
    errors: []
  }

  login = (event) => {
    event.preventDefault()
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  errors() {
    return (
      <ul>
        {this.state.errors.map(error=><li>{error}</li>)}
      </ul>
    )
  }

  render(){
    console.log(this.state)
    return (
        <div className="login-form">
          {this.state.errors.length > 0 ? this.errors() : null}
          <form onSubmit={this.login}>
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
