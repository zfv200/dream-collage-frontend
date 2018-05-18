import React from 'react'
import { startDreaming } from '../actions/actions'
import { connect } from 'react-redux'

import { Button } from 'semantic-ui-react'

const AddDream = (props) => {

  return (
    <div>
      <Button animated='fade' onClick={()=>props.startDreaming()}>
        <Button.Content visible>Add Dream</Button.Content>
        <Button.Content hidden></Button.Content>
      </Button>
    </div>
  )
}

export default connect(null, {startDreaming})(AddDream)
