//Ejercicio

const winningParticipant=[
    {id:1,name:'jenifer',ticketNumber:1584},
    {id:2,name:'miguel',ticketNumber:8000},
    {id:3,name:'claudia',ticketNumber:4526}
]

function findWinnerByName(name){
    const winner=winningParticipant.find(participant=>participant.name===name);
    return winner || "no winner find with that name";
}

function findIndexWinnerByTicket(ticketNumber){
   const index=winningParticipant.findIndex(participant=>participant.ticketNumber===ticketNumber);
   return index !==-1 ? index: "no winner find with that ticket";
}

function displayWinnerInformation(winner){
    if (winner !== undefined && winner!=null && winner!=='no winner find with that name'){
        console.log('winner information',winner);
    }else{
        console.log('No winner found');
    }
}

const winnerByName=findWinnerByName('jenifer');
const indexWinnerByTicket=findIndexWinnerByTicket(1584);


displayWinnerInformation(winnerByName);
console.log('index of winner by ticket number: ',indexWinnerByTicket);

const winnerByName1=findWinnerByName('pepe');
const indexWinnerByTicket1=findIndexWinnerByTicket(1544);


displayWinnerInformation(winnerByName1);
console.log('index of winner by ticket number: ',indexWinnerByTicket1);