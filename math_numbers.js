const score=400
const balance =  new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber =  2300.8966
console.log(otherNumber.toPrecision(3));
const hundreds = 100000000
//console.log( hundreds.toLocaleString('en-IN'));
  

/////////////......... Maths ..............//////////////////////
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random());  // values under 0-1
console.log((Math.random() *10) +1); // values under  1-10


const min=10;
const max=20;

console.log(Math.floor(Math.random() * (max - min + 1))+min);  // random values under min and max
