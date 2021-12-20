const nextBtn = document.querySelector('#nextBtn');
const copyBtn = document.querySelector('#copyBtn');
const sreBtn = document.querySelector('#shareBtn');
const quoteText = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#author');
const proxyUrl ='https://cors-anywhere.herokuapp.com/';
const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';


//get quote from API

async function getQuotefromAPI(){
   try {
      const response = await fetch(proxyUrl + apiUrl);
      const data = await response.json();
      quoteText.innerText = data.quoteText;
      quoteAuthor.innerText = data.quoteAuthor;
      console.log(data)
  } catch (error) {
      console.log('Uppps, aconteceu algun erro',error)
      getQuotefromAPI();
  }

}

function copyTo(){
 
    //window.clipboardData.setData("quote", quoteText.value);
    navigator.clipboard.writeText(quoteText.textContent);
  

  
}

nextBtn.addEventListener('click', getQuotefromAPI);
copyBtn.addEventListener('click', copyTo);





