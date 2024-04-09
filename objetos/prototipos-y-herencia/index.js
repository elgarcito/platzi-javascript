class Animal {
    constructor(name,type){
        this.name=name;
        this.type=type;
    }

    makeSound(){
        console.log(`The ${this.name} makes a sound`);
    }
}

class Dog extends Animal{
    constructor(name,type,breed){
        super(name,type);
        this.breed=breed;
    }
    makeSound(){
        console.log(`The ${this.name} bark`);
    }
    run(){
        console.log(`The ${this.name} run happily`);
    }
}

const dog1=new Dog("Bobby","Dog","Pug");
console.log(dog1);
dog1.makeSound();
dog1.run();

console.log(Dog.prototype);
console.log(Animal.prototype);

//Create new methods and properties in the classes
//This in the instance
dog1.newMethod=function(){
    console.log("THIS IS A METHOD")
}
console.log(dog1);

//Now in the prototype this doesnt work because1
//Prototypes are asociated with classes or constructor not with
//Instances of clasees

//This doesn't work

// dog1.prototype.secondMethod=function(){
//     console.log("THIS IS ANOTHER METHOD")
// }

// dog1.secondMethod();

//Now this work
Dog.prototype.secondMethod=function(){
    console.log("THIS IS ANOTHER METHOD")
}

dog1.secondMethod();