
var database = [
    {
        username: "tasha",
        password: "secret"
    }
];


var newsFeed = [
    {
        username: "Bob",
        timeline: "So tired"
    },

    {
        username: "Sally",
        timeline: "Javascript is cool"
    }
];

var userNamePrompt = prompt("What's your username?")
var passwordPrompt = prompt("What's your password?")

function signIn(user, pass) {
    if (user === database[0].username &&
        pass === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Please check your username or password again")
    }
}

signIn(userNamePrompt, passwordPrompt);