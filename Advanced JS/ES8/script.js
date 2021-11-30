//ES8
const oh_No = "I haven't written anything for the past 2 hours. ;-;";

// .padStart() - this is basically padding // 10 spaces - useful for lining characters of strings
"turtle".padStart(10)

// .padEnd()  -   this is basically padding // 10 spaces at tht end including the string 
padEnd(10)


// trailling commas in fucntions, parametrere lists and calls.
// this is useful because when you start getting bigger parameter lists, it looks cleaner and the ending comma won't give am error because it's valid
const fun = (
    a,
    b,
    c,
    d,
) => {
}
fun(1, 2, 3, 4);

let obj = {
    username0: 'Patrick',
    username1: 'Norman',
    username2: 'Chocolate Milk'
}

// Object.keys - this will use it like an array and go one by one. we are creating a forEach loop that grabs the object with the "key" username

/*
keys will log:
username0: xyz;
username1: xyz;
username2: xyz;


*/

Object.keys(obj).forEach(key => {
    console.log(key, obj[key]);
})


/*
.values is going to log JUST the username:
xyz
xyz
xyz
*/

// Object.values ^^ this is easier to log
Object.values(obj).forEach(value => {
    console.log(value)
})


// Object.entries - more CONTROL (You get array, property, value and can use all the map, filter, reduce functions)
Object.entries(obj).forEach(value => {
    console.log(value)
})

// Real life example, received usernames from backend, we want to generate usernames for them isntead of username 1, 2 etc

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})












