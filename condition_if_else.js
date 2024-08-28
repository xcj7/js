let balance = 500;

if(balance < 500){
    console.log("less than 500");
}else if (balance < 750 ){
    console.log("less than 750")
}else if (balance<900){
    console.log("less than 900")
}else{
    console.log("greater than 900")
}


/////////////////
let userLoggedIn = true
let debitCard = true
if (userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}


if (userLoggedIn ||  2==2){
    console.log("Allow to buy course");
}
////////////////////////

const month = "jan"
switch (month) {
    case "jan":
        console.log("jan");
        break;
    case "Feb":
        console.log("Feb");
        break;
    case "march":
        console.log("march");
        break;

    default:
        console.log("April");
        break;
}

/////////////////////////////

const userEmail=[]
if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

/////////////////


/*
falsy values

false,0,-0,BigInt 0n,"",null,undefined,NAN


truthy values
"0",'false'," ",[],{},function(){},

*/


//////////////////
if(userEmail.length===0){
    console.log("Array is empty");
}

const emptyobj = {}
if (Object.keys(emptyobj).length === 0){
    console.log("Object is empty");
}


//////////////
if ((false == 0 ) && (false =='') && (0 ==''))
    {
        console.log("These condithions are all true .")
    } 
////////////////

//Nullish Coalescing Operator (??)  : null undefined

let val1;
val1=5 ?? 10
console.log(val1)
val1= null ?? 10
val1=undefined ?? 15
val1 = null ?? 101 ?? 20
console.log(val1)

// //////////////////////Terniary Operator 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");



