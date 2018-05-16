import React, { Component } from 'react';
import { connect } from 'react-redux'
import WelcomeContainer from './containers/WelcomeContainer'
import HomeContainer from './containers/HomeContainer'
import './App.css';

class App extends Component {
  render() {
    console.log(this.props.store.getState())
    return (
      <div className="App">
        <header className="">
        </header>
        {this.props.currentUser ? <WelcomeContainer /> : <HomeContainer />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser}
}

export default connect(mapStateToProps)(App);
