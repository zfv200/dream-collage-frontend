import React from 'react'
import { startDreaming } from '../actions/actions'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

const AddDream = (props) => {

  return (
    <div>
      <br></br><br></br>
      <Button color='teal' onClick={()=>props.startDreaming()}>Add Dream</Button>
    </div>
  )
}

export default connect(null, {startDreaming})(AddDream)
