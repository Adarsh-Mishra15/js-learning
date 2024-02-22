// ES6

// class User {
//     constructor(name, email, password) {
//         this.username = name;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()} .`
//     }
// }

const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//behind the scene: another way to do the same

function User(name, email, password) {
    this.username = name
    this.email = email
    this.password = password

}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

const tea = new User("tea", "tea@google.com", "145")

console.log(tea.encryptPassword())