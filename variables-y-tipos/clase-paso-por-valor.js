//Paso por valor
let x= 1;
let y= 'hola';
let z = null;

let a=x;
let b=y;
let c=z;

console.log(x,y,z,a,b,c);
a=12;
b='platzi';
c=undefined;

console.log(x,y,z,a,b,c);

//Paso por referencia
let fruits = ['apple'];
fruits.push('pears')
console.log(fruits)

let breads =['🥐'];
let copyOfBreads=breads;
breads.push('🍞');
console.log(breads ,copyOfBreads)