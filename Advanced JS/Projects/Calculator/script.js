//function for displaying values
function dis(val) {
    document.getElementById("valText").value += val
}
//function for evaluation
function solve() {
    let x = document.getElementById("valText").value
    let y = eval(x)
    document.getElementById("valText").value = y
}
//function for clearing the display
function clr() {
    document.getElementById("valText").value = ""
}