import React from 'react'

export default class WelcomeContainer extends React.Component{
  state = {
    register: false,
    login: false
  }

  render(){
    return (
      <div className="welcome">
        <div>
          { this.state.register ?
          <p>register form</p>
          : <button>Register Button</button> }
          { this.state.login ?
          <p>login form</p>
          : <button>Login Button</button> }
        </div>
      </div>
    )
  }
}
