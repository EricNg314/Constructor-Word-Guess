var letterJS = require("./Letter");


var Word = function (selectedWord) {
    // var letter = new letterJS();
    this.storeWord = function (selectedWord) {
        this["stored"] = selectedWord;
        console.log("Stored word: " + this["stored"]);
    }


}



module.exports = Word;