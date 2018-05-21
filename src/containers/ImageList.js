import React from 'react'
import { connect } from 'react-redux'
import PhotoCropper from './PhotoCropper'

const imageList = (props) => {
  const renderPhotos = props.images.map(image=>{
    console.log(image.url)
    return <PhotoCropper image={image.url}/>
  })

    return (
      <div>
        <PhotoCropper style={{zIndex: -1}} image={props.backgroundImage.url}/>
        {renderPhotos}
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
