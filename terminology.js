// function declaration
function newFunction() {

}

// Function expression
var newFunction = function () {

};

// Expression
1 + 3;
var a = 2;
return true;

// calling/invoking
alert();
newFunction(param1, param2);


// assign variable
var a = true;

// function vs methods
function thisIsAFunction() {

}

var obj = {
    thisIsAMethod: function () {

    }
};

thisIsAFunction();
obj.thisIsAMethod();
// calling function or method ^^\



//scope - variable access


//Root scope (window)
var fun = 5;

function funestFunction() {
    //child scope
    console.log(3, fun);
}

//tenary operatory 
// condition: ? expr1 : expr2:

function isUserValid(bool) {
    return bool;

}


var answer = isUserValid(true) ? "You may enter" : "access denied";

var automatedAnswer =
    "Your account # is " + (isUserValid(false) ? "1234" : "not available");


function condition() {
    if (isUserValid(true)) {
        return "You may Enter";
    } else {
        return "Access denied";
    }
}

var answer2 = condition()


//Switch Statement
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "There is a MONSTER just ahead of you";
            break;
        case "back":
            whatHappens = "You're home safely!";
            break;
        case "right":
            whatHappens = "You found une riviere! ";
            break;
        case "left":
            whatHappens = "You run into a snake";
            break;
        default:
            whatHappens = "Enter a valid direction";
    }
    return whatHappens;
}

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

// also a tenary arrow function
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}


// ARROW FUNCTION THIS
function first() {
    var greet = "hi";
    function second() {
        alert(greet);
    }
    return second
}

// Becomes 
const first = () => {
    const greet = "hi";
    const second = () => {
        alert(greet);
    }
    return second;
}


var newFunc = first();
newFunc();




const first = () => {
    const greet = "hi";
    const second = () => {
        alert(greet);
    }
    return second;
}


const newFunc = first();
newFunc();

//Closures - A function ran, a function executed - it's never going to executre again but it will remember the references- Child scope always has access


//Currying - converting a functionthat takes it one at a time
const mult = (a, b) => a
const curriedMult = (a) => (b) => a * b;
const multiplyBy10 = curriedMult(10);

// The long version of currying would be:
const comment = "This doesn't work, but is what you're effectively saying"
"since the multipleB is inaccesible";

const multiple = ((a) => {
    const multipleB = (b) => b * a;
});

multiple(a);

curriedMultiple(a, b);


// COMPOSE - Act of putting 2 functions together to form a 3rd fucntion where the output of 1 fucntion is the input of the other
// f is first function, g is 2nd - a is input
const compost = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compost(sum, sum)(5); // a = 5 then num==  num(5) + 1 == 6 and then g runs which is sum 6 + 1 = 7.


// The long version of composing would be:

const compost = (f, g) => (a) => f(g(a));

const outsideFunction = (insideFuntionOutput) => {
    return insideFuntionOutput + 1;
}

const insideFunction = (startingParameter) => {
    return startingParameter * 2;
}

const longCompost = (startingParameter) => {
    const insideFuntionOutput = insideFunction(startingParameter);
    const outsideFunctionOutput = outsideFunction(insideFuntionOutput);
    return outsideFunctionOutput;
}

const compost = (outsideFunction, insideFunction) => (startingParameter) => outsideFunction(insideFunction(startingParameter));

// Determinism means that no mattwer what the input is - if it runs inside the function no matter how many times, it wioll always return the same value.

// MORE EXAMPLES OF ADVANCED FUNCTIONS 
//#1 Create a one line function that adds adds two parameters
const add2 = (a, b) => a + b; YES


//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)
//13 YES

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
// 31 ?
YES

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
//17  
const answer = 17["yes I got it right"];

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)  //16

//What are the two elements of a pure function?
"1. Deterministic --> always produces the same results given the same inputs"
"2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements."


//advanced arrays

const array = [1, 2, 10, 16];

// For, forEach

const double = []
const newArray = array.forEach((num) => {
    double.push(num * 2);
});

console.log("foreach", double);


// FOREACH AGAIN
const shout = [];
const newArray = array.forEach((e) => {
    shout.push(e.username + " !")
});
console.log(shout);


