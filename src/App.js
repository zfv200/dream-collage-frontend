import React, { Component } from 'react';
import { connect } from 'react-redux'
import WelcomeContainer from './containers/WelcomeContainer'
import HomeContainer from './containers/HomeContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="">
          <img className="header-photo" src={this.props.headerImage}/>
        </header>
        <br></br><br></br>
        {!this.props.currentUser ? <WelcomeContainer /> : <HomeContainer />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser,
    headerImage: state.collageReducer.headerImage
  }
}

export default connect(mapStateToProps)(App);
