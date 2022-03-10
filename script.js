var bill = document.getElementById("bill");
var wynik = document.getElementById("wynik");
var people = document.getElementById("people");
let f;

function calc(n) {
    a = bill.value;
    b = people.value;
    wynik.innerText = n*a/b;
    wynik.style.color = "red";
}

function showNumber() {
    if (f === true) {
        document.getElementById("custom-number").style.display = "none";
        f = false;
    }
    else {
        document.getElementById("custom-number").style.display = "flex";
        f = true;
    }
    console.log(f);
}
