class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username) // automatically call the constructor of parent class
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course is added by ${this.username}`);

    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123") //Teacher constructor cannot be invoked without new

chai.addCourse()

const masalaChai = new User("MasalaChai")

masalaChai.logMe()
chai.logMe()

console.log(chai === masalaChai);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);