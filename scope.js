// let a = 10
// const b = 20
// var c = 30

if(true){
    let a = 10
const b = 20
var c = 30
d=40

}

// console.log(a)
// console.log(b)
console.log(c)
console.log(d)


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


function one()
{
    const username = "tushar"
    function two()
    {
        const website="youtube"
        console.log(username);

    }
    // console.log(website)
    two()

}

one()


if(true){
    const username='Hitesh'
    if(username==="Hitesh")
    {
        const website = " Youtube"
        console.log(username+website);
    }
   // console.log(website);
}

//console.log(username)

//////////////////////////////

function addone(num)
{
    return num+1
}

console.log(addone(5))


const addTwo = function(num)
{
    return num+2

}

console.log(addTwo(5))

////////////////////////////////
//...........arrow function ..........//
const user ={
    username:"hitesh",
    price : 999,

    welcomeMessage:function()
    {
        console.log(`${this.username} , welcome to website`)
        console.log(this);
    }
}


user.welcomeMessage()
user.username="sam"
user.welcomeMessage()


console.log(this);


///////////////////////////////

// function chai(){
// let username="hitesh"
//     console.log(this.username);
// }
// chai()


const chai = () =>{
    let username="hitesh"
        console.log(this.username);
    }
    chai()
    
const addTwo1 = (num1,num2) =>{
    console.log(num1)
    console.log(num2)
    return num1 + num2;
}

console.log(`addTwo1 ${addTwo1(3,4)}`);
///////////////////

const addTwo4 = (num1,num2) =>  num1+num2 

const addTwo3 = (num1,num2) => ( num1+num2 )

const addTwo5 = (num1,num2)=>({username:"hitesh"+" hitesh"})
console.log(addTwo5("hitesh","hitesh"))
////////////////////////////////////////////
//const Array = [2,5,3,7,8]
// myNewArray.forEach(function () {})
// myNewArray.forEach(() => {})


////////////////////////////////////////////
//...........Immediately Incoked Funtion Expressions(IIFE)............//
// (()=>{
//     console.log(`DB CONNECTED`);
//     return;
// })()
// chai()
