import React from 'react'
import { connect } from 'react-redux'
import DreamList from './DreamList'
import AddDream from '../components/AddDream'
import DreamJournal from './DreamJournal'

class HomeContainer extends React.Component{

  render(){
    return (
      <div>
        {!this.props.dreaming ?
          <div>
            <DreamList />
            <AddDream />
          </div>
          : <DreamJournal /> }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dreaming: state.userReducer.dreaming
  }
}


export default connect(mapStateToProps)(HomeContainer)
