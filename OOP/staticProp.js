//C:\Users\Tushar\Downloads\css practice\js\OOP\staticProp.js

class User{
    constructor(username){
        this.username=username
    }
logMe(){
    console.log(`Username:${this.username}`)
}

static createId(){
    return `123`
}
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())     // can not be accessed because it is static


class Teacher extends User{
    constructor(username,emai){
        super(username);
        this.email=emai
    }
}

const iphone = new Teacher("iphone","i@phone.com")
console.log(iphone.logMe())
// console.log(iphone.createId())  // can not be accessed because it is static
