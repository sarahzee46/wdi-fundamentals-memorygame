let cards = ["queen","queen","king","king"];
let cardsInPlay = [];
let cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("user flipped " + cardsInPlay);
let cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("user flipped " + cardTwo);
if(cardsInPlay.length===2)
{
	if(cardsInPlay[0]===cardsInPlay[1])
		alert("you found a match!");
	else
		alert("sorry try again!");
}


