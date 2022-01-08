el.addEventListener("click", submitForm);


//PYRAMID OF DOOM.
movePlayer(100, 'Left', function() {
    movePlayer(400, 'Left', function() {
        movePlayer(10, 'Right', function() {
            movePlayer(330, 'Left', function() {

            })
        })
    })
})

// Turns to a  promise
movePlayer(100, "Left")
    .then(() => movePlayer(400, "Left"))
    .then(() => movePlayer(10, "Right"))
    .then(() => movePlayer(330, "Left"))

// Creating my first promise.

const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve("stuff worked");
    } else {
        reject("Error, it brokes");

    }
})

// Will run something after x amount of seconds
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HIIII')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'POOOKIE')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HIIII')
})



promise
    .then(result => result + '!') //Returns "Stuff worked"
    .then(result2 => result2 + "?")
    .catch(() => console.log("Error"))
    .then(result3 => {
        console.log(result3 + "!");
    })

// When you don't want JS to block the execution of your code, like making API calls, grabbing data from a fatabase or optiimizing 
// an image - use a rpomise so that the tasks happens in the background, When the promise gets resolved or rejected, you'll get that response
//