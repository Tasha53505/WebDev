// Async Await - is built on top of promises. (makes code easier to read)

movePlayer(100, "Left")
    .then(() => movePlayer(400, "Left"))
    .then(() => movePlayer(10, "Right"))
    .then(() => movePlayer(330, "Left"))

// Async version
async function playerStart() {
    const first = await movePlayer(100, 'Left') // pause
    const second = await movePlayer(400, 'Left'); // pause
    await movePlayer(10, 'Right'); // pause
    await movePlayer(330, 'Left'); // pause
}

// THey both do the same thing, but with the player start function
// The function is declared as Async -
//  Await means to pause the function until I have something for you (awaiting )
// Instead of chaining it, you can assign a  var to it instead if typing it out all the time

const realisticExample = "Down Below";

// Promise from this 
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)

// To aysnc function:

async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log(data)
}

const EvenMoreRealisticExample = "Down Below";

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]


// From this: 
Promise.all(urls.map(url =>
        fetch(url).then(people => people.json())
    ))
    .then(array => {
        console.log('users', array[0])
        console.log('posts', array[1])
        console.log('albums', array[2])
    })
    .catch(err => console.log('ughhhh fix it!', err));

//   To this: - Waits for the 
const getData = async function() {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        ))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)
    } catch (err) {
        console.log('Oh no', err)
    }
}