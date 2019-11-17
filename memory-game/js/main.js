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

function checkForMatch(){
    if(cardsInPLay.length >= 2){
    if(cardsInPLay[0] === cardsInPLay[1]) console.log("You found a match!");
    else console.log("Sorry, try again.");
    }
}

function flipCard(cardId){
    console.log("User flipped " +cards[cardId]);
    cardsInPLay.push(cards[cardId]);

    checkForMatch();
   // if(cardsInPLay.length === 2){
     //   if(cardsInPLay[0] === cardsInPLay[1]) alert("You found a match!");
       // else alert("Sorry, try again");
    //}
}

flipCard(0);
flipCard(2);