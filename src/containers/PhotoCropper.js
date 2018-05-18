import React from 'react'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css';
import { connect } from 'react-redux'
import { addCroppedImage } from '../actions/actions'

class PhotoCropper extends React.Component{
  state={
    imageData: null,
    croppedImage: null
  }

  _crop(){
    let data = this.refs.cropper.getCroppedCanvas().toDataURL()

    this.setState({
      imageData: data
    })
  }

  cropImage = () => {
    this.setState({
      croppedImage: this.state.imageData
    })
  }

  // saveImage = () => {
  //   this.props.saveImage(this.state.croppedImage)
  // }

  render(){
    return (
      <div>
        <Cropper
          ref='cropper'
          src={this.props.image}
          style={{height: 400, width: '100%'}}
          aspectRatio={16 / 9}
          guides={false}
          crop={this._crop.bind(this)} />
        <button onClick={this.cropImage}>Crop</button>
        <button onClick={()=>this.props.addCroppedImage(this.state.croppedImage)}>Save Image</button>
      </div>
    )
  }
}

export default connect(null, {addCroppedImage})(PhotoCropper)

// <img src={this.state.imageData}/>
