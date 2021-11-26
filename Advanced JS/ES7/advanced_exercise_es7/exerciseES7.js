// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes("John")
const answer = "CORRECT";


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.

dragons.filter(name => name.includes('John'))

const answer = "CORRECT";

// #3) Create a function that calulates the power of 100 of a number entered as a parameter

const wow = (x) => x ** 100;

const answer = "CORRECT";
// #4) Useing your function from #3, put in the paramter 10000. What is the result?
console.log(wow(10000))


// Research for yourself why you get this result
const research = "You get this answer because the number is too big "

const answer = "CORRECT";