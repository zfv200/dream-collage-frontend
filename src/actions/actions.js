// const API_URL = "http://localhost:3000/api/v1"
// const headers = { "Content-Type":"application/json"}


export function imageSearch(phrase){
  return (dispatch) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${phrase}`, {
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json",
        'Ocp-Apim-Subscription-Key':'derp'
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
        'X-RosetteAPI-Key':'derp',
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

export function startDreaming(){
  return {
    type: "BEGIN_DREAMING",
    payload: true
  }
}

export function finishCropping(){
  return {
    type: "FINISH_CROPPING",
    payload: false
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

export function addCroppedImage(imageData){
  return {
    type: "ADD_CROPPED_IMAGE",
    payload: imageData
  }
}
