//Methods that DO NOT modify the original array(Inmutability)

const ages=[21,25,30,19,22];

//every() para validar en cada elemento del array return true or false
const allAreAdults=ages.every((age)=>age>18);
console.log(ages);
console.log(allAreAdults);
console.log();

//some() si alguno cumple con la condicion
const atLeastOneAdult=ages.some((age)=>age>30);
console.log(atLeastOneAdult);
console.log();