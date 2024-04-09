//Methods taht modify the original array (Mutability)

const vegetables=['carrot','brocoli','tomatoes','pizza'];
const removedVegetables=vegetables.splice(0,1,'coconut','potatoes');
console.log(vegetables);
console.log(removedVegetables);

//reverse()

const numbers=[1,2,3,4,5];
console.log(numbers);
const reversedNumbers=numbers.reverse();
console.log(reversedNumbers);
console.log();

//sort() with numbers it convert to string using unicode
const unsortedNumbers1=[4,18,1,62,34];
const unicodeSortedNumbers1=unsortedNumbers1.sort();
console.log(unsortedNumbers1)
console.log(unicodeSortedNumbers1)

//sorting numbers
const unsortedNumbers2=[4,18,1,62,34];
const sortedNumbers2=unsortedNumbers2.sort((a,b)=>a-b);
console.log(unsortedNumbers2)
console.log(sortedNumbers2)

//Sort with strings using utf-16 the first letter alfabetical

const cities=['new york','paris','tokio','london']
const sortedCities=cities.sort();

console.log(cities);
console.log(sortedCities);

//Fill() rellena el array

const ages=[21,35,45,50];
console.log(ages.fill(0,2,4));
console.log(ages.fill(15,1));
console.log(ages.fill(15));

