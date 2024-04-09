// let person ={
//     name:"John",
//     surname:'Aguilera',
//     age:30,
//     adress:{
//         street:"AV la cuara 122",
//         city:"CDMX"
//     },
// };

//Constructure function
function Person(name,surname,age){
    this.name=name,
    this.surname=surname,
    this.age=age
}

const person1=new Person('amy','Whinehouse',33);
console.log(person1);
//You can add new properties to the instances of the object
person1.nationality="Argentino";
console.log(person1);

const person2=new Person('carol','Danvers',35);
console.log(person2);

//Add properties to the contructor function(this is not in java)
Person.prototype.sayHi= function (){
    console.log(`Hi my name is ${this.name}`);
}

person1.sayHi();
person2.sayHi();