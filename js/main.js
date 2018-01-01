
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

var checkForMatch = function () {
	console.log("Checking for match");
	if (cardsInPlay[cardsInPlay.length - 2] === cardsInPlay[cardsInPlay.length - 1]) {
		document.getElementById("match-alert").innerHTML = "You found a match!";
	} else {
		document.getElementById("match-alert").innerHTML = "Not a match. Try again.";
	}
};

// function that displays the card image when a user clicks on the card
var flipCard = function (){
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
		if (cardsInPlay.length % 2 === 0){
		checkForMatch();
	};
};



//function that loops through cards array and adds a click event to each card, so that when a card is clicked, the flipCard function will run
var createBoard = function (){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard(); 

//shuffles cards using a version of the Fisher-Yates shuffle 
function shuffle(array) {
  var m = array.length, t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

var resetBoard = function (){
		var gameBoard = document.getElementById('game-board');
		while (gameBoard.firstChild) {
			gameBoard.removeChild(gameBoard.firstChild);
		};
		createBoard();
		shuffle(cards);

		//clear alert text
		document.getElementById("match-alert").innerHTML = " ";
};

document.getElementById("reset").addEventListener("click", resetBoard);





