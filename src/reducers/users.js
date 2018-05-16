const defaultState = {
  currentUser: null,
  loggedIn: false,
  dreams: []
}

export default function userReducer(state=defaultState, action){
  switch(action.type){
    case "LOGIN_USER":
      return {...state, currentUser: action.payload.user, dreams: action.payload.dreams}
    default:
      return state
  }
}
