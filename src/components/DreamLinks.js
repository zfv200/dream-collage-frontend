import React from 'react'

const DreamLinks = (props) => {
  console.log(props)

  const displayLinks = props.analyses.map(analysis=>{
    return <li><h1><a target="_blank" href={analysis.url}> {analysis.name}</a></h1></li>
  })

  return (
    <div>
      <ul>
        {displayLinks}
      </ul>
      <br></br>
      <button onClick={props.goBack}>Back to Dreams</button>
      <br></br>
    </div>
  )
}

export default DreamLinks
