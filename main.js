"use strict";
exports.__esModule = true;
var message = 'First typeScript app - Zombie app';
var br = 10;
console.log(message + (" " + br));
var list = [1, 2, 3];
for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
}
var list2 = [2, 'text'];
console.log(list2[1]);
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var myVar = "assert test";
console.log(myVar.length);
var Mult;
//-------------------------------------------------
function add(number1, number2) {
    if (!number2)
        return number1;
    return number1 + number2;
}
function add2(number1, number2) {
    if (number1 === void 0) { number1 = 0; }
    if (number2 === void 0) { number2 = 0; }
    return number1 + number2;
}
var x = 5;
var y = 5;
(function mult(number1, number2) {
    if (number1 === void 0) { number1 = 1; }
    if (number2 === void 0) { number2 = 1; }
    var x = 3;
    x = x * y;
})();
function greetPerson(p) {
    console.log(p.firstname);
}
console.log("zatvorenje: " + x);
console.log(add(3, 4));
console.log(add(3));
console.log(add2(3, 4));
console.log(add2(3));
