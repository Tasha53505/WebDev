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

const Callstack2 = " it deletes one after one, once it has ran."
console.log('4')
two()
one()
// Callstack




