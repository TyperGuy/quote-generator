//get quote from API

async function getQuotefromAPI(){

  const apiUrl = 'http://api.forimastic.com/api/1.0/?method=getQuote?&lang=en&format=json';

  try {
    
  } catch (error) {
    console.log('Uppps, aconteceu algun erro',error)
  }

}

//call on load

getQuotefromAPI();
