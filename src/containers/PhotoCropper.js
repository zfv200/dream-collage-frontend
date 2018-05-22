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
    anyCrop: false
  }

  _crop(){
    console.log("called")

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
      croppedImage: this.state.imageData
    })
  }

  // saveImage = () => {
  //   this.props.saveImage(this.state.croppedImage)
  // }

  render(){
    return (
      <div>
        {this.props.image ?
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Cropper
                ref='cropper'
                src={this.props.image}
                style={{height: 400, width: '100%'}}
                aspectRatio={16 / 9}
                guides={false}
                crop={this._crop.bind(this)} />
              <br></br>

              <Button color='teal' className="image-clicked" size="massive" fluid onClick={this.cropImage}>Crop</Button>
              <Button color='teal' className="image-clicked" size="massive" fluid onClick={()=>this.props.addCroppedImage(this.state.croppedImage)}>Save Image</Button>
            </Grid.Column>
            <Grid.Column>
              <br></br>
              <br></br>
              <img className="preview" src={this.state.imageData}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        : null }
      </div>
    )
  }
}

export default connect(null, {addCroppedImage})(PhotoCropper)
