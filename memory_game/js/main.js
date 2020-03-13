const cards = [
{
	rank: 'queen',
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: "images/king-of-hearts.png"

},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: "images/king-of-diamonds.png"
}];
let cardsInPlay = [];

function checkForMatch() {
    
	


	if(cardsInPlay[0]===cardsInPlay[1])
		alert("you found a match!");
	else
		alert("sorry try again!");
}



function flipCard() {

let cardId = this.getAttribute('data-id');
console.log("user flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
console.log(cards[cardId].suit);
console.log(cards[cardId].cardImage);

this.setAttribute('src',cards[cardId].cardImage);
if(cardsInPlay.length===2)
	checkForMatch();

}


var createBoard = function() {
	for(let i=0;i<cards.length;i++)
	{
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src',"images/back.png");
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);

		document.getElementById('game-board').appendChild(cardElement);
	}
}
createBoard();
	



