import React from 'react'

const Dream = ({dream}) => {
  return (
    <div className="dream-div">
      <img className="dream-image" src={dream.collage}/>
      <h1>{dream.content}</h1>
      <h1>{dream.analysis_links ? dream.analysis_links.map(link=><h1>link</h1>) : null}</h1>
      <br></br>
    </div>
  )
}

export default Dream
