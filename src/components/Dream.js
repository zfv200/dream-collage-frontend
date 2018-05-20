import React from 'react'

const Dream = ({dream}) => {
  return (
    <div className="dream-div">
      <img className="dream-image" src={dream.image}/>
      <h1>{dream.content}</h1>
      <br></br>
    </div>
  )
}

export default Dream
