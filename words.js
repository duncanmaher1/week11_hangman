
var pool = require('./game.js');
var convert = require('./letter.js');


var Verify = function(arrayedWord, inputChoice) {
	this.arrayedWord = arrayedWord;
	this.inputChoice =inputChoice;
	this.check = function(){
	  for (var i = 0; i < arrayedWord.length; i++){
	  if(arrayedWord[i].valueOf() === inputChoice){
	  convert.dashedWord[i] = inputChoice;
	  	
	  	}
  	  }
  	convert.displayDashedWord();
  	
  
	}
}

