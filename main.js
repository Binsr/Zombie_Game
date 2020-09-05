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
