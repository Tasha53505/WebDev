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

