const defaultState = {
  content: "",
  adjectives: "",
  mood: "",
  rosetteRes: [],
  images: [],
  cropped_images: []
}

export default function collageReducer(state=defaultState, action){
  console.log(action)
  switch(action.type){
    case "ADD_KEYWORDS":
      return {...state, content: action.content, adjectives: action.adjectives, mood: action.mood}
    case "ADD_ANALYSIS":
      return {...state, rosetteRes: action.payload}
    case "ADD_IMAGE":
      return {...state, images: [...state.images, action.payload]}
    case "ADD_CROPPED_IMAGE":
      return {...state, cropped_images: [...state.cropped_images, action.payload]}
    default:
      return state
  }
}
