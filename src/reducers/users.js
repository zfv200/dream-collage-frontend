const defaultState = {
  currentUser: "zach",
  loggedIn: false,
  currentActivity: null,
}

export default function userReducer(state=defaultState, action){
  switch(action.type){
    case "LOGIN_USER":
      return {...state, currentUser: action.payload.user}
    default:
      return state
  }
}