// map, filter, reduce

const mapArray = array.map(num => num * 2);

console.log("map", mapArray);

// For each will itterate one by one but map expects a return itterates the elements and storing each into another collection (map array) - map transforms the array creates a new aray (mapArray) MAPS AYRE CLEANER // FUNCTION PURITY



// filter

const array = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "sussy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

];

const filterArray = array.filter(num => num === 5);
|| 
const filterArray = array.filter(e => e.team === "red");
console.log("filter", filterArray);


/* const filterArray = array.filter(num => {
    return num < 5;
}); */

console.log("filter", filterArray);


const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.filter(name => name.includes('John')) // ['Johnathan']

// reduce 

// accumalator is something that stores the info that happens in the body of the function - accumalator remembers the number before the previous array the second value will be the accumalaator value


const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0);
console.log("reduce", reduceArray); // 29 because 10 + 16 (nums ) + 3 = 29



// For 
var todos = [
    "clean room",
    "brish teeth",
    "exercise",
    "study",
    "eat healthy"
];
for (var i = 0; i < todosLength; i++) {
    todos[i] = todos[i] + "!";
    console.log(i);
}

todos.forEach(function (i) {
    console.log(i);
})




//reference type

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
//Object 1 creates a new object which said value 10 and then object 2 stored that (refernced it), whereas object 3 got created and was a new object and said value 10.

//  scope vs context
function b() {
    let a = 4;
} // console.log(a) will not work out of scope because it needs to be inside the scope for it to wrokk

// contect tells you where you are within the object
function a() {
    console.log(this);
}
a();
//function a is inside of the window.

const object4 = {
    a: function () {
        console.log(this);
    }
}

// Instantiation THIS is important i.e an online game which has many players, wizards, frogs etc creating an obj for every player is too many - but instead you can do instantation.

// class with a CAPITAL is good for copying an object
// THIS can be used for when you want to access xyz inside function
// When defined the class Player, (when it's in memeory (var) == object)

// OBJECT ORIANTATED PROGRAMMING
// Instance of class, it's an object. for example, the class Wizard may have an instance i.e  When a var holds  it in memory,  it's called  an object - You wouldn't create an instance if player because it's an abstract class.

class Player {
    constructor(name, type) {
        console.log("player", this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hello, my name is ${this.name}, I'm a ${this.type}`)
    }
}

// This means that wizard is going to extend whatever player has. (add on top)
// ABSTRACT class is player and the solid class is Wizard. - ABSTRACT DATA TYPES.
class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log("wizard", this);

    }
    play() {
        console.log(`Woah! I'm a ${this.type}`);
    }
}
// class player and a wizard class that extends the player, and it sees the new keywor which is creating a new wizard that has 2 params and goes to the wiazard class, it then goes to the constructor

// Super takes us up to the constructor of the player and it runs the code of player ansd attaches the wizard and introdued the enw function.  and adds the play function
// This  whole thing now means that we can go wizard1.play() or wizard1.introduce();

//SUPER needs to be before ANY console.log


const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Bobby", "Duelist");


// Pass by value - copy the primitive type (5) as if b=5  so that b now has a refernce to the primitive type.(new memeory space)
// BASICALLY: copy the value and create the value somwwhere else in memory
var a = 5;
var b = a;

b++;

console.log(a);
console.log(b);


// Pass by REFERENCE
// Values aren't copied like in "pass by value" - Whe assigned obj1 to ibj2 this is where obj is in the memory
// this is good because by just having one obj, it saves one space in memeory,but it's bad becaise it might duploicate
// OBJECTS

let obj1 = { name: "Dick", password: "123" };
let obj2 = obj1;

obj2.password = "easy";
console.log(obj1);
console.log(obj2);

// COPYING OBJECTS
let obj = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'try and copy me now (instead of being "c"'
    }
};


// let OBJ2 = obj won't work because it's still going ot pass by REFERENCE\\
// Copying  an object using assign, you need to do the object to copy to {}, then the sorce whihc in this case is obj

