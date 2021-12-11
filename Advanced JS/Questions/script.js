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