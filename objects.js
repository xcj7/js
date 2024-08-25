//singleton


//Object.create

//object literals

//let mySym
const mySym=Symbol("key1")
const JsUser={
    name:"Hitesh",
    age:18,
    "full name":"Hitesh Choudhary",
    location:"jaipurhat",
    [mySym]:"mykey1",
    email:"abc@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
JsUser.email="hitesh@chatgpt.com"
//Object.freeze(JsUser); // after freazing object can not be changed
JsUser.email="hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function()
{
    console.log(`Hello js User ${this["full name"]}`);
}


console.log(JsUser.greeting())

console.log('///////////////////////////////////')

//const tinderUser = new Object()    // singleton object (when there is a constructor)
const tinderUser={}    //Non Singleton object

tinderUser.id = "123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);