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
///////////////////////////////////////////////////
const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}

console.log(regularUser.fullname?.userfullname.firstname)

///////////////////////////////////

const obj1 ={1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

//const obj3 = {obj1,obj2}
const obj3=Object.assign({},obj1,obj2,obj4)
console.log(obj3);

//////////// spread operator

const obj5={...obj1,...obj2}
console.log(obj5)

const users= [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"h@gmail.com"
    },
    {
        id:3,
        email:"h@gmail.com"
    }
]

console.log(users[0].id)


//////////////////

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));//[ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser));// [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]


console.log(tinderUser.hasOwnProperty('isLogged'))  // is the object has that property ?
////////////////////


///////////////      object destructor   ///////////////
const Course = {
    coursename:"js in bangla",
    price: "999",
    courseInstructor:"hitesh"

} 

const {courseInstructor}=Course
console.log(courseInstructor);


const {price: p}=Course
console.log(p);

/* react       destructor
const navbar = ({company}) => {

}

navbar{company = "hitesh"}

*/

/*
/////.............   json   ...............//////////
{
    "name":"tushar",
    "country":"Bangladesh",
    "address":"Alipur,Natore"
}

////// 

[
    {},
    {},
    {}
]

*/