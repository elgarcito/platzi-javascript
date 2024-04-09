//includes() si un elemento forma parte de un array devuelve true or false

const numbers=[1,2,3,4,5];
const result1=numbers.includes(3);
console.log(result1);
console.log();
const result2=numbers.includes(8);
console.log(result2);
console.log();
//Encontrar el primer indice del array que satisface la condicion
//si no lo encuentra arroja -1
const fruits=['apple','cherry','salad'];
const result3=fruits.indexOf('salad');
console.log(result3);
console.log();
//Encontrar el ultimo indice del array que satisface la condicion
//si no lo encuentra arroja -1
const numberAgain=[2,4,6,8,10,6,2];
const lastIndex=numberAgain.lastIndexOf(2);
console.log(lastIndex);
console.log();
console.log();