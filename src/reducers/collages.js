const defaultState = {
  content: "",
  adjectives: "",
  mood: "",
  rosetteRes: [],
  images: []
}

export default function collageReducer(state=defaultState, action){
  switch(action.type){
    case "ADD_KEYWORDS":
      return {...state, content: action.content, adjectives: action.adjectives, mood: action.mood}
    case "ADD_ANALYSIS":
      return {...state, rosetteRes: action.payload}
    case "ADD_IMAGE":
      return {...state, images: [...state.images, action.payload]}
    default:
      return state
  }
}
