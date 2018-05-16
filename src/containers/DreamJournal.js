import React from 'react'
import { connect } from 'react-redux'
import DreamForm from '../components/DreamForm'
import CollageContainer from './CollageContainer'
//change this all to be done in dreamform so you can set the state of/save the whole dream


class DreamJournal extends React.Component{

  render(){
    return (
      <div>
        {this.props.collaging ?
        <CollageContainer /> :
        <DreamForm handleFinish={this.handleFinish}/> }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    collaging: state.dreamReducer.collaging
  }
}

export default connect(mapStateToProps)(DreamJournal)
