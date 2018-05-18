import React from 'react'
import { connect } from 'react-redux'
import CollageImage from '../components/CollageImage'

const CollageContainer = (props) => {
    const renderCrops = props.collageImages.map(image=>{
      return <CollageImage image={image}/>
    })

    return (
      <div>
        {renderCrops}
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    collageImages: state.collageReducer.cropped_images
  }
}

export default connect(mapStateToProps)(CollageContainer)
