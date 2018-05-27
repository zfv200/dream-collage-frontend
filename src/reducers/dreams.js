const defaultState = {
  dreams: [],
  collaging: false,
  analysis_links: []
}

export default function dreamReducer(state=defaultState, action){
  switch(action.type){
    case "ADD_DREAM":
      return {...state, dreams: [...state.dreams, action.payload]}
    case "START_COLLAGE":
      return {...state, collaging: action.payload}
    case "END_COLLAGE":
      return {...state, collaging: action.payload}
    case "EMPTY_LINKS":
      return {...state, analysis_links: []}
    case "ADD_ANALYSIS_LINK":
      return {...state, analysis_links: [...state.analysis_links, action.payload]}
    default:
      return state
  }
}
