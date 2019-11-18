/* 
console.log("Up and running!");

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log("User flipped " + cardOne);
*/

var cards = [
{
    rank: "queen",
    suit: "hearts",
    images: "images/queen-of-hearts.png"
},
{
    rank: "queen",
    suit: "diamonds",
    images: "images/queen-of-diamonds.png"
},
{
    rank: "king",
    suit: "hearts",
    images: "images/king-of-hearts.png" 
},
{
    rank: "king",
    suit: "diamonds",
    images: "images/king-of-diamonds.png"
}
];

var cardsInPLay = [];

function checkForMatch(){
    if(cardsInPLay.length >= 2){
    if(cardsInPLay[0] === cardsInPLay[1]) console.log("You found a match!");
    else console.log("Sorry, try again.");
    }
}

function flipCard(cardId){
    console.log("User flipped " +cards[cardId].rank);
    cardsInPLay.push(cards[cardId].rank);
    console.log(cards[cardId].images);
    console.log(cards[cardId].suit);

    checkForMatch();
   // if(cardsInPLay.length === 2){
     //   if(cardsInPLay[0] === cardsInPLay[1]) alert("You found a match!");
       // else alert("Sorry, try again");
    //}
}

flipCard(0);
flipCard(2);