// Shallow clone is when is cloned the first memory level (memory adress in obj), within the address, there was another address. 



let clone = Object.assign({}, obj)

// Deep cloning is this: json. tringify turns EVERYTHIGN into a string and then parse it and turn it back into an xyz (obj)
// BE CAREFUL with JSON cause it can have performance impliccations, especially if the obj is deep roosted/nested quite deep.
let superClone = JSON.parse(JSON.stringify(obj))

obj.c.deep = "hahahaah";
console.log(obj);
console.log(clone);
// This one did a DEEP CLONE
console.log(superClone);




// SPREAD 
let clone2 = { ...obj };




// ARRAY we are saving memory by logging c as d so it's not trying to fetch the big long number every time\\
// sometimes there are times when you want to clone so you don't modify it.  you can do [].concat(c)
var c = [1, 2, 3, 4, 5]
var d = [].concat(c);
d.push("728678")
console.log(c);





// Type Coersion

// Double == means that comapre 2 values and if they have ddifferent types, try and coerse one(change it to the correct type) - this equals to true

//  There is never a time where you SHOULD use double == (not predictible code)
1 == '1'

// triple means that it's false becasue 3 equals comapre 2 values but don't coerce it (change it to the correct type);   
1 === '1'


// if this is run it equals true because 1 is always true  and 0 would be false.
if (1) {
    console.log(5);
}

//there is a concept of -0 and +0 - the code below returns true, even though they are different things.
-0 === +0

//  object.is   will return false- it's useful because you can NaN === NaN true
Object.is(-0, +0)

// The includes() method is case sensitive.


//.includes checks to see if for example 'o' is included within the word. Arrays included
"helloooo".includes('o')


// this is going to return true because .pets includes the word "dog";
const pets = ['cat', 'dog', 'giraffe', 'rhino', 'leopard'];
pets.includes('dog');


// expedential operator
const square = (x) => x ** 2;

const square2 = (num) => num ** 2;


const cube = (y) => y ** 3;




//ES8
const oh_No = "I haven't written anything for the past 2 hours. ;-;   27.11.21";

// .padStart() - this is basically padding // 10 spaces - useful for lining characters of strings
"turtle".padStart(10)

// .padEnd()  -   this is basically padding // 10 spaces at tht end including the string 
padEnd(10)


// trailling commas in fucntions, parametrere lists and calls.
// this is useful because when you start getting bigger parameter lists, it looks cleaner and the ending comma won't give am error because it's valid
const fun = (
    a,
    b,
    c,
    d,
) => {
}
fun(1, 2, 3, 4);

let obj = {
    username0: 'Patrick',
    username1: 'Norman',
    username2: 'Chocolate Milk'
}

// Object.keys - this will use it like an array and go one by one. we are creating a forEach loop that grabs the object with the "key" username

/*
keys will log:
username0: xyz;
username1: xyz;
username2: xyz;


*/

Object.keys(obj).forEach(key => {
    console.log(key, obj[key]);
})


/*
.values is going to log JUST the username:
xyz
xyz
xyz
*/

// Object.values ^^ this is easier to log
Object.values(obj).forEach(value => {
    console.log(value)
})


// Object.entries - more CONTROL (You get array, property, value and can use all the map, filter, reduce functions)
Object.entries(obj).forEach(value => {
    console.log(value)
})

// Real life example, received usernames from backend, we want to generate usernames for them isntead of username 1, 2 etc

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})

//returns "My name is Rudolg the Raindeer"
Object.entries(obj).map(value => value.join(" ")).join(' ')



// ES10 / FLAT() - DOES NOTHING if there are no nested arrays, but it means that it will do flatten the arrays and make sure that there are no more nested arrays 

// Array 1 does absolutely nothign
// Array 2 flattens it so that there are no more nested arrays
// Array 3 that the array is 100% flattened - it returns [1, 2, 3, 4, Array(1)] - Default flatten is 1, which is why it didn't quite flatten the array  


const array1 = [1, 2, 3, 4, 5];

const array2 = [1, [2, 3], [4, 5]];

const array3 = [1, 2, [3, 4, [5]]];

