//null
const snoopy=null;
console.log(snoopy)
console.log(typeof snoopy)

//Undefined
let name;
console.log(name);

//Symbol para escribir valores unicos que no quiero que cambien
const uniqueId=Symbol(1)
const symbol1=Symbol('id')
const symbol2=Symbol(1)
console.log(symbol1===symbol2)

const ID =Symbol('id')
let user={}
user[ID]='1234'
console.log(user)

//BigInt
const bigNumber=126841656516516516516516516516516516516516n
console.log(bigNumber)
