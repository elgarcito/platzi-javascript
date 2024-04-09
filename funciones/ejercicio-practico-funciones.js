//create powefullfirl object

function PowerfullGirl(name,color,superpower){
    this.name=name,
    this.color=color,
    this.superpower=superpower,
    this.isLeader=false,
    this.displayInfo=function(){
        console.log(`Powerpuff girl information:
        Name: ${this.name},
        Color: ${this.color},
        Superpower: ${this.superpower},
        ${this.isLeader ? 'Leader:Yes':'Leader: No'}
        `)
    },
    this.becomeLeader=function(){
        this.isLeader=true;
        console.log(`${this.name} has become a leader of powerpuff girls`)
    }
}

const bombom= new PowerfullGirl('bombon','orange','fly')
const burbuja= new PowerfullGirl('burbuja','light blue','cuteness')
const bellota= new PowerfullGirl('green','green','super strong')

bombom.displayInfo()
burbuja.displayInfo()
bellota.displayInfo()

bombom.becomeLeader()

bombom.displayInfo()
burbuja.displayInfo()
bellota.displayInfo()
