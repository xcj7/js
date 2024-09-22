class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`User name is ${this.username}`);
        
    }
}



class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password;

    }
addCourse(){
    console.log(`A new course was added by ${this.username}`);
}

}


const chai = new Teacher("tushar","chai@teacher.com","123")
console.log(chai.addCourse())

const masalaChai = new User("masalaChai")
console.log(masalaChai.logMe())


console.log(chai instanceof Teacher);
console.log(chai instanceof User);


//////////////////////#############################################///////////////////////////////////
//node OOP\inheritance.js