array3.flat(2)
//  Real world example kind of
const park = [['🐺', '🐱'], '🐎', '🦌', ['🦓', '🐴'], [[['🥶']]],]
park.flat(50);

// Backend users for example have a bunch of empty names, this will clean it up
const entries = ['bob', 'sally', , , , , , 'cindy']
entries.flat(20)

// flatMap is able to flatten and also map - creature could be any name, but it is adding x to EVERY array but it has also flattened the whole thing
const parkChaos = park.flatMap(creature => creature + '🐴')

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

console.log(greeting.flatMap(x => x.join(" ")));

// trimStart() incase there are spaces at the end or at the start.
const userEmail = '            me@gmail.com'
const userEmail2 = '_hehe@gmail       '

console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

// frommEntries transforms a list of key value pairs into an object PINEAPPLE
/*
This returns
commanderTom: 23
name: number
*/
userProfiles = [['commanderTom', 23], ['derekZee', 40], ['hansel', 18]]

// PINEAPPLE
const obj = Object.fromEntries(userProfiles);
// Object entries does the opposite thing and returns ORANGE
/*
this returns\\
['commanderTom', 23]

*/
// ORANGE
Object.entries(obj)

// Object to Array
const users = { user1: 18273, user2: 92833, user3: 90315 }
const usersArray = Object.entries(users);

// Array to object:
const users = { user1: 18273, user2: 92833, user3: 90315 }
// This makes it an array
const usersArray = Object.entries(users);
const fixedArray = userArraysTimes2;
// This turns it back to an object
const obj = Object.fromEntries(fixedArray);
console.log(obj);


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

console.log(greeting.flatMap(x => x.join(" ")));


// try catch block means to try a piece of code and if there are any errors, catch them - don't need the word (error/any word) in order for it to work, but if you do, it logs what the error is. 

try {
    bob + 'hi'
} catch (error) {
    console.log("You messed up " + error)
}
// FOR EACH LOOPS = CLEANER - "item" can be any word
const basket = ['apples', 'oranges', 'grapes']

for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

// forEach
basket.forEach(item => {
    console.log(item)
})



// Advanced loops
const basket = ['apples', 'oranges', 'grapes']
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 300
}

for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

// forEach
basket.forEach(item => {
    console.log(item)
})


// For of  - similar to the 2 above
// We are ITTERATING     over the array. It means that we are able to go one by one, i.e basket (array) and look at these items. You can itterate over ARRAYS and STRINGS - i.e

/*
RETURNS the word basket's each letter on a new line
*/
for (item of 'basket') {
    console.log(item);
}

// RETURNS  the array of basket
for (item of basket) {
    console.log(item);
}

// For in - works with objects (loop over and see the object properties)

// With objects, we're not itterating, we're ENUMERATING (properties of an object are enumerable) which means an object in JS is enumerables if we're able to see the prpoerty
for (item in detailedBasket) {
    console.log(item)
}






// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1, 0, 3, 100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
    let biggestNum = 0;
    arr.forEach((num) => {
        if (num > biggestNum) {
            biggestNum = num;
        }
    })
    return biggestNum;
}
console.log(biggestNumberInArray(array));


// create loops, itterates ovear each item in array, and it checks to see if current num is bigger than the number found

function biggestNumberInArray2(arr) {
    let biggestNum = 0;
    for (num of arr) {
        if (num > biggestNum) {
            biggestNum = num;

        }

    }
    return biggestNum;
}
console.log(biggestNumberInArray2(array2));


// This is so I understand.
function biggestNumberInArray3(arr) {
    let biggestNum = 0;
    for (let i = 0; i < arr.length; i++) {
        const currentNum = arr[i];
        if (currentNum > biggestNum) {
            biggestNum = currentNum;
        }
    }
    return biggestNum;
}
console.log(biggestNumberInArray3(array3))

// this tidies it up

function biggestNumberInArray3(arr) {
    let biggestNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggestNum) {
            biggestNum = arr[i]
        }
    }
    return biggestNum;
}
console.log(biggestNumberInArray3(array3))


// Es2020

// BigInt is a type of safe number. essentially there is a limit to how much info one can store in memory

