const quoteOfTheDay = [
    "Life is like a box of chocolates. You never know what you're gonna get", 
    "You win some, you lose some, but you live to fight another day", 
    "Heros are always remembered, but legends never die."
];

function randomQuote() {
     Math.floor(Math.random()*quoteOfTheDay.length);
}

return `Your inspiration for the day; ${randomQuote[quoteOfTheDay]}`