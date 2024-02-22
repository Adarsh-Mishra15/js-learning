const { AsyncLocalStorage } = require("async_hooks")

class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }

    get password() {
        return this._password.toUpperCase()
    }

    set password(value) {
        // this.password = value // Maximum call stack size exceeded 
        this._password = value
    }

}

const hitesh = new User("hitesh@gmail.com", "abc")
console.log(hitesh.password);
console.log(hitesh.email);