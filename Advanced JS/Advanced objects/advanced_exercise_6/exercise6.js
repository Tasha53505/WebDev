//Evaluate these:
//#1
[2] === [2]
{ } === {}
// false  x2
const ANSWER = "CORRECT"

//#2 what is the value of property a for each object.
const object1 = { a: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { a: 5 };
object1.a = 4;

// 4, 5, 5, 5 
//  5, 4, 4, 5
// 5, 4, 5, 5
const ANSWER = "4 4 4 5"


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
    constructor(name, type, color, sound) {
        this.name = name;
        this.type = type;
        this.color = color;
        this.sound = sound;
    }
    introduction() {
        console.log(`Hi! My name is ${this.name}, and i'm a ${this.type}`)
    }
    full() {
        console.log(`Hi! My name is ${this.name}, and i'm a ${this.type}. Did you know that my favourite colour is ${this.color}. Because I'm a ${this.type}, and I go ${this.sound}`)
    }
}

class Mammel extends Animal {
    constructor(name, type, color, sound) {
        super(name, type, color, sound)
        console.log(this)
    }
    noise() {
        console.log(`I'm a ${this.type}, and I go ${this.sound}`);
    }
    preference() {
        console.log(`My favourite colour is ${this.color}`);
    }
}

const animal1 = new Mammel("Alabaster", "Cow", "Pink", "Buuuuuuuullshit");
const animal2 = new Mammel("Mommy", "Slut", "Black", "I'm coming.");
const ANSWER = "CORRECT"


