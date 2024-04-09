const numeroSecreto= Math.floor(Math.random()*10+1);

const playerNumber =parseInt(prompt("Adivina el numero secreto entre 1 y 10"));

console.log(`This is the number with you play ${playerNumber}`);

if(playerNumber=== numeroSecreto){
    console.log('great you win bitch');
} else if(playerNumber<numeroSecreto){
    console.log('El numero es bajo, intenta nuevamente');
} else {
    console.log('El numero es alto, intenta nuevamente');
}