// Returns bigInt
typeof 1n

// returns 9007199254740991
Number.MAX_SAFE_INTEGER

// As soon as number is bigger than 9... it breaks unless you add n to BOTH  numbers
9007199254740991n + 20n


// Optional chaining operator  it avoids all the chekcing of if statements. ?.

let will_pokemon = {
    pikachu: {

    }
}

let delilah_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: 0
    }
}

// This Optional chaining operator checks if delil has an object, is there an object of del poke or pikachu - works on objects and checking their properties - 
let power = delilah_pokemon?.pikachu?.power || 'No Power'

console.log(power)


const answer = "ANSWER"

if (andrei_pokemon && andrei_pokemon.raichu && will_pokemon
    && will_pokemon.pikachu && will_pokemon.pikachu.friend
    && will_pokemon.pikachu.friend.charizard) {
    console.log('fight!')
} else {
    console.log('walk away...')
}


// Exercise 3: Clean up this code using optional chaining
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: {
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

if (andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard) {
    console.log('fight!')
} else {
    console.log('walk away...')
}



// Nullish coalescing operator ?? - often used instead of the or || For example, the pikachu might not NOT ever not have power, but we don't wanna say "no power" if it may have power later. (0 = a value and we will have a power, but if we were using || it would return no power.)

let power = delilah_pokemon?.pikachu?.power ?? 'No Power'
console.log(power)


// ES2021
// replaceAll
const str = "i am cool of the coolest"

str.replaceAll("cool", "worst")
// If I wanted it to stay, I would assign it to a const.
const change = str.replaceAll("cool", "worst");


// Debgugging
// complex structure. 

/*
Step 1: Read the code and understand what's happening.: Assigning a var that has a nested array, the code wants to be flattened, but reduce is being used so we know that a is the accumalotor and b is the array. We want the accumaltor to start off with an empty array. it will attach the contents of array into the (empty array) - we need to return it because we removed it from a single line, which already implicity means return - Arrow function NEEDS  a return

*/
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(a, b) => a.concat(b), [];

// changes to this: 
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
        debugger;
        console.log('accumlator', accumulator)
        return [].concat(array)
    }, []);

// DEBUGGER tells the file to freeze

// Questions (interviews/ in general)
let question1 = "What is a Program"
let answer1 = "It has to allocate memeory otherwise we wouldn't be able to have variables or files. It also needs to pasrse and execute scripts (Read and run commands.)  "

let question2 = "What's an example of memory heap?"
let answer2 = "const a = '1' -"

let question3 = "What's a memory leak?"
let answer3 = "By increasing the number or vars we have (i.e a bunch of arrays) - memeory leaks happen when you have unused memory which it fills up this memory- cause if you forgot to clean up, the  browser will not be able to work "

let question4 = "What is call stack"
let answer4 = "It reads the first line, puts it into call stack pops it, when it reads the second line, it will then pop it and so on. "
let answerComplex = "If we were to run one(), it would return 4 - "

const one = () => {
    const two = () => {
        console.log('4')
    }
    two();
}

const Callstack2 = " it deletes one after one, once it has ran. it is then empty"
console.log('4')
two()
one()
// Callstack


const question5 = "Javascript is a single threaded language that can be non-blocking"
const answer5 = ` Single threaded means that it only has one call stacka and one call stack only (first in, first out) Other languages can have multiple call stacks which are called "multithread"  JS is single threaded because it can be easy because you don't have to deal with complicated scenarios that arise in a  multithreaded enviroment, for example deadlocks. Sychronous programming means that each line gets executed one by one`

const answerSimple5 = "Single threaded means only one statment is executed at a time. It has one callstack and it does one thing at a time. it can be asynchronous which would run in the background."

// Recursion - looping and over and over.
// Creating a stack overflow
function foo() {
    foo()
}

foo()

// Asyncchronus 
// setTimeOut comes within all browsers and allows us to create a timeout

console.log('1');
setTimeout(() => {
    console.log('2');

}, 2000)
console.log('3');
// Javascript Run-Time Enviroment
// Call Stack
// Web API
// Calback QUeue

