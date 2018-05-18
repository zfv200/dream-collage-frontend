import React from 'react'
import { connect } from 'react-redux'
import CollageImage from '../components/CollageImage'
import CanvasContainer from './CanvasContainer'

const CollageContainer = (props) => {
    const indexHalf = Math.floor(props.collageImages.length / 2)
    const leftSide = props.collageImages.slice(0, indexHalf)
    const rightSide = props.collageImages.slice(indexHalf)
    const renderCropsA = leftSide.map(image=>{
      return <CollageImage image={image}/>
    })
    const renderCropsB = rightSide.map(image=>{
      return <CollageImage image={image}/>
    })

    return (
      <div>
        <div className="ui grid">
          <div className="three wide column">
            {renderCropsA}
          </div>
          <div className="three wide column">
            <CanvasContainer />
          </div>
          <div className="three wide column">
            {renderCropsB}
          </div>
        </div>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    collageImages: state.collageReducer.cropped_images
  }
}

export default connect(mapStateToProps)(CollageContainer)
