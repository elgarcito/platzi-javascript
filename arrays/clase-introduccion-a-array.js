//How to create an array

//1. new Array() or Array()

const fruits =Array('apple','banana','orange');
console.log(fruits);

//2. Array literal syntax
const numbers =Array(1,2,3);
console.log(numbers);

//Empty array with 5 positions
const emptyArray=Array(5);
console.log(emptyArray);

//2. Array Literal
const oneNumber=[0];
console.log(oneNumber);

const emptyArray2=[];
console.log(emptyArray2);

//3. array mixto
const recipeIngredients=[
    'Flour',
    true,
    2,
    {
        ingredient:'milk',quantity:'1 cup'
    },
    false
];
console.log(recipeIngredients);

//Accessing arrays
const firstFruit =fruits[0];
console.log(firstFruit);

//Mutability
fruits.push('watermelon');
console.log(fruits);

//inmutability

const newFruits=fruits.concat(['grape','kiwi']);
console.log(fruits);
console.log(newFruits);

//checking arrays 
const isArray=Array.isArray(fruits);
console.log(isArray);

//Practical exercise:sum all element of an array
const numberArray=[0,1,2,3,4]
let sum=0 ;
for (let index = 0; index < numberArray.length; index++) { 
    sum += numberArray[index];
}

console.log(sum)



