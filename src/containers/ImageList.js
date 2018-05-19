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
        <PhotoCropper image={props.backgroundImage}/>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    images: state.collageReducer.images,
    backgroundImage: state.collageReducer.background_image
  }
}

export default connect(mapStateToProps)(imageList)
