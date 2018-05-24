import React from 'react'

const Dream = ({dream}) => {
  return (
    <div className="dream-div">
      <h1>{dream.content}</h1>
      {dream.images ? dream.images.map(image=>{
        return <img src={image.image_data} style={{width: image.width, WebkitFilter: image.WebkitFilter, opacity: image.opacity, height: image.height, border_radius: image.border_radius, left: image.left, bottom: image.bottom}}/>
      }) : null}
      <br></br>
    </div>
  )
}

export default Dream

// <h1>{dream.analysis_links ? dream.analysis_links.map(link=><h1>link</h1>) : null}</h1>
// { width: "200px", height: "200px", opacity: "0.5", borderRadius: "0%", WebkitFilter: 'blur(0px) grayscale(0%) invert(0%) sepia(0%)'},


// <img className="dream-image" src={dream.collage}/>
