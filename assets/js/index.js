
const quote = document.querySelector('.quote span')
const author = document.querySelector('.author')
const newBtn = document.querySelector('.new')
const loader = document.querySelector('.loader')
const main = document.querySelector('main')



function fetchQuote() {
   main.style.display = "none"
   loader.style.display = "block"

   fetch("https://quotes15.p.rapidapi.com/quotes/random/?   language_code=en", {
	   "method": "GET",
	   "headers": {
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": "96e9441a97msh3a65a27761e5ba9p13e920jsna63a2c65daf5"
	}
   })
   .then(response => {
      return response.json()
   })
   .then( data => {
      console.log(data)
      quote.innerHTML = data.content;
      author.innerHTML = data.originator.name;
      main.style.display = "block"
      setTimeout(function() {
         loader.style.display = "none"
      }, 500)


   })
   .catch(err => {
	console.log(err);
   });
}

fetchQuote()