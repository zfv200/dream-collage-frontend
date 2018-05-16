const defaultState = {
  currentUser: null,
  dreams: []
}

export default function userReducer(state=defaultState, action){
  switch(action.type){
    case "LOGIN_USER":
      return {...state, currentUser: action.payload.user, dreams: action.payload.matches}
    default:
      return state
  }
}
