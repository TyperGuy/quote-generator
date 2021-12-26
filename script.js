const nextBtn = document.querySelector('#nextBtn');
const copyBtn = document.querySelector('#copyBtn');
const sreBtn = document.querySelector('#shareBtn');
const quoteText = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#author');
const spinner = document.getElementById('loader');
const myToast = document.getElementById('toast');
const proxyUrl ='https://cors-anywhere.herokuapp.com/';
const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';


//get quote from API

function showToast(){
    myToast.style.display="flex";
    setTimeout( ()=> myToast.style.display="none" , 1000);
}
function showSpiner(){
    if(spinner.hidden)
        spinner.hidden = false;
    else
        spinner.hidden = true;
}
async function getQuotefromAPI(){
   spinner.hidden = false;
   try {
      const response = await fetch(proxyUrl + apiUrl);
      const data = await response.json();
      quoteText.innerText = data.quoteText;
      quoteAuthor.innerText = "Author: " +data.quoteAuthor;
      if(data.quoteAuthor==="")
            quoteAuthor.innerText = "Author:  Unkown";
       else
            quoteAuthor.innerText = "Author:" + " "+data.quoteAuthor; 
        
       spinner.hidden = true;      
  } catch (error) {
      console.log('Uppps, aconteceu algun erro',error)
      getQuotefromAPI();
  }

}


const copyTo =()=>{
    navigator.clipboard.writeText(quoteText.textContent);
    showToast();
}

const twitQuote = ()=>{
    const quote = quoteText.innerText;
    const author = quoteAuthor.innerHTML;
    const url = `https://twitter.com/intent/tweet?text=${quote} -  ${'Author: ' +author}`;
    window.open(url, '_blank');
}




nextBtn.addEventListener('click', getQuotefromAPI);
copyBtn.addEventListener('click', copyTo);
sreBtn.addEventListener('click',twitQuote);

getQuotefromAPI();

