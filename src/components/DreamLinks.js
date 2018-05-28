import React from 'react'

const DreamLinks = (props) => {

  const renderLinks = props.links.map(link=>{
    return <h1><a target="_blank" href={link.url}>{link.name}</a></h1>
  })

  return (
    <div className="link-div">
      {renderLinks}
      <button onClick={props.handleClick}>Back</button>
    </div>
  )
}

export default DreamLinks
