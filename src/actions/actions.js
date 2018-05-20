// const API_URL = "http://localhost:3000/api/v1"
// const headers = { "Content-Type":"application/json"}


export function imageSearch(phrase, type="image"){
  return (dispatch) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${phrase}&count=1&safeSearch=Moderate`, {
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json",
        'Ocp-Apim-Subscription-Key':'derp'
      },
      method: 'get'
    })
    .then(res=>res.json())
    .then(json=>{
      if (type==="image"){
        dispatch(addImage(json.value[0]['contentUrl']))
      } else {
        dispatch(addMood(json.value[0]['contentUrl']))
      }
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

export function endDreaming(){
  return {
    type: "END_DREAMING",
    payload: false
  }
}

export function finishCropping(){
  console.log("called")
  return {
    type: "FINISH_CROPPING",
    payload: false
  }
}

export function resetCropping(){
  return {
    type: "RESET_CROPPING",
    payload: true
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

export function endCollage(){
  return {
    type: "END_COLLAGE",
    payload: false
  }
}

export function resetCollageState(){
  return {
    type: "RESET_COLLAGE_STATE",
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

export function addMood(url){
  return {
    type: "ADD_MOOD",
    payload: url
  }
}

export function addCroppedImage(imageData){
  return {
    type: "ADD_CROPPED_IMAGE",
    payload: imageData
  }
}