// SYNCHRONOUS is like calling a teacher and waiting for the teacher to pick up and not doing anything in the mean time

// ASYNCHRONOUS is like sending a text to a teacher, while waiting, you do other things in between .

element.addEventListener('click', () => {
    console.log("CLICK")
})

// Modules Mountain
const inlineScripts = "Inline scripts with a script type tag - the problem is the lack of code reusuibilty and the pollution of the global name space. For example, a wouldn't be able to be used again"

const scriptTags = "Next was script tags- script text/js src = '' - the problem with script tags, you'd still have to copy and paste the script tags. Also the dependency resolution - You're respinsible to make sure the scripts are added in the right order. Global name space is also still a problem  "


const IIFE = "Immediately invoked function expression, Wraps a function in brackets - meaning it wouldn't pollute the global name space. The order of the files were still lack of dependecy reoslution. "


const browserify = "It used CommonsJS - for the eirst js file, you wanted function add, module.exports  but on the second js2 file, you would use add and require tag. It used a module bundler which means it would run  the files before you loaded the website and complied the scripts into one script. Usually something like mondal.js"

const ES6 = "export and import. i.e for 1 file you can just export default. to sue the add function, you'd say import { add } from './add"

const Webpack = "module bundler (bundles js files)- meaning you can use ES6 in all browsers."


// Terminal
/*
ls - Everything 
pwd (present working directory)- current directory
cd  x - to go into x
Do pwd then cd Desktop 
cd .. -  brings you back to one directory up
clear - clears terminal
cd / **—> root director** - Takes you to the root director
cd ~ - Takes you to the user directory
cd <folder/folder/folder> ** <> means to add your own folder names that exist on your computer.
mkdir <folderName> - makes a folder on PC
open <folder> **for windows use: start <folder>
touch index.html  **for windows use: echo "" > index.html - creates file
open index.html **for windows use: start index.html
open -a “Sublime Text”  **for windows see the note about this at the bottom of this lecture!!
open . **for windows use: start .
mv index.html about.html - mv stands for move Windows  
rm <file> - Removes a file
rm -r <folder> - This removes a folder or diretory
say hello **(only on Mac)**
Echo - repeats what u say back to the teminal
*/

const qouka = ">Quoka" /* SHOWS YOU WHAT THE MISSTAKES ARE

To open a new Quokka file use Cmd/Ctrl + K, J for JavaScript, or Cmd/Ctrl + K, T for TypeScript. To start/restart Quokka on an existing file, use Cmd/Ctrl + K, Q.

*/


// GitHub
/*
Start project + read me ( name is whatever) PUBLIC
click clone or download (use ssh) and copy the link
cd into the folder you want it in
git clone ssh
cd into directory 
git status 
git add filename OR . for everything
git status again
git commit -m" description of what u changed "
git push
git pull

PART 2
git branch - will show all your branches
git branch name - will create new branch
git checkout name - will switch to branch 
Commit, push
It will then go to github.com and ask to see if you want to create the pull request.
git merge  main - will merge branchh to main
<<< HEAD - your branch

CONFILCTS = 
-- Say one was to create a Branch called bigfeature - if one was to change it back to the old title that was merged alrdy( If people were complaining)- One would change it, git add and commit -m"xyz"

--another branch created called comflict: 
    git checkout conflict
    in that branch,, decide to completely remove the title.
    decides to pull rquest it, add ., go back to main and pull everything so it's up to date-
    go back to conflict branch and  merge it. BUT it won't you'll get an error <<<< XYZ, if you wanna keep it remove the ALL the weird signs 
     git add, commit, push it.

     OPEN SOURCE CONTRIBUTIONS:
    FORK the porject - essentially means to copy over the porject and put it on ur own GH profile 
    clone it then open it up in vscode 
    Go into:
    git checkout -b Tasha
git diff shows what changes are madee
git push origin test - pushes to ours
(From here, it will be approved)

git push origin main -  Pushes it to the original  DON'T PUSH TO MASTER


Go to project repository and fork, 
clone ssh, 
cd project name.
 create git checkout -b branchName
 status
 add .
 push origin branchName (from before)
 go to project website again and pull.


Once you are in your forked project directory in your command prompt....


Type git remote -v and press Enter. You'll see the current configured remote repository for your fork.

git remote -v
origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
Type git remote add upstream, and then paste the URL you would copy from the original repository if you were to do a git clone. Press Enter. It will look like this:

git remote add upstream https://github.com/zero-to-mastery/PROJECT_NAME.git
To verify the new upstream repository you've specified for your fork, type git remote -v again. You should see the URL for your fork as origin, and the URL for the original repository as upstream.

git remote -v
origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
Now, you can keep your fork synced with the upstream repository with a few Git commands.

One simple way is to do the below command from the master of your forked repository: 

git pull upstream master
Or you can follow along another method here: "Syncing a fork."


--git help  - ALL COMMANDS
*/


/*
NPM (node packacge manager): bunch of js files that others have written
npm -v || node -v    - checks version
permission errors = sudo npm install react || etc
anytime you START  a project: npm init (creates a package json file)
 - g - globally || -l = locally (New abilities in the file)

Lodash - 
npm install -g browserify - this will alow the import of lo-dash
var _ = require('lodash')
browserify script.js > bundle.js

var _ = require('lodash')
var array = [1, 2, 3, 4, 5, 6, 7, 8]
console.log('answer', _.without(array, 3));
browserify script.js > bundle.js - will update
now array is without 3

The BIGGEST benefit of NPM would be that it's much easier to share projects with other developers, there is no neeed to download script tags - In order for the developer to download all the packages or dependencies that the project requires, Node modules will never be put into the github repo because all is needed is the package.json file. EVEN if we deleted the node modules, - as long as the we did npm install, it would all come back.

There is another type of Dependency called "Dev dependency": It's packages that are only needed for development and testing, it will never be shipped to a website where people will see it. It's taken out automatically.

Go to package.json:
in git: 
npm run script name (test)
Change the script name to any name and change the command:
 "scripts": {
    "build": "browserify scipt.js > bundle.js && live-server"
  },

  then save and go: npm run build (will update my bundle)

live server -  creates a pretend live server


PORTFOLIO:
Finished project that I wanna showcase:
go to project section and change things
src code == github respo link
See live: 
an SS of your project

CTA = Email me:













REACT: - Makes websites really well, Apps, desktop apps, 
-Thinking and componenents (each indidividual item then slowly added together)

One-way Data flow = Data flows from rop to bottom - dirty components would be where the parents didn't really care
Re-rendered components would be where evryone would understandcd 

Virtual DOm- React js will remove the amount of DOM and it will create it in the most efficient way possible

react has  a great ecosystem - any problem I have, someone would have had already - Create React App

installs react app for begiinners with your app name
npx create-react-app robofriends
npm test - runs tests

if u spell something wrong, go npm start and it will tell you what is wrong and where.

Most important part is div = root


class App extends React.Component - this extends the power that comes inside the react package. The react component will automatically detect the render method 


Hooks vs classes -

Hooks are new, but they're very specific.

A lot of code bases still use classes. - shying away from hooks because of the added complexity

React is a view library
ReactDOM (websites)
React Native would be for phones
Importing index.css so you can use it on multiple files but you need to use the import at the TOP of the file.

if there is no .css.html etc, it will


ReactDOM.render(
  <React.StrictMode>
    <h1>Hello World</h1>

  </React.StrictMode>,
  document.getElementById('root')
);

ReacDom package to use the function render and render function is going to render Hello World.


import React, { Component } from 'react';


class Hello extends Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <p>Welcome to React</p>
            </div>
        );
    }
}

export default Hello;
This will make the page render xyz

$ npm install tachyons 
This will give us predefined things like bootstrap does
import 'tachyons'; on index.js
https://tachyons.io
Look at console for errors

Seperation of concerns: React has the idea of components, it's better to have functionality and styles per component so that each component is it's own seperate universe. because each component is concerned with itself, it changes the paradigm

    HELLO.js
    <p>{this.props.greeting}</p> -- this(hello) has properties of greeting (index.js)\



*/

