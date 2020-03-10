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
	if(cardsInPlay.length===2)
{

	if(cardsInPlay[0]===cardsInPlay[1])
		alert("you found a match!");
	else
		alert("sorry try again!");
}

}

function flipCard(cardId) {

console.log("user flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
checkForMatch();
console.log(cards[cardId].suit);
console.log(cards[cardId].cardImage);

}
flipCard(0);
flipCard(2);


