const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "sussy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

const shout = [];
const newArray = array.forEach((e) => {
  shout.push(e.username + " !")
});
console.log(shout);



//Create an array using forEach that has all the usernames with a "!" to each of the usernames 



//Create an array using map that has all the usernames with a "? to each of the usernames

const mapArray = array.map(e => e.username + " ?")
console.log("map", mapArray);


//Filter the array to only include users who are on team: red

const filterArray = array.filter(e => e.team === "red");
console.log("filter", filterArray);


//Find out the total score of all users using reduce

// (1), what is the value of i
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  console.log(num, i);
  alert(num);
  return num * 2;
});

const reduceArray = arrayNum.reduce((accumulator, num) => {
  return accumulator + num
})

console.log("reduce", reduceArray);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
