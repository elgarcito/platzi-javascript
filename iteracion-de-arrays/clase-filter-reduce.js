//Methods that iterate over an array
//Method that do not modify the original array (immutability)

//filter()

const numbers=[1,2,3,4,5,6,7,8,9,10];

const evenNumbers=numbers.filter(number=>number%2===0);
console.log(numbers);
console.log(evenNumbers);

//reduce() aplica a cada elemento una funcion y devuelve un solo valor
const numberReduce=[1,2,3,4,5];
const sum=numberReduce.reduce((accumulator,currentValue)=>accumulator+=currentValue);
console.log(numberReduce);
console.log(sum);

//reduce case 2
const wordArray=['apple','banana','bye','dog','banana'];
const wordFrecuency=wordArray.reduce((accumulator,currentValue)=>{
    if (accumulator[currentValue]) {
        accumulator[currentValue]++;
    }else{
        accumulator[currentValue]=1;
    }
    return accumulator;
},{});

console.log(wordFrecuency);