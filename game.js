
var pool = ['Aussie', 'Corgi', 'Pitbull', 'Labrador', 'Poodle', 'Wolfhound']

var selection = [];

function WordToGuess(pool,selection){
	this.pool = pool;
	this.selection = selection;
}

WordToGuess.prototype.pool = function() {
	var number = Math.floor(Math.random() * pool.length);
	this.selection.unshift(this.pool[number]);

}

var initialWord = new WordToGuess(pool, selection);
initialWord.pool();
module.exports = initialWord;
module.exports = selection;
