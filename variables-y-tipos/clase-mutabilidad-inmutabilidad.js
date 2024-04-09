//Tipo de dato primitivo-inmutable
let numero =23;
numero=numero+10;
console.log(numero);

let isTrue =true;
isTrue=false;
console.log(isTrue);

//Tipo de dato complejo-Mutable
let user={name:'pepito',age:15};
user.age=20;
console.log(user);

let fruits=['apples','pears']
fruits[0]='watermelon';
console.log(fruits)

function changeName(object){
    object.name='new Name'
}

let human={name:'antonio'}
changeName(human)

console.log(human.name)