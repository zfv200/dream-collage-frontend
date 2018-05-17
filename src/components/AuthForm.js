// import React from 'react'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// // import { login } from '../actions/actions'
//
// class AuthForm extends React.Component{
//   state = {
//     username: "",
//     password: "",
//     errors: []
//   }
//
//   handleSubmit = (event) => {
//     this.props.login(this.state.username, this.state.password)
//   }
//
//   onChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }
//
//   errors() {
//     return (
//       <ul>
//         {this.state.errors.map(error=><li>{error}</li>)}
//       </ul>
//     )
//   }
//
//   render(){
//     return (
//         <div className="login-form">
//           {this.state.errors.length > 0 ? this.errors() : null}
//           <form onSubmit={this.handleSubmit}>
//             <input
//               name="username"
//               value={this.state.username}
//               onChange={this.onChange}
//             />
//             <input
//               type="password"
//               name="password"
//               value={this.state.password}
//               onChange={this.onChange}
//             />
//             <button type="submit">{this.props.type}</button>
//           </form>
//         </div>
//       )
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     login
//   }, dispatch)
// }
//
// export default connect(null, mapDispatchToProps)(AuthForm)
