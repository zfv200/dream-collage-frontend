const defaultState = {
  currentUser: "zach",
  loggedIn: false,
  currentActivity: null,
  dreams: [
    {
      content: "dream1",
      collage: "fakeurl"
    }
  ]
}

export default function userReducer(state=defaultState, action){
  switch(action.type){
    case "LOGIN_USER":
      return {...state, currentUser: action.payload.user, dreams: action.payload.dreams}
    default:
      return state
  }
}
