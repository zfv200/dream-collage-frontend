const defaultState = {
  currentUser: "zach",
  loggedIn: false,
  currentActivity: null,
  dreams: [
    {
      id: "1",
      content: "dream1",
      collage: "fakeurl"
    },
    {
      id: "2",
      content: "dream2",
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
