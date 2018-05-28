const defaultState = {
  dreams: [],
  collaging: false,
  analysis_view: false,
  analysis_links: [],
  currentDreamId: null
}

export default function dreamReducer(state=defaultState, action){
  console.log(action, state.analysis_links);
  switch(action.type){
    case "ADD_DREAM":
      return {...state, dreams: [...state.dreams, action.payload]}
    case "START_COLLAGE":
      return {...state, collaging: action.payload}
    case "END_COLLAGE":
      return {...state, collaging: action.payload}
    case "ADD_ANALYSIS_LINK":
      return {...state, analysis_links: [...state.analysis_links, action.payload]}
    case "SET_DREAM_ID":
      return {...state, currentDreamId: action.payload}
    default:
      return state
  }
}
