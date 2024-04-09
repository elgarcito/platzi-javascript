//Methods that modify the original array (Mutability)

//push()

const countries=['USA','PARIS','CANADA'];

//give us in return the new lenght of the array
const newCountries=countries.push('germany','australia');
console.log(countries)
console.log(newCountries)

//pop(): give us in return the deleted element of the array
const removedCountry=countries.pop()
console.log(countries)
console.log(removedCountry)