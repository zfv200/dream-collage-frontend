import React from 'react'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css';
import { connect } from 'react-redux'
import { addCroppedImage } from '../actions/actions'
import { Grid, Button } from 'semantic-ui-react'

class PhotoCropper extends React.Component{
  state={
    imageData: null,
    croppedImage: null,
    anyCrop: false,
    style: null
  }

  _crop(){
    try {
      let data = this.refs.cropper.getCroppedCanvas().toDataURL()
      this.setState({
        imageData: data,
        anyCrop: true
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
      croppedImage: this.state.imageData,
      style: {
        borderColor: "#ffff66",
        boxShadow: "0px 0px 8px 8px #ffff66"
      }
    })
  }

  saveImage = () => {
    this.props.addCroppedImage(this.state.croppedImage)
    this.setState({
      style: {
        borderColor: "#80ff80",
        boxShadow: "0px 0px 8px 8px #80ff80"
      }
    })
  }

  render(){
    return (
      <div>
        {this.props.image ?
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <div className="cropper-div">
                <Cropper
                  ref='cropper'
                  src={this.props.image.url}
                  style={{height: 400, width: '100%'}}
                  aspectRatio={16 / 9}
                  guides={false}
                  crop={this._crop.bind(this)} />
              </div>
              <br></br>

              <Button color='teal' className="image-clicked" size="massive" fluid onClick={this.cropImage}>Crop</Button>
              <Button color='teal' className="image-clicked" size="massive" fluid onClick={this.saveImage}>Save Image</Button>
            </Grid.Column>
            <Grid.Column>
              <br></br>
              <br></br>
              <img className="preview" style={this.state.style} src={this.state.imageData} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        : null }
      </div>
    )
  }
}

export default connect(null, {addCroppedImage})(PhotoCropper)
