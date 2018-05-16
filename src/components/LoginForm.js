import React from 'react'
import AuthForm from './AuthForm'

class LoginForm extends React.Component{

  render(){
    return (
      <div>
        <h2>Login Form:</h2>
        <AuthForm type="Login"/>
      </div>
    )
  }
}

export default LoginForm
