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
  } catch (error) {
      console.log('Uppps, aconteceu algun erro',error)
      getQuotefromAPI();
  }

}


const copyTo =()=>navigator.clipboard.writeText(quoteText.textContent);

const twitQuote = ()=>{
    const quote = quoteText.innerText;
    const author = quoteAuthor.innerHTML;
    const url = `https://twitter.com/intent/tweet?text=${quote} -  ${author}`;
    window.open(url, '_blank');
}


nextBtn.addEventListener('click', getQuotefromAPI);
copyBtn.addEventListener('click', copyTo);



getQuotefromAPI();

