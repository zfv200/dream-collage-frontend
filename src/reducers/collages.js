const defaultState = {
  imageId: 0,
  content: "",
  adjectives: "",
  mood: "",
  rosetteRes: [],
  images: [],
  // images: [{url: "http://www.catster.com/wp-content/uploads/2017/11/A-Siamese-cat.jpg", id: 1},
  //          {url: "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/152964589-welcome-home-new-cat-632x475.jpg", id: 2},
  //          {url: "http://r.ddmcdn.com/s_f/o_1/cx_0/cy_0/cw_300/ch_300/w_300/APL/uploads/2014/10/kitten-cuteness300.jpg", id: 3},
  //          {url: "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2018%2F04%2Floki_the_sphynx-01_1.jpg%3Fw%3D1800&w=700&q=85", id: 4}],
  // https://i.ytimg.com/vi/LDN6AXOZL3s/maxresdefault.jpg
  cropped_images: [],
  background_image: {},
  // background_image: {url: "https://i.ytimg.com/vi/LDN6AXOZL3s/maxresdefault.jpg", id: 5},
  headerImage: "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/E8mQw973xilexniun/videoblocks-dreamy-liquid-ink-colors-blending-mixing-swirl-fluid_sjbzxacjg_thumbnail-full01.png"
}

export default function collageReducer(state=defaultState, action){
  console.log(action, state)
  switch(action.type){
    case "ADD_KEYWORDS":
      return {...state, content: action.content, adjectives: action.adjectives, mood: action.mood}
    case "ADD_ANALYSIS":
      return {...state, rosetteRes: action.payload}
    case "ADD_IMAGE":
      return {...state, images: [...state.images, {url: action.url, id: action.id}]}
    case "ADD_CROPPED_IMAGE":
      return {...state, cropped_images: [...state.cropped_images, {url: action.url, id: ++state.imageId}]}
    case "ADD_MOOD":
      return {...state, background_image: {url: action.url, id: action.id}}
    case "RESET_COLLAGE_STATE":
      return defaultState
    case "HIDE_HEADER":
      return {...state, headerImage: ""}
    case "RESET_HEADER":
      return {...state, headerImage: "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/E8mQw973xilexniun/videoblocks-dreamy-liquid-ink-colors-blending-mixing-swirl-fluid_sjbzxacjg_thumbnail-full01.png"}
    default:
      return state
  }
}
