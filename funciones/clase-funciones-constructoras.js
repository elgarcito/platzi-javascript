const personalizedMessage=()=>'Good bye bitches'

function Rocket(name,ownMessage){
    this.name=name
    this.launchMessage=()=>ownMessage
}

const falcon9Rocket=new Rocket('Falcon 9',personalizedMessage())
const falconHeavyRocket=new Rocket('Falcon Heavy','Good bye babys')

console.log(falcon9Rocket.name)
console.log(falcon9Rocket.launchMessage())
console.log(falconHeavyRocket.name)
console.log(falconHeavyRocket.launchMessage())

const RocketWithArrowFunction=(name,ownMessage)=>({
    name:name,
    launchMessage:ownMessage
})

const personalizedMessageForArrowFunction=()=>'Good bye bitches successful launch'
const falcon9Rocket1=RocketWithArrowFunction('Falcon 9',personalizedMessageForArrowFunction)

console.log(falcon9Rocket1.launchMessage())