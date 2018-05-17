const API_URL = "http://localhost:3000/api/v1"
const headers = { "Content-Type":"application/json"}

//login form action:
export function login(username){
//   return (dispatch) => {
//     fetch(API_URL + "/sessions", {
//       method: "POST",
//       headers: {
//         "Content-Type":"application/json",
//         Accept: "application/json"
//       },
//       body: JSON.stringify({username, password})
//     })
//     .then(res=>res.json())
//     .then(userData=>{
//       dispatch(loginUser(userData))
//     })
//   }
}

export function imageSearch(phrase){
  return (dispatch) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${phrase}`, {
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json",
        'Ocp-Apim-Subscription-Key':'730c349bb4ae4c4583441d1dc1e628a2'
      },
      method: 'get'
    })
    .then(res=>res.json())
    .then(json=>{
      dispatch(addImage(json.value[0]['contentUrl']))
    })
  }
}

export function analysisSearch(content){
  return (dispatch) => {
    fetch("https://cors-anywhere.herokuapp.com/https://api.rosette.com/rest/v1/topics", {
      headers: {
        'X-RosetteAPI-Key':'027a59c5132d1fd52eedf6e798f52645',
        'Content-Type':'application/json',
        'Accept':'application/json',
      },
      method: "POST",
      body: JSON.stringify({"content":content})
    })
    .then(res=>res.json())
    .then(json=>{
      if (json['keyphrases'].length > 0){
        dispatch(addAnalysis(json))
      }
    })
  }
}


export function loginUser(userData) {
  return {
    type: "LOGIN_USER",
    payload: userData
  }
}

export function addDream(dreamData) {
  return {
    type: "ADD_DREAM",
    payload: dreamData
  }
}

export function startCollage(){
  return {
    type: "START_COLLAGE",
    payload: true
  }
}

export function startDreaming(){
  return {
    type: "BEGIN_DREAMING",
    payload: true
  }
}

export function addKeywords(formState){
  return {
    type: "ADD_KEYWORDS",
    content: formState.content,
    adjectives: formState.adjectives,
    mood: formState.mood
  }
}

export function addAnalysis(text){
  return {
    type: "ADD_ANALYSIS",
    payload: text
  }
}

export function addImage(url){
  return {
    type: "ADD_IMAGE",
    payload: url
  }
}
