//Operador ternario

const age =15;

const message= age>=18
 ? "Es mayor de 18 años se le puede entrar"
 :"Es menor hay delito cariño";

console.log(message);

console.log(" ")
//Switch

const coffe ='GREEN COFEE'

switch(coffe){
    case "GREEN COFEE":
        console.log("Very tasty green coffe")
        break;
    case "Blue cofee":
    case "light blue cofee":
        console.log("Very rare coffe")
        break;
    default:
        console.log(`I'm sorry we don't have ${coffe}`)
}

console.log(" ")

//LOOOP FOR
let list=["eat","sleep","code","repeate"]

for (let index = 0; index < list.length; index++) {
    console.log("from regular for "+ list[index]);
}

//LOOP FOR EACH como en java
list.forEach((x)=>console.log("from arrow function "+x))

//Loop enhanced for each como en java

for (const iterator of list) {
    console.log("from enhanced for each "+ iterator)
}


//Loop para iterar dentro de un objeto FOR IN
//Por cada propiedad en este objeto has algo

const listaDeCompra ={
    manzana:5,
    naranja:2,
    pera:1
}

for (const key in listaDeCompra) {
    if (listaDeCompra.hasOwnProperty.call(listaDeCompra, key)) {
        console.log(key+" "+listaDeCompra[key]);
    }
}

console.log(" ")


//Ciclo WHILEEEEEEEEEEEEEEEEEEEEEEEEEEE 

let contador=0;

while (contador<3){
    console.log(contador)
    contador++;
}

console.log(" ")
let contador1=0;
//Ciclo do while
do {
    console.log(contador1)
    contador1++;
} while(contador1<3)