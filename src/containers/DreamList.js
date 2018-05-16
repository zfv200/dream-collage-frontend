import React from 'react'
import { connect } from 'react-redux'
import Dream from '../components/Dream'

class DreamList extends React.Component{

  displayDreams(){
    let dreams = this.props.dreams
    return dreams.map(dreamObj=>{
      return <Dream dream={dreamObj}/>
    })
  }

  render(){
    return (
      <div>
        {this.displayDreams()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dreams: state.userReducer.dreams
  }
}

export default connect(mapStateToProps)(DreamList)
