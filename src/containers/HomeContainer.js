import React from 'react'
import { connect } from 'react-redux'
import DreamList from './DreamList'

class HomeContainer extends React.Component{

  render(){
    console.log("home", this.props)
    return (
      <div>
        <DreamList />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentActivity: state.currentActivity
  }
}

export default connect(mapStateToProps)(HomeContainer)
