const randGen = array => Math.floor(Math.random() * array.length);

function randomQuote() {
    const verbs = [
        "jump",
        "climb",
        "bop it",
        "drive",
        "sit"
    ];
    const nouns = [
        "granny",
        "book",
        "cookie",
        "blanket",
        "Utah"
    ];
    const pronouns = [
        "he",
        "she",
        "they",
        "them"
    ];
    return `You ${verbs[randGen(verbs)]} you say how 
    ${nouns[randGen(nouns)]} then toss it to ${pronouns[randGen(pronouns)]}`
}

console.log(randomQuote());