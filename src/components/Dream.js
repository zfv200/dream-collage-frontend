import React from 'react'

const Dream = ({dream}) => {
  return (
    <div>
      <img src={dream.image}/>
      <h1>{dream.content}</h1>
    </div>
  )
}

export default Dream
