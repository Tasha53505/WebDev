// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'


// when you do:
console.log(startLine);
console.log(turtle.padStart(10));
console.log(rabbit.padStart(10));
const answer = "CORRECT"

const answer2 = "Or rewrite it to the words turtle = turtle.padstart(10)"




// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
console.log(turtle.trim().padEnd(9, '='))
const response = "it adds 9 equals signs to the end of the string"

// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
const response = "The second parameter will add that value the amount of times the first parameter says."

const answer = "CORRECT"

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'



Object.keys(obj).forEach(key => {
  console.log(key, obj[key]);
})

// NO IT'S
Object.entries(obj).map(value => value.join(" ")).join(' ')

