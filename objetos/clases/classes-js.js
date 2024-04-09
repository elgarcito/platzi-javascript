class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sayHi(){
        console.log(`Hi my name is ${this.name}`);
    }
}

const person1=new Person("juan","Perez",22);
person1.sayHi();