//advanced arrays

const array = [1, 2, 10, 16];

// For, forEach

const double = []
const newArray = array.forEach((num) => {
    double.push(num * 2);
});

console.log("foreach", double);


// map, filter, reduce

const mapArray = array.map(num => num * 2);

console.log("map", mapArray);

// For each will itterate one by one but map expects a return itterates the elements and storing each into another collection (map array) - map transforms the array creates a new aray (mapArray) MAPS AYRE CLEANER // FUNCTION PURITY



// filter

const filterArray = array.filter(num => num === 5);

/* const filterArray = array.filter(num => {
    return num < 5;
}); */

console.log("filter", filterArray);

// reduce 

// accumalator is something that stores the info that happens in the body of the function - accumalator remembers the number before the previous array the second value will be the accumalaator value


const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0);
console.log("reduce", reduceArray); // 29 because 10 + 16 (nums ) + 3 = 29