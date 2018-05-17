const defaultState = {
  currentUser: "zach",
  loggedIn: false,
  dreaming: false
}

export default function userReducer(state=defaultState, action){
  switch(action.type){
    case "LOGIN_USER":
      return {...state, currentUser: action.payload.user}
    case "BEGIN_DREAMING":
      //later utilize this function for ending dreaming true maybe
      return {...state, dreaming: action.payload}
    default:
      return state
  }
}