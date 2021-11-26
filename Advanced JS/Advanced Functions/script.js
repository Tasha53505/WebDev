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


// COMPOSE - Act of putting 2 functions together to form a 3rd fucntion where the output of 1 fucntion is the input of the other
const compost = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compost(sum, sum)(5); // a = 5 then num==  num(5) + 1 == 6 and then g runs which is sum 6 + 1 = 7.

//Avoiding side effects and functional purity

var a = 1;
function b() {
    a = 2;
}

// Determinism means that no mattwer what the input is - if it runs inside the function no matter how many times, it wioll always return the same value.

