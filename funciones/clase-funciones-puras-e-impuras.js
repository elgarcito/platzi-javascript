//Funciones puras, dadas la misma entrada tiene la misma salida

//No produce Side effects
//1. Modificar variables globales
//2. Modificar parametros
//3. Solicitudes http
//4. Imprimir mensajes pantalla o consola
//5. Manipulacion del DOM
//6. Obtener la hora actual

//Funcion impura porque produce efectos secundarios
function suma (a,b){
    console.log('A: ',a)
    return a+b;
}

//Modifica variables globales- impura
let total = 0

function sumWithSideEffect(a){
    total +=a;
    return total;
}

//Funcion pura
function square(x){
    return x*x;
}

function addTen(y){
    return y+10
}

const number =5
const finalResult=addTen(square(number))
console.log(finalResult)