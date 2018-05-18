const defaultState = {
  content: "",
  adjectives: "",
  mood: "",
  rosetteRes: [],
  // images: [],
  images: ["http://www.catster.com/wp-content/uploads/2017/11/A-Siamese-cat.jpg",
           "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/152964589-welcome-home-new-cat-632x475.jpg",
           "http://r.ddmcdn.com/s_f/o_1/cx_0/cy_0/cw_300/ch_300/w_300/APL/uploads/2014/10/kitten-cuteness300.jpg",
           "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2018%2F04%2Floki_the_sphynx-01_1.jpg%3Fw%3D1800&w=700&q=85"],
  cropped_images: [],
  background_image: "https://i.ytimg.com/vi/LDN6AXOZL3s/maxresdefault.jpg"
}

export default function collageReducer(state=defaultState, action){
  switch(action.type){
    case "ADD_KEYWORDS":
      return {...state, content: action.content, adjectives: action.adjectives, mood: action.mood}
    case "ADD_ANALYSIS":
      return {...state, rosetteRes: action.payload}
    case "ADD_IMAGE":
      return {...state, images: [...state.images, action.payload]}
    case "ADD_CROPPED_IMAGE":
      return {...state, cropped_images: [...state.cropped_images, action.payload]}
    case "ADD_MOOD":
      return {...state, background_image: action.payload}
    case "RESET_COLLAGE_STATE":
      return defaultState
    default:
      return state
  }
}
