import React from 'react'
import { connect } from 'react-redux'
import Dream from '../components/Dream'

class DreamList extends React.Component{

  displayDreams(){
    let dreams = this.props.dreams
    return dreams.map(dreamObj=>{
      return <Dream key={dreamObj.id} dream={dreamObj}/>
    })
  }

  render(){
    this.props.dreams.map(dream=>console.log(dream.image))
    return (
      <div>
        {this.displayDreams()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dreams: state.dreamReducer.dreams
  }
}

export default connect(mapStateToProps)(DreamList)
