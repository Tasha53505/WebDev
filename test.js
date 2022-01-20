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
        reject("Error, it brokes")

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
    setTimeout(resolve, 3000, 'IS it me youre looking for?')
})

// Takes an array of all
Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values);
    })

// Returns all promises witht he result of pending.
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


// Real world application of Promises.
// Similar to what you'd do on a website, where you'd want to grab the info from server, database with users, posts 
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

//  url.maps (THIS ) with EACH  url going to fetch the url and then response. if something fails use .catch(() => console.log("Error"))
Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())

})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log("Error"))
















// ES9

// Object spread operator
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 3,
    bird: 90
}

// Call it whatever you want (rest) - calling  rest will go lion and monkey
const { tiger, lion, ...rest } = animals;


function objectSpread(p1, p2, p3) {
    console.log(p1)
    console.log(p2)
    console.log(p3)
}

objectSpread(tiger, lion, rest)

// Same thing for arrays
const array = [1, 2, 3, 4, 5];

function sum(a, b, c, d, e) {
    return a + b + c + d + e;
}

sum(...array) //returns 15 - same as doing sum(1,2,3,4,5)

// finally - able tpo do something after a promise is finished.
// Used when you want to send an email to a user regardless of the request was succuessful or failed. 
// Maybe a notification too
const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url =>
        fetch(url).then(people => people.json())
    ))
    .then(array => {
        console.log('1', array[0])
        console.log('2', array[1])
        console.log('3', array[2])
        console.log('4', array[3])
    })
    .catch(err => console.log('ughhhh fix it!', err))
    .finally(data => console.log('extra'));


// For await of - loops through async await calls

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]


const getData = async function() {
        try {
            const [users, posts, albums] = await Promise.all(
                urls.map(async function(url) {
                    const response = await fetch(url);
                    return response.json();
                }),
            );
            console.log("users", users);
            console.log("posta", posts);
            console.log("albums", albums);
        } catch (err) {
            console.log("ooooooops", err);
        }
    }
    // For of
const loopThroughUrls = url => {
    for (url of urls) {
        console.log(url)
    }
}


// For await of 
const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
    }
}

// es2020

// allSettled - Promise.all would fail this because of a rejection - 
// But Promise.allSettled([]) would run both promises and output  runs all promises regardless of whether they're rejectjed or not.
const promiseOne = new Promise((resolve, reject) =>
    setTimeout(resolve, 300))

const promiseTwo = new Promise((resolve, reject) =>
    setTimeout(reject, 3000))

Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data))
    .catch(e => console.log('Something has failed.', e));

// ES2021 

// any()
// "Promise.any() resolves if any of the supplied promises is resolved Below we have 3 promises, which resolves at random times."
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("A"), Math.floor(Math.random() * 1000));
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("B"), Math.floor(Math.random() * 1000));
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("C"), Math.floor(Math.random() * 1000));
});

(async function() {
    const result = await Promise.any([p1, p2, p3]);
    console.log(result); // Prints "A", "B" or "C"
})();
//   What if none of the promises resolve? In that case Promise.any() throws an err



// Backend server
// CDN Content delivery NEtwork (Minifying scripts)

// PostSQL and mongoDB  | HOSTGATOR (LAMP STACK)
// LoadBalancer - multiple servers in different places(listens to where the person is)