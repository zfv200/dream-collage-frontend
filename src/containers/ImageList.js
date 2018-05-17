import React from 'react'
import { connect } from 'react-redux'
import PhotoCropper from './PhotoCropper'

const imageList = (props) => {

  const renderCrops = props.images.map(image=>{
    return <PhotoCropper image={image}/>
  })

    return (
      <div>
        {renderCrops}
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    images: state.collageReducer.images
  }
}

export default connect(mapStateToProps)(imageList)
