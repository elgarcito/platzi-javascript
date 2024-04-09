//Methods that iterate over an array
//Method that do not modify the original array (immutability)

//map()

const numbers=[2,3,4,5,6];

const squareNumbers= numbers.map(num=>num*num);

console.log(numbers);
console.log(squareNumbers);

//for each()

const colors=["red","pink","blue"];
const iteratedColors=colors.forEach((color)=>{console.log(color)});
console.log(colors);
console.log(iteratedColors);

//Exercise :Fahrenheit to celcius

const temInFar=[32,55,88,94,12];
const tempInCel=temInFar.map(farh=>parseFloat(((5/9)*(farh-32)).toFixed(2)));

console.log('Temperatures in farh: ',temInFar);
console.log('Temperatures in Cel: ',tempInCel);

//Suma todos los elementos del array
const numbers1=[25,331,4.5,522,6.9666];
let sum =0;

numbers1.forEach((num)=>
{
    sum+=num;
});

console.log(sum);

