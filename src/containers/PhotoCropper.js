import React from 'react'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css';
import { connect } from 'react-redux'
import { addCroppedImage } from '../actions/actions'
import { Grid, Button } from 'semantic-ui-react'

class PhotoCropper extends React.Component{
  state={
    imageData: null,
    croppedImage: null
  }

  _crop(){
    try {
      let data = this.refs.cropper.getCroppedCanvas().toDataURL()
      this.setState({
        imageData: data
      })
    }
    catch(err) {
      this.setState({
        imageData: null
      })
    }
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
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Cropper
                ref='cropper'
                src={this.props.image.url}
                style={{height: 400, width: '100%'}}
                aspectRatio={16 / 9}
                guides={false}
                crop={this._crop.bind(this)} />
            </Grid.Column>
            <Grid.Column>
              <Button size="massive" fluid onClick={this.cropImage}>Crop</Button>
              <Button size="massive" fluid onClick={()=>this.props.addCroppedImage(this.state.croppedImage)}>Save Image</Button>
              <img src={this.state.imageData}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default connect(null, {addCroppedImage})(PhotoCropper)
