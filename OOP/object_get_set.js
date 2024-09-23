//node OOP\object_get_set.js
const User = {
    _email:'h@hc.com',    // _ means private property
    _password:"abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);

