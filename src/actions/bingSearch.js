let https = require('https');
let subscriptionKey = '730c349bb4ae4c4583441d1dc1e628a2'
let host = 'api.cognitive.microsoft.com';
let path = '/bing/v7.0/images/search';
//hardcode
let term = 'puppies';

export function response_handler(response){
  let body = '';
  response.on('data', function (d){
    body += d;
  })
  response.on('end', function () {
    body = JSON.parse(body)

    console.log(body.value[0]['contentUrl'])
  })
}

export function bing_image_search(search){
  let request_params = {
    method : 'GET',
    hostname : host,
    path : path + '?q=' + encodeURIComponent(search),
    headers: {
      'Ocp-Apim-Subscription-Key' : subscriptionKey,
    }
  }
  let req = https.request(request_params, response_handler)
  req.end()
}

//try to translate to fetch?????
