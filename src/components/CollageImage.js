import React from 'react'
// import { connect } from 'react-redux'


import Rnd from 'react-rnd'


const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 1px #ddd',
  background: '#f0f0f0',
};

const CollageImage = (props) => {

  return (
    <Rnd default={{ x: 0, y: 0, width: 200, height: 200, }} >
      <img style={{opacity:0.7}} src={props.image}/>
    </Rnd>
  )
}

export default CollageImage
