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