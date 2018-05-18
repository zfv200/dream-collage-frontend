import React from 'react'
import { connect } from 'react-redux'
import DreamForm from '../components/DreamForm'
import CropperContainer from './CropperContainer'

class DreamJournal extends React.Component{

  render(){
    return (
      <div>
        {this.props.collaging ?
        <CropperContainer /> :
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
