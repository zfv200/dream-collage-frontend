import React from 'react'

const Dream = ({dream}) => {
  console.log(dream.image)
  return (
    <div>
      <img src={dream.image}/>
      <h1>{dream.content}</h1>
    </div>
  )
}

export default Dream
