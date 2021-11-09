var todos = [
    "clean room",
    "brish teeth",
    "exercise",
    "study",
    "eat healthy"
];

var todosLength = todos.length;


// var counterOne = 10;
// while (counterOne > 10) {
//     console.log("While", counterOne);
//     counterOne--;
// }

// checks before doing it ^^^^^^

// var counterTwo = 10;
// do {
//     console.log("DO While",counterTwo);
//     counterTwo--;
// } while (counterTwo > 10);
// Does it first then checks ^^^^

for (var i = 0; i < todosLength; i++) {
    todos[i] = todos[i] + "!";
    console.log(i);
}

todos.forEach(function(i) {
    console.log(i);
})


// For each takes an array - asks for argument - can change "i" to the name of the var.

