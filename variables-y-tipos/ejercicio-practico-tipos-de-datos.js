//Social media profile

// 1. User information
const username='codingAdventurer';
const fullName='Javier A'
const age =25
const isStudent =true

//2. Adress, object creation
const address ={
    street:'123 Main Street',
    city:'Techville',
    state:'CodingLand',
    zipCode:54321
}

//3. Hobbies 
const  hobbies =['Coding', 'Reading', 'Gaming']

//4. Generating personalized bio
const perzonalizedBio= `Hi, mi name is ${fullName},
I'm ${age} old.
I live in ${address.city}
I love ${hobbies.join(', ')}.
Follow me for more coding adventures!`

//5. print user profile

console.log(perzonalizedBio)