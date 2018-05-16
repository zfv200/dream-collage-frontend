import React from 'react'

const AddDream = (props) => {

  const handleClick = () => {
    props.changeToDreaming()
  }

  return (
    <button onClick={handleClick}>add dream</button>
  )
}

export default AddDream
