//String primitivos

const stringPrimitivo='Soy un string primitivo';
console.log(typeof stringPrimitivo);

const stringPrimitivoAlso=String('Im a primitive string also')
console.log(typeof stringPrimitivoAlso)

//String objeto
const stringObjeto= new String('Im a string object');
console.log(typeof stringObjeto)

//Acceder a caracteres

const saludo='Hola. ¿Como estas?';

console.log(saludo[2])
console.log(saludo.charAt(2))
console.log(saludo.indexOf('o'))
console.log(saludo.indexOf('¿Como'))
console.log(saludo.indexOf('como'))
console.log(saludo.lastIndexOf('o'))
console.log(saludo.slice(3,5))
console.log(saludo.length)
console.log(saludo.toLocaleUpperCase())
console.log(saludo.toLocaleLowerCase())

const saludoDividido= saludo.split(' ');
console.log(saludoDividido)
console.log(saludoDividido[1])

const saludoConEspacios='Hola mundo'
const saludoSinEspacios =saludoConEspacios.trim()
console.log(saludoSinEspacios)

const saludoOriginal='Hola Mundo'
const nuevoSaludo =saludoOriginal.replace('Mundo','🎃')
console.log(nuevoSaludo);

