

const person ={
    name:"John",
    age:30,
    adress:{
        street:"AV la cuara 122",
        city:"CDMX"
    },
    //Methods
    sayHi(){
        console.log(`Hi my name is ${this.name}`)
    }
};

console.log(person);
person.sayHi();
person.phone ="555-555-555";
//Agregar una propiedad al objeto
console.log(person.phone);
console.log(person);

//Agregar un metodo al objeto
person.sayGoodBye=()=>{
    console.log("Bye");
}
console.log(person);
person.sayGoodBye();

console.log(person.adress.city);

//delete fields 
delete person.phone;
console.log(person);

//You can not delete methods once created
//you can return undefined
