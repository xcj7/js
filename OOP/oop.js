function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn
    
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this;
}

const userOne = new User ("hitesh",12,true)
console.log(userOne)

//C:\Users\Tushar\Downloads\css practice\js\OOP\oop.js

//node Api\promises.js  
function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2 

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username,score){
    this.username = username

}

createUser.prototype.increment = function(){
    this.score++
}


createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`)
}


const chai = new createUser("chai",25)
const tea = new createUser("tea",250)

chai.printMe()