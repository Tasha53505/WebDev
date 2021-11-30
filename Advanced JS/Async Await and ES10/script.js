
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

// trimStart() incase there are spaces at the end or at the start.
const userEmail = '            me@gmail.com'
const userEmail2 = '_hehe@gmail       '

console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

// frommEntries transforms a list of key value pairs into an object
/*
This returns
commanderTom: 23
name: number
*/
userProfiles = [['commanderTom', 23], ['derekZee', 40], ['hansel', 18]]

const obj = Object.fromEntries(userProfiles);
// Object entries does the opposite thing and returns
/*
this returns\\
['commanderTom', 23]

*/
Object.entries(obj)


// try catch block means to try a piece of code and if there are any errors, catch them - don't need the word (error/any word) in order for it to work, but if you do, it logs what the error is. 

try {
    bob + 'hi'
} catch (error) {
    console.log("You messed up " + error)
}