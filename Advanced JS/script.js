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