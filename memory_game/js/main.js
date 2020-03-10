let cards = ["queen","queen","king","king"];
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

console.log("user flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);
checkForMatch();

}
flipCard(0);
flipCard(2);


