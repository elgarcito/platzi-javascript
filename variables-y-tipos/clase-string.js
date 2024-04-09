//Creacion de string
const firstOption='Comillas simples';
const secondOption="Comillas dobles";
const thirdOption=`asdf`;

//1. Concatenacion opcion +
const adress='Calle falsa 123';
const city='Springfield';
const fullAdress ='Mi direccion completa es '+adress+' '+ city;
console.log(fullAdress)

//2. Concatenacion: Template Literals
const myName='edgar';
const country='🔞'
const presentation= `hi , i'm ${myName} and ${country}`;
console.log(presentation)

//3. Concatenacion: join()
const firstPart='Me encanta';
const secondPart='la gente';
const thirdPart='ᓚᘏᗢ';
const thougt= [firstPart,secondPart,thirdPart]
console.log(thougt.join(' '))

//4. Concatenacion: concat()
const hobbie1='❤';
const hobbie2='💮';
const hobbie3='🎎';
const hobbies='My hobbies are'.concat(hobbie1,' ',hobbie2,' ',hobbie3);
console.log(hobbies)

//Caracteres de escape
//1.Escape alternativo
const alternativeScape= "I'm a Software Engineer";

//2. Barra invertida
const barraInvertida = 'I\'m software engineer';

//3.Template literals
const escapeComillaInvertida = `I'm software engineer`;

//Escritura de string largos

/*
Las rosas son rojas,
las violetas son azules,
caracter inesperado,
en la linea 86.
*/

const poema= 'Las rosas son rojas,\n'+
             'las violetas son azules,\n'+
             'caracter inesperado,\n'+
             'en la linea 86';

console.log(poema)

const poema2= 'Las rosas son rojas, \n\
             las violetas son azules, \n\
             caracter inesperado, \n\
             en la linea 86';

console.log(poema2)

const poema3= `Las rosas son rojas, 
             las violetas son azules,
             caracter inesperado, 
             en la linea 86`;

console.log(poema3)



