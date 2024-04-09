const owner= 'Lili'
const address=' Calle falsa 123'

function dogGreeting(owner,address){
    console.log(`hi, i'm ${this.dogName} and i love ${owner} and live in ${address}`)
}

const newHouse={
    dogName: 'Cocun'
}

dogGreeting.call(newHouse,owner,address)


const necessaryValues=[owner,address]
dogGreeting.apply(newHouse,necessaryValues)

const bindingWithBind = dogGreeting.bind(newHouse,owner,address)
console.log(bindingWithBind)
bindingWithBind()