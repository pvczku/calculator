var bill = document.getElementById("bill");
var wynik = document.getElementById("wynik");
var people = document.getElementById("people");
let f;
let percentValue;
let tip;


function percent(e) {
    percentValue = e;
    
    calcTip();
    calcTotal();
    infNaN();
}

function tipNTotal() {
    
    a = document.getElementById("bill").value;
    b = document.getElementById("people").value;
    
    calcTip();
    calcTotal();
    infNaN();
}


// POPRACOWAC NAD TYM ABY NIE POJAWIALO SIE INFINITY ANI NaN


// function infNaN() {    
//     if ((document.getElementById("tipamount").innerText = Infinity + "$") || (document.getElementById("total").innerText = Infinity + "$")) {
//         document.getElementById("tipamount") = "0.00$";
//         document.getElementById("total") = "0.00$";
//     }
//     else if ((document.getElementById("tipamount").innerText = "Infinity$") || (document.getElementById("total").innerText = "NaN$")) {
//         document.getElementById("tipamount") = "0.00$";
//         document.getElementById("total") = "0.00$";
//     }
// }

function calcTip() {
    a = document.getElementById("bill").value;
    b = document.getElementById("people").value;
    console.log((a*percentValue/b));
    tip = (a*percentValue/b);
    document.getElementById("tipamount").innerText = (Math.round(tip * 100)/100 + "$");
    console.log(Math.round(tip * 100)/100);
}

function calcTotal() {
    document.getElementById("total").innerText = ((Math.round(tip * 100)/100) + a/b + "$");
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

function reset() {
    document.getElementById("bill").value = 0;
    document.getElementById("people").value = 0;
    document.getElementById("tipamount").innerText = "0.00$";
    document.getElementById("total").innerText = "0.00$";
}