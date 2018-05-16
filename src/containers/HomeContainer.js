import React from 'react'
import { connect } from 'react-redux'
import DreamList from './DreamList'
import AddDream from '../components/AddDream'
import DreamJournal from './DreamJournal'

class HomeContainer extends React.Component{
  state = {
    dreaming: false
  }

  changeToDreaming = () => {
    this.setState({
      dreaming: true
    })
  }

  render(){
    return (
      <div>
        {!this.state.dreaming ?
          <div>
            <DreamList />
            <AddDream changeToDreaming={this.changeToDreaming}/>
          </div>
          : <DreamJournal /> }
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
