
var selectedWord = "fish";
var currWord = "f_sh"

var Letter = function(selectedWord, currWord){
    this["Display"] = function(selectedWord, currWord){
        for(var i = 0; i < selectedWord.length; i++){
            console.log(selectedWord[i]);
        }
    };
}

var testing = new Letter(selectedWord, currWord);
testing["Display"]();
module.exports = Letter;