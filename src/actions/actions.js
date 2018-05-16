const API_URL = "http://localhost:3000/api/v1"
const headers = { "Content-Type":"application/json"}

//login form action:
export function login(username, password){
  return (dispatch) => {
    fetch(API_URL + "/sessions", {
      method: "POST"
      headers: {
        "Content-Type":"application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({username, password})
    })
    .then(res=>res.json())
    .then(userData=>{
      dispatch(loginUser(userData))
    })
  }
}

export function loginUser(userData) {
  return {
    type: "LOGIN_USER",
    payload: userData
  }
}
