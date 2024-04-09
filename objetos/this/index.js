class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

const person1= new Person('pepe',25);

console.log(person1);

person1.newMethod=function(){
    console.log(`My name is ${this.name}`);
}

let number=3;
console.log(!!number);