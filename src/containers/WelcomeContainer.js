import React from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

export default class WelcomeContainer extends React.Component{
  state = {
    register: false,
    login: false
  }

  handleRegister = () => {
    this.setState({
      register: true,
      login: false
    })
  }

  handleLogin = () => {
    this.setState({
      register: false,
      login: true
    })
  }

  render(){
    return (
      <div className="welcome">
        <div>
          { this.state.register ? <RegisterForm />
          : <button onClick={this.handleRegister}>Register Button</button> }
          { this.state.login ? <LoginForm />
          : <button onClick={this.handleLogin}>Login Button</button> }
        </div>
      </div>
    )
  }
}
