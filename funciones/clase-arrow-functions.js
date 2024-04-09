const greeting= function(name){
    return `Hi, ${name}`
}

//Arrow function -explicit return

const newGreeting= (name)=>{
    return `Hi, ${name}`
}

//Arrow function -implicit return

const newGreetingImplicit= name=>`Hi, ${name}`;
const newGreetingImplicitWithTwoParameter= (name,lastName)=>`Hi, ${name} ${lastName}`;

//Lexical binding

const fictionalCharacter={
    name:'Uncle ben',
    messageWithTraditionalFunction: function(message){
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: (message)=>{
        console.log(`${this.name} says: ${message}`)
    }
}

fictionalCharacter.messageWithTraditionalFunction('With great power came great responsability')
//With arrow functions there is no lexical binding
fictionalCharacter.messageWithArrowFunction('With great power came great responsability bitch')