//Solve these problems:

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
17 YES

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)  //16
// a = 10 then num(10) + 1 == 11 then g runs which is 11 + 1 = 12
// add 5 = a = 10 + 5 = 15 then g runs which is 15 + 5 = 20
// 32 ?
NO - 16

//What are the two elements of a pure function?
// Determinism means that no mattwer what the input is - if it runs inside the function no matter how many times, it wioll always return the same value.
HALF - ++No side effects  It does not depend on any state, or data, change during a program’s execution.It must only depend on its input elements.
