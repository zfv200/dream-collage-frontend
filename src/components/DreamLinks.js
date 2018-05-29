import React from 'react'
import { Button } from 'semantic-ui-react'


const DreamLinks = (props) => {

  const renderLinks = props.links.map(link=>{
    return <h1 className="dream-font"><a target="_blank" href={link.url}>{link.name}</a></h1>
  })

  return (
    <div className="link-div">
      <br></br>
      {renderLinks}
      <Button color='teal' onClick={props.handleClick}>Hide interpretation</Button>
      <br></br><br></br>
    </div>
  )
}

export default DreamLinks
