export function widthPlus(){
  if (this.state.selectedImage!==null) {
    let key = this.state.selectedImage.toString()
    this.setState({
      [key]: {
        ...this.state[key],
        width: `${parseInt(this.state[key].width) + 50}px`,
      }
    })
  }
}
