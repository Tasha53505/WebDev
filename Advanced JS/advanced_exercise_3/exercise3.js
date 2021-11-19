// change everything below to the newer Javascript!

// let + const
const a = 'test';
let b = true;
let c = 789;
a = 'test2';


// Destructuring
const obj = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;
const eyeColor = person.eyeColor;

const { firstName, lastName } = obj;
const { age, eyeColor } = obj;


// Object properties
const a = 'test';
const b = true;
const c = 789;

const okObj = {
    a,
    b,
    c
};


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer, no?`




// default arguments
// default age to 10;
function isValidAge(age = 10) {
    return age;
}


function isValidAge(age) {
    return age
}

// Symbol
// Create a symbol: "This is my first Symbol"
let sym1 = Symbol("This is my first symbol");

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

// const whereAmI = (username, location) =>
() => (username && location) ? 'I am not lost' : "I am totally lost";

