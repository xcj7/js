class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value; //to avoid race condition in get and constructor
                             //  _ is used 
    }

    get password(){
        return `${this._password}hitesh`
    }
    set password(value){
        this._password = value
    }


}

const hitesh = new User("hitesh@hitesh.ai","Test")
console.log(hitesh.password);
console.log(hitesh.email);
