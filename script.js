const refreshBtn = document.querySelector('#nextBtn');
const copyBtn = document.querySelector('#copyBtn');
const shareBtn = document.querySelector('#shareBtn');
const quoteText = document.querySelector('#quote')


//get quote from API

async function getQuotefromAPI(){

  const proxyUrl ='https://cors-anywhere.herokuapp.com/';
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    quoteText.innerText = data.quoteText;
    console.log(data)
    
    
  } catch (error) {
    console.log('Uppps, aconteceu algun erro',error)
    getQuotefromAPI();
  }

}


getQuotefromAPI();


