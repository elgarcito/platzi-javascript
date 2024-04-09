let notas = [];
for(let i = 0; i < 20; i++) {
    notas.push(Math.floor(Math.random() * 101));
}
console.log(notas);

const filteredGrades=notas.filter(note=>note>=70);
console.log(filteredGrades);
const averageGrades=parseFloat(((filteredGrades.reduce((accumulator,currentValue)=>
{
    return accumulator+=currentValue;
},0))/filteredGrades.length).toFixed(2));

console.log(averageGrades);



// const averageGrades=notas.filter(note=>note>=70)
//                         .reduce((accumulator,currentValue)=>{
//                            return accumulator+=currentValue;
//                         },0);
                        
console.log(averageGrades);

