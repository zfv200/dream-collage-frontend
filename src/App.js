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
          <img className="header-photo" src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/E8mQw973xilexniun/videoblocks-dreamy-liquid-ink-colors-blending-mixing-swirl-fluid_sjbzxacjg_thumbnail-full01.png"/>
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
