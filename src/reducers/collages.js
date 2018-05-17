const defaultState = {
  content: "",
  adjectives: "",
  mood: "",
  rosetteRes: [],
}

export default function collageReducer(state=defaultState, action){
  switch(action.type){
    case "ADD_KEYWORDS":
      return {...state, content: action.content, adjectives: action.adjectives, mood: action.mood}
    case "ADD_ANALYSIS":
      return {rosetteRes: action.payload}
    default:
      return state
  }
}
