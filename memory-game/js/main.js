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

function flipCard(){
    var cardId = this.getAttribute("data-id");
    console.log(cardId);
    console.log("User flipped " +cards[cardId].rank);
    cardsInPLay.push(cards[cardId].rank);
    console.log(cards[cardId].images);
    console.log(cards[cardId].suit);

    this.setAttribute("src",cards[cardId].images);
    checkForMatch();
   // if(cardsInPLay.length === 2){
     //   if(cardsInPLay[0] === cardsInPLay[1]) alert("You found a match!");
       // else alert("Sorry, try again");
    //}
}

function createBoard(){
    for(let i = 0;i < cards.length;i++){
       var cardElement = document.createElement("img");
       cardElement.setAttribute("src","images/back.png");
       cardElement.setAttribute("data-id", i);
       cardElement.addEventListener("click",flipCard);
       document.getElementById("game-board").appendChild(cardElement);
    }
}

// flipCard(0);
// flipCard(2);
createBoard();