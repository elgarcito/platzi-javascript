//Enlace implicito: Implicit biding
const house={
    dogNme:'Fido',
    dogGreeting: function(){
        console.log(`Hi, i'm ${this.dogNme}`)
    }
}
house.dogGreeting();


//Explicit biding
function dogGreeting (){
    console.log(`Hi, i'm ${this.dogNme}`)
}

const newHouse={
    dogNme:'Coco',
    dogAge:3
}
//Call the function and associate it with a new object
dogGreeting.call(newHouse)

function newDogGreeting (owner,adress){
    console.log(`Hi, i'm ${this.dogNme} and i live with ${owner} on ${adress}`)
}

const owner ='Lucy'
const adress= 'riobamba 43'

newDogGreeting.call(newHouse,owner,adress)