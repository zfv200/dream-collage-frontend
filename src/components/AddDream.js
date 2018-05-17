import React from 'react'
import { startDreaming } from '../actions/actions'
import { connect } from 'react-redux'

const AddDream = (props) => {

  return (
    <button onClick={()=>props.startDreaming()}>add dream</button>
  )
}

export default connect(null, {startDreaming})(AddDream)
