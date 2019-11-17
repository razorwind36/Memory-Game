/* 
console.log("Up and running!");

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log("User flipped " + cardOne);
*/

var cards = ["queen","queen","king","king"];

var cardsInPLay = [];
var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPLay.push(cardOne);
cardsInPLay.push(cardTwo);

console.log("User has flipped " + cardOne);
console.log("User has flipped " + cardTwo);

if(cardsInPLay.length === 2){
    if(cardsInPLay[0] === cardsInPLay[1]) alert("You found a match!");
    else alert("Sorry, try again");
};