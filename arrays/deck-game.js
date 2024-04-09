//Create a card game implementation

//All the cards

let mazo = [];

let palos = ['Corazones', 'Diamantes', 'Tréboles', 'Picas'];
let valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

for (let palo of palos) {
    for (let valor of valores) {
        mazo.push(valor + ' de ' + palo);
    }
}

//console.log(mazo);

console.log("cantidad de cartas "+mazo.length)

function shuffleDeck(cards){
    let random=0;
    let actualCard;
    let randomCard;
    for(let i=0;i<cards.length;i++){
        do{
            random=Math.floor((Math.random()*100));
        }while(random>51 || random===i);
        //console.log(random);
        actualCard=cards[i];
        randomCard=cards[random];
        cards[i]=randomCard;
        cards[random]=actualCard;
    }
}

//Give cards to players
function giveCardsToPlayer(deckOfCards,amountOfCards){
    let playerCards;
    let reducedDeck;
    let response=[];
    return deckOfCards.splice(0,amountOfCards);
   // console.log("despues de splice"+deckOfCards.length)
   // response[0]=playerCards;
   // response[1]=deckOfCards;
   //return response;
}

shuffleDeck(mazo);
//console.log(mazo);

cardsOfPlayer=giveCardsToPlayer(mazo,7);
cardsOfPlayer1=giveCardsToPlayer(mazo,7);
cardsOfPlayer2=giveCardsToPlayer(mazo,7);
cardsOfPlayer3=giveCardsToPlayer(mazo,7);
console.log('The player cards are: '+cardsOfPlayer);
console.log('The restant cards in the deck are: '+mazo.length);

