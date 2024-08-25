"use strict"; // treat all js code as newer version


// In Terminal  for executting the code Type :->  node 02_dataType.js    



// alert('hellow ')   // we are using note.js , not browser

let name ="Tushar"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
//bigint
//string=>""
//boolean=>true/false
//null=>standalone value
//undefined =>
//symbol=>unique
//object

console.log(typeof "tushar")

console.log(typeof null)

console.log(typeof undefined)

const bigNumber = 111111111111111111111111111111111222222222223n
/*
Primitive :
7 types : String,Number,Boolean,null,undefined,Symbol,BigInt


Reference(Non Primitive):
array,objects,funtions
*/   


const heros = ["shaktiman","naagraj","doga"];
let myObj={
    name:"Tushar",
    id:"H2773"
}

let myname='tushar'
let anothername='mehedi'
anothername='hassan'

console.log(myname);
console.log(anothername);


let user ={
    email:"xcj@gmail.com",
    age:12

}

let usertwo=user
usertwo.email="mehedi@gmail.com"

console.log(user.email);
console.log(usertwo.email);



// string 
const nameone ="tushar"
const nametwo="hassan"

console.log(`Hellow myname is ${nameone} and my friend name ${nametwo}`);

const gameName = new String('pu_pu123456789');
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString =gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(1,6)
console.log(anotherString);


const newStringOne = "   hitesh   "
console.log(newStringOne.trim())     // white space deleting :-> trim


const url = "https://hitesh.com/h_itesh%20choudhary"
console.log(url.replace('%20','_'))

console.log(url.split('_'));