import React from 'react'
import AuthForm from './AuthForm'

class RegisterForm extends React.Component{

  render(){
    return (
      <div>
        <h2>Register Form:</h2>
        <AuthForm type="Register"/>
      </div>
    )
  }
}

export default RegisterForm
