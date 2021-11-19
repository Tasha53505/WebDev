//let + const

const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    console.log("inside", wizardLevel);
}

console.log("Outside", wizardLevel);


//decistruction

const obj = {
    player: "bobby",
    experience: 100,
    wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.experience;

const { player, experience } = obj;
let { wizardLevel } = obj;



// object properties
const a = "Simon";
const b = true;
const c = {};

const obj = {
    a,
    b,
    c

}


//Template strings
const names = "Sally";
const age = 24;
const pet = "Cat"

const greeting = `Hello ${names} You have a  ${pet} and you are ${age - 10} years too old!`;

//default arguments 
function greet(name = "", age = 30, pet = "cat") {
    return `Hello ${name} You have a  ${pet} and you are ${age - 10} years too old!`;
}


// Symbols
let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol3("foo");

//arrow functions
function add(a, b) {
    return a + b;
}
// That becomes this instead
const add2 = (a, b) => a + b;