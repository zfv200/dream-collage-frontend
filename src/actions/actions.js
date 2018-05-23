const API_URL = "http://localhost:3000/api/v1"
const headers = { "Content-Type":"application/json"}
let imageId = 0


export function imageSearch(phrase, type="image"){
  return (dispatch) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${phrase}&count=1&safeSearch=Moderate`, {
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json",
        'Ocp-Apim-Subscription-Key':'0be01a966e0f427184a88ae10d76af15'
      },
      method: 'get'
    })
    .then(res=>res.json())
    .then(json=>{
      if (type==="image"){
        json.value ? dispatch(addImage({url: json.value[0]['contentUrl'], id: ++imageId})) : null
      } else {
        json.value ? dispatch(addMood({url: json.value[0]['contentUrl'], id: ++imageId})) : null
      }
    })
  }
}

export function analysisSearch(content){
  console.log(content)
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
      console.log(json)
      if (json['keyphrases'] && json['keyphrases'].length > 0){
        dispatch(addAnalysis(json))
      }
    })
  }
}

export function saveDream(userId, content, collage) {
  console.log(collage)
  return (dispatch) => {
    fetch(API_URL + "/dreams", {
      headers: headers,
      method: "post",
      body: JSON.stringify({user_id: userId, content: content, collage: collage})
    }).then(res=>res.json()).then(console.log)
  }
}

export function fetchDreams(){
  return (dispatch) => {
    fetch(API_URL + "/dreams", {
      headers: headers,
      method: 'get',
    }).then(res=>res.json()).then(json=>{
      const dreams = json.data.filter(dream=>{
        return dream.attributes['user-id']===1
      })
      dreams.map(dream=>{
        dispatch(addDream(dream.attributes))
      })
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

export function hideHeader(){
  return {
    type: "HIDE_HEADER"
  }
}

export function resetHeader(){
  return {
    type: "RESET_HEADER"
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
    url: url,
    id: ++imageId
  }
}

export function resetImageId(){
  return {
    type: "RESET_IMAGE_ID",
    payload: 0
  }
}

export function addMood(url){
  return {
    type: "ADD_MOOD",
    url: url,
    id: ++imageId
  }
}

export function addCroppedImage(imageData){
  return {
    type: "ADD_CROPPED_IMAGE",
    url: imageData,
  }
}
