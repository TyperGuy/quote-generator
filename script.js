//get quote from API

async function getQuotefromAPI(){

  const proxyUrl ='https://cors-anywhere.herokuapp.com/';
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote?&lang=en&format=json';

  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    console.log(data);
    
  } catch (error) {
    console.log('Uppps, aconteceu algun erro',error)
  }

}

//call on load

getQuotefromAPI();
