import React from 'react'
import { connect } from 'react-redux'
import DreamList from './DreamList'
import AddDream from '../components/AddDream'
import DreamJournal from './DreamJournal'
import { fetchDreams } from '../actions/actions'


class HomeContainer extends React.Component{

  componentDidMount(){
    this.props.fetchDreams()
  }

  render(){
    console.log(this.props.dreams)
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
    dreaming: state.userReducer.dreaming,
    dreams: state.dreamReducer.dreams
  }
}


export default connect(mapStateToProps, {fetchDreams})(HomeContainer)
