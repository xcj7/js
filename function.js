function sayMyName(){
console.log("T")
console.log("U")
console.log("S")
console.log("H")
console.log("A")
console.log("R")

}

sayMyName()
///////////////////////
function addTwoNumbers(number1,number2){
    let result = number1+number2
    // console.log(number1+number2);
    return result ;
}

const result = addTwoNumbers(2,8)
console.log("Result: ",result);
//////////////////////////
function loginUserMessage(username="")
{
    if(username===undefined){
        console.log("Please enter a username")
        return

    }
    return`${username} just logged in .`
}

console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage())
/////////////////////////////
////                      ... rest operator
function calculateCartPrice(...num1)
{
    return num1;
}

console.log(calculateCartPrice(200,400,500))
////////////////////////////////////////////////////////
const user={
    username:"hitesh",
    price:199
}

function handleObject(anyobject)
{
    console.log(
        `Username is ${anyobject.username} 
        and price is ${anyobject.price}`
    )
}

handleObject({
    username : "sam",
    price : 399
})

/////////////////////
const myNewArray = [200,400,100,600]

function returnSecondValue(getArray)
{
    return getArray[3]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,500,1000]))


