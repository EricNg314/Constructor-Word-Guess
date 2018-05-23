var WordJS = require('./Word');

var word = new WordJS();


var guessList = ["a", "b", "c", "d", "e",
    "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y",
    "z"];

var wordsList = ["fish"];
// var wordsList = ["fish", "pumpkin", "chicken", "lychee", "apple",
//     "borscht", "sago", "tapioca", "dumpling", "lobster"];

var wordSelected = wordsList[Math.floor(Math.random()*wordsList.length)];

var numbGuesses = 14;
word.storeWord(wordSelected);