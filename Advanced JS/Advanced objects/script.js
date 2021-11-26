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

obj.c.deep = "jjajajaj";
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







