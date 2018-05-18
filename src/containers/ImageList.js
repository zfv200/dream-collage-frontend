import React from 'react'
import { connect } from 'react-redux'
import PhotoCropper from './PhotoCropper'

const imageList = (props) => {

  const renderPhotos = props.images.map(image=>{
    return <PhotoCropper image={image}/>
  })

    return (
      <div>
        {renderPhotos}
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    images: state.collageReducer.images
  }
}

export default connect(mapStateToProps)(imageList)
