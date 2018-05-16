const API_URL = "http://localhost:3000/api/v1"
const headers = { "Content-Type":"application/json"}

//login form action:
export function login(username, password){
  return (dispatch) => {
    fetch(API_URL + "/sessions", {
      headers: headers,
      body: JSON.stringify({username, password})
    })
    .then(res=>res.json())
    .then(userData=>{
      dispatch({
        type: "LOGIN_USER",
        payload: userData
      })
    })
  }
}
