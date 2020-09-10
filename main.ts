export{}
let message: string= 'First typeScript app - Zombie app';
let br: number= 10;


console.log(message + ` ${br}`);

let list: Array<Number> = [1,2,3];

for(let i= 0; i < list.length; i++){
    console.log(list[i]);
}

let list2: [number, string] = [2,'text'];

console.log(list2[1]);

enum Color {Red= 5, Green, Blue};

let c: Color = Color.Green;

console.log(c);

let myVar: unknown = "assert test";

console.log((myVar as string).length);

let Mult: boolean | string;

//-------------------------------------------------

function add(number1: number, number2?: number): number{
    if(!number2)
        return number1;
    return number1 + number2;
}


function add2(number1: number= 0, number2: number= 0): number{
    return number1 + number2;
}

let x= 5; let y= 5;

(function mult(number1: number= 1, number2: number= 1): void{
  let x= 3;
  x= x*y;
})();


console.log("zatvorenje: " + x);

console.log(add(3,4));
console.log(add(3));

console.log(add2(3,4));
console.log(add2(3));