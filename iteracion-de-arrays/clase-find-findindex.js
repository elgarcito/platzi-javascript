//Methods that iterate over an array
//Method that do not modify the original array (immutability)

//find()
const multiple05=[5,10,15,20,25,30];

const firstNumberGreaterThan10=multiple05.find(number=>number>10);
console.log(multiple05);
console.log(firstNumberGreaterThan10);
console.log();
console.log();

//findIndex devuelve el indice
const randomNumber=[6,14,27,56,40];
const indexNumber=randomNumber.findIndex(number=>number>20);

console.log(randomNumber);
console.log(indexNumber);
