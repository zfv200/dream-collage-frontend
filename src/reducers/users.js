const defaultState = {
  currentUser: "zach",
  userId: "1",
  loggedIn: false,
  dreaming: false,
  cropping: true
}

export default function userReducer(state=defaultState, action){
  switch(action.type){
    case "LOGIN_USER":
      return {...state, currentUser: action.payload.user}
    case "BEGIN_DREAMING":
      return {...state, dreaming: action.payload}
    case "FINISH_CROPPING":
      return {...state, cropping: action.payload}
    case "RESET_CROPPING":
      return {...state, cropping: action.payload}
    case "END_DREAMING":
      return {...state, dreaming: action.payload}
    default:
      return state
  }
}
