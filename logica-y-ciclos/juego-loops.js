//Guess the word game

//Hidden word
const hiddenWord='duck';
const hint=`It is an animal that fly and swim`;

alert(`Welcome to the word guessing game, you have three possibilities to guess the word,
you have the following hint:
${hint}
`)
let triesCounter=0;
let isFound =false;

while (isFound===false && triesCounter!==3) {
    let userInput=prompt(`Please insert your word without spaces`).toLowerCase();
    if (userInput===hiddenWord){
        isFound=true;
        alert("Congratulation you guess the word, you are a fucking genius")
        break;
    } else{
        triesCounter++;
        console.log(triesCounter)
        alert("That is not the word.Try again, you have "+(3-triesCounter) +" tries left")
    }
    if(triesCounter===3){
        alert(`YOU FUCKING LOOSSEERR the word was: ${hiddenWord}`)
    }
}
if(isFound==true){
    alert(`Game finished beautiful winner`)
} else{
    alert('Game Over LOOOSEER')
}

