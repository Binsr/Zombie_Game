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