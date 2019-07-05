/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
//Array of objects below with all quotes, sources, citations, and years. Only the last array does not have a citation or year

var quotes = [
{
	quote: "You know nothing Jon Snow",
	source: "Ygritte",
	citation: "Game Of Thrones: Season 2, Episode 7",
	year: 2012
},
{
	quote: "All that is gold does not glitter, Not all those who wander are lost", 
	source: "Bilbo Baggins", 
	citation: "The Fellowship of the Ring",
	year: 1954
},	
{
	quote: "I am McLovin!", 
	source: "Fogel", 
	citation:"Superbad",
	year: 2017
},	
{
	quote: "Say my name",
	source: "Walter White",
	citation: "Breaking Bad: Season 5, Episode 7",
	year: 2012
},
{
	quote: "At the end of the day, the King and the pawn go back in the same box",
	source: "Italian Proverb",
}
];
console.log(quotes);

/***
  getRandomQuote function created below
   - random number stored into variable i
   - return the array with that random number 
***/

function getRandomQuote() {
  var i = Math.floor(Math.random() * 5);
  return quotes[i];
}

/***
  -printQuote function created below
  -getRandomQuote function assigned to the variable randomQuote
  -html string set to '' to start off 
  -html template followed for first two. pretty straight forward 
  -used an if statement to check the citation property before adding to string. in this case set to be greater than 0 because if it doesn't exit in an array it's -1. 
  -Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {
  var randomQuote = getRandomQuote(); 
  html = '';
  html += '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source; 
    if(randomQuote.citation > 0) {
      html += '<span class="citation">' + randomQuote.citation + '</span>';
    }
    if(randomQuote.year > 0 ) {
      html += '<span class="year">' + randomQuote.year + '</span>';
    }
  html += '</p>';
  document.getElementById('quote-box').innerHTML = html;
}

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


