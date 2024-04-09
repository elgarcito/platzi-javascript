//Explicit type casting
const string='42';
const integer=parseInt(string);
console.log(integer);
console.log(typeof integer);

const stringDecimal ='3.14'
const float =parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

const binary='1010'
const decimal =parseInt(binary,2)
console.log(decimal)
console.log(typeof decimal)

//Implicit type casting
const sum= '5'+3;
console.log(sum)
console.log(typeof sum)

const sumWithBoolean='3'+true;
console.log(sumWithBoolean)
console.log(typeof sumWithBoolean)

const sumWithNumber=2+false;
console.log(sumWithNumber)
console.log(typeof sumWithNumber)

const stringValue='10'
const numberValue=10
const booleanValue=true

console.log()
//Si hay un string javascript concatena
console.log(stringValue+stringValue)//Concatena
console.log(stringValue+numberValue)//Concatena
console.log(stringValue+booleanValue)//Concatena
console.log()
console.log(numberValue+stringValue)//Concatena
console.log(numberValue+numberValue)//suma
console.log(numberValue+booleanValue)//suma
console.log()
console.log(booleanValue+stringValue)//Concatena
console.log(booleanValue+numberValue)//suma
console.log(booleanValue+booleanValue)//suma