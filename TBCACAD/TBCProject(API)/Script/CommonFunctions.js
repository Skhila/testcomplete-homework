function generateRandomCardNumber() {
  let randomNumber = '';
  for (let i = 0; i < 16; i++) {
    randomNumber += Math.floor(Math.random() * 10);
  }
  return randomNumber;
}

function getSingleFieldInfoFromApi(URL, nameOfField){
  let result;
  let aqHttpRequest = aqHttp.CreateGetRequest(URL);
  
  let aqHttpResponse = aqHttpRequest.Send();
  
  if (aqHttpResponse != null)
  {
    let responseJson = JSON.parse(aqHttpResponse.Text);

    result = responseJson[nameOfField];

  }
  return result;
}

module.exports.getSingleFieldInfoFromApi = getSingleFieldInfoFromApi;
module.exports.generateRandomCardNumber = generateRandomCardNumber;