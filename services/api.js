 
 const proxyUrl ='https://cors-anywhere.herokuapp.com/';
 const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
 
 
 /*Function to get data from api*/
 export default async function getQuotefromAPI(){
    showSpiner(false) 
   try {
      const response = await fetch(proxyUrl + apiUrl);
      const data = await response.json();
      quoteText.innerText = data.quoteText;
      quoteAuthor.innerText = "Author: " +data.quoteAuthor;
      if(data.quoteAuthor==="")
            quoteAuthor.innerText = "Author:  Unkown";
       else
            quoteAuthor.innerText = "Author:" + " "+data.quoteAuthor; 
        
       showSpiner(true)      
  } catch (error) {
      console.log('Uppps, aconteceu algun erro',error)
      getQuotefromAPI();
  }

}