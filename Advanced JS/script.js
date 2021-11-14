//scope - variable access


//Root scope (window)
var fun = 5;

function funestFunction() {
    //child scope
    console.log(3, fun);
}

//tenary operatory 
// condition: ? expr1 : expr2:

function isUserValid(bool) {
    return bool;

}


var answer = isUserValid(true) ? "You may enter" : "access denied";

var automatedAnswer =
    "Your account # is " + (isUserValid(false) ? "1234" : "not available");


function condition() {
    if (isUserValid(true)) {
        return "You may Enter";
    } else {
        return "Access denied";
    }
}

var answer2 = condition()

//Switch Statement
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "There is a MONSTER just ahead of you";
            break;
        case "back":
            whatHappens = "You're home safely!";
            break;
        case "right":
            whatHappens = "You found une riviere! ";
            break;
        case "left":
            whatHappens = "You run into a snake";
            break;
        default:
            whatHappens = "Enter a valid direction";
    }
    return whatHappens;
}
