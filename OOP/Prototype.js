let myName = "hitesh  "



// C:\Users\Tushar\Downloads\css practice\js\OOP\Prototype.js

console.log(myName.trim().length);



let myHero = ["abc","cde"]

let heropower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }

}


Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

heropower.hitesh()

myHero.hitesh()


///////////////////////////////////////////////////////
Array.prototype.heyhitesh=function()
{
    console.log(`Hitesh says hello`);
}


myHero.heyhitesh()

/////////////////////////////////////////////

//inheritance
const User={
    name :"chai",
    email:"chai@google.com"
}
const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User

//mordern syntax  for __proto__
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiAurCode"
String.prototype.trueLength = function(){

    console.log(`${this}  has length after triming ${this.trim().length}`)
}

anotherUsername.trueLength()
"hitesh  ".trueLength()
"iceTea".trueLength()
