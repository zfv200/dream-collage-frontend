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
