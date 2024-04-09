//1. Tipo entero y decimal
const entero=42;
const decimal=3.14
console.log(typeof entero,typeof decimal)

//2. Notacion cientifica 

const cientifico = 5e3;

//3. Intinitos y Nan
const infinito=Infinity;
const noEsUnNumero=NaN;

//Operaciones aritmeticas

//1.Suma resta multiplicacion y division
const suma=3+4
const resta=4-4;
const multiplicacion=4*5
const division =16/2

//2. Modulo y exponenciacion
const modulo =15%8
const exponenciacion=2**3

//Presicion
const resultado =0.1+0.2;
console.log(resultado)
console.log(resultado.toFixed(1))
//Comparacion de tipo y valor
console.log(resultado===0.3)

//Operaciones avanzadas
const raizCuadrada =Math.sqrt(16)
const valorAbsoluto=Math.abs(-7)
const aleatorio=Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)
