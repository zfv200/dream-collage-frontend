const defaultState = {
  dreams: [],
  collaging: false
}

export default function botReducer(state=defaultState, action){
  switch(action.type){
    case "ADD_DREAM":
      return {...state, dreams: [...state.dreams, action.payload]}
    case "START_COLLAGE":
      return {...state, collaging: action.payload}
    case "END_COLLAGE":
      return {...state, collaging: action.payload}
    default:
      return state
  }
}
