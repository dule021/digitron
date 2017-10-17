var ce, c, del, divide, seven, eight, nine, multi, four, five, six, minus, one, two, three, plus, negate, zero, point, equals;

var operator = 0;
var numberInt = [];
var $number = [];
var $ign = [];
var rez = "";
var expression = "";
var onButton = document.getElementById("on");
var offButton = document.getElementById("off");
var defButton = window.localStorage.getItem("button");
// Operatori -----------------------------------------------

document.getElementById("plus").onclick = function () {
    if ($number[0]===undefined) {
        ;
    }
    else if ($number.length <= $ign.length) {
        ;
    }
    else {  
        $ign.push("plus");
        operator+=1;
        expression+=String($number.slice($number.length-1, $number.length))+"+";
        document.getElementById("express").innerHTML = expression;
    }
};
document.getElementById("minus").onclick = function () {
    if ($number[0]===undefined) {
        ;
    }
    else if ($number.length <= $ign.length) {
        ;
    }
    else {
        $ign.push("minus");
        operator+=1;
        expression+=String($number.slice($number.length-1, $number.length))+"-";
        document.getElementById("express").innerHTML = expression;
    }
};
document.getElementById("multi").onclick = function () {
    if ($number[0]===undefined) {
        ;
    }
    else if ($number.length <= $ign.length) {
        ;
    }
    else {
        $ign.push("multi");
        operator+=1;
        expression+=String($number.slice($number.length-1, $number.length))+"*";
        document.getElementById("express").innerHTML = expression;
    }
};
document.getElementById("divide").onclick = function () {
    if ($number[0]===undefined) {
        ;
    }
    else if ($number.length <= $ign.length) {
        ;
    }
    else {
        $ign.push("divide");
        operator+=1;
        expression+=String($number.slice($number.length-1, $number.length))+"/";
        document.getElementById("express").innerHTML = expression;
    }
};
document.getElementById("c").onclick = function () {
    rez = "0";
    document.getElementById("rez").innerHTML = rez;
    operator = 0;
    for (var i = $number.length; i > 0; i--) {
            numberInt.pop();
            $number.pop();
            $ign.pop();
    } 
    expression = "";
    document.getElementById("express").innerHTML = expression;
};
document.getElementById("ce").onclick = function () {
    document.getElementById("rez").innerHTML = 0;
    $number.pop();
};
document.getElementById("del").onclick = function () {
    var d = $number.pop();
    var e = d.slice(0, d.length-1);
    $number.push(e);
    document.getElementById("rez").innerHTML = e;
}
document.getElementById("negate").onclick = function () {
    var b = $number.pop();
    var s = b.slice(0,1);
    if (s!="-"){
        var neg = "-" + b;
        $number.push(neg);
        document.getElementById("rez").innerHTML = neg;
    }
    else {
        var pos = b.slice(1, b.length);
        $number.push(pos);
        document.getElementById("rez").innerHTML = pos;
    }
}

//Brojevi -------------------------------------------------
    
function tipka(i, j) {
    
    if (operator===j){
        if ($number[j]===undefined){
            $number[j] = String(i);
            document.getElementById("rez").innerHTML = $number[j];
        } 
        else if (typeof $number[0] == "number" && j===0) {
            $number[0] = String(i);
            document.getElementById("rez").innerHTML = $number[0];
        }
        else {
            $number[j] += String(i);
            document.getElementById("rez").innerHTML = $number[j];
        }
    }
}


document.getElementById("zero").onclick = function() {
    tipka(0,operator);
}
document.getElementById("one").onclick = function() {
    tipka(1,operator);
}
document.getElementById("two").onclick = function() {
    tipka(2,operator);
}
document.getElementById("three").onclick = function() {
    tipka(3,operator);
}
document.getElementById("four").onclick = function() {
    tipka(4,operator);
}
document.getElementById("five").onclick = function() {
    tipka(5,operator);
}
document.getElementById("six").onclick = function() {
    tipka(6,operator);
}
document.getElementById("seven").onclick = function() {
    tipka(7,operator);
}
document.getElementById("eight").onclick = function() {
    tipka(8,operator);
}
document.getElementById("nine").onclick = function() {
    tipka(9,operator);
}
document.getElementById("point").onclick = function() {
    tipka(".",operator);
}

// Rezultat ----------------------------------------------

document.getElementById("equals").onclick = function() {
    
    for (var n in $number){
        if ($number[n]!="" && operator>0){
        numberInt.push(parseFloat($number[n]));
        }
    }
    
    for (var m=0; m<$ign.length; m++){
        if ($ign[m]==="plus"){
            if(m===0){
                rez = numberInt[m] + numberInt[m+1];
            }
            else {
                rez += numberInt[m+1];
            }
        }
        else if ($ign[m]==="minus"){
            if(m===0){
                rez = numberInt[m] - numberInt[m+1];
            }
            else {
                rez -= numberInt[m+1];
            }
        }
        else if ($ign[m]==="multi"){
            if(m===0){
                rez = numberInt[m] * numberInt[m+1];
            }
            else {
                rez *= numberInt[m+1];
            }
        }
        else if ($ign[m]==="divide"){
            if (numberInt[m+1]===0){
                rez = false;
            }
            else {
                if(m===0){
                    rez = numberInt[m] / numberInt[m+1];
                }
                else {
                    rez /= numberInt[m+1];
                }
            }
        }
    }
    
    var result = function(r) {
        if (!r){
            var zeroDiv = "No divison by zero.";
            return zeroDiv;
        }
        else if (Number.isInteger(r)){
            return r;
        }
        else {
            return r.toFixed(2);
        }
    }
    
    if (onButton.checked == true){
        document.getElementById("asided").innerHTML = expression + $number[$number.length-1] + " = " + result(rez);
        window.localStorage.setItem("lastCalc", document.getElementById("asided").innerHTML);
        window.localStorage.setItem("button", "ON");
    }
    else if (offButton.checked == true) {
        document.getElementById("asided").innerHTML = "";
        window.localStorage.setItem("lastCalc", document.getElementById("asided").innerHTML);
        window.localStorage.setItem("button", "OFF");
    }
    
    document.getElementById("rez").innerHTML = result(rez);
    expression = "";
    document.getElementById("express").innerHTML = expression;
    operator = 0;
    
    
    for (var i = 0; i <= numberInt.length+1; i++) {
        numberInt.pop();
        $number.pop();
        $ign.pop();
    }
    
    if (rez!="") {
        $number.push(rez);
    }
    rez = "";
}

document.getElementById("asided").innerHTML = window.localStorage.getItem("lastCalc");

if (window.localStorage.getItem("button") === "ON"){
    onButton.checked = true;
    offButton.checked = false;
}
else {
    onButton.checked = false;
    offButton.checked = true;
}

function clickOff(){
    if (offButton.checked = true){
        document.getElementById("asided").innerHTML = "";
        window.localStorage.setItem("lastCalc", document.getElementById("asided").innerHTML);
        window.localStorage.setItem("button", "OFF");
    }
}
offButton.addEventListener("click", clickOff);

function clickOn(){
    if (onButton.checked = true){
        
        window.localStorage.setItem("lastCalc", document.getElementById("asided").innerHTML);
        window.localStorage.setItem("button", "ON");
    }
}
offButton.addEventListener("click", clickOff);
onButton.addEventListener("click", clickOn);
