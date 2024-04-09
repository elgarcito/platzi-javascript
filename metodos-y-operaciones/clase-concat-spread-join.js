//Methods that DO NOT modify the original array(Inmutability)
const morseCode1=['....','---'];//H O
const morseCode2=['.-..','.-'];//L A
//Concat way 1
const morseCodeMessage= morseCode1.concat(morseCode2);

console.log(morseCode1);
console.log(morseCode2);
console.log(morseCodeMessage);
console.log();

//concat way 2

const morseCodeMessage2=[].concat(morseCode1,morseCode2);
console.log(morseCode1);
console.log(morseCode2);
console.log(morseCodeMessage);
console.log();

//Combine with spread operator

function combineMorseMessages(morseCode1,morseCode2){
    console.log([...morseCode1,...morseCode2]);
}

combineMorseMessages(morseCode1,morseCode2);
console.log();

const numbers=[1,2,3];
const string='string';

combineMorseMessages(numbers,string);
console.log();

//Join une cada elemento del array

const morseMessageString=morseCodeMessage.join(' e ');
console.log(morseCode1);
console.log(morseCode2);
console.log(morseMessageString);
console.log();

