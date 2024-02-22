// this keyword and arrow function

const user = {
    username: "Adarsh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`); // this refers current context
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

//browser object is window object and node object is empty object

// console.log(this);

// function chai() {
//     let username = "Adarsh"
//     conaole.log(this) // many attributes
//     console.log(this.username); // undefined
// }

// chai()


// Arrow function
const chai = () => {
    let username = "Adarsh"
    console.log(this); //empty
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }



// Implicit returns

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({ username: "Adarsh" }); // object return

console.log(addTwo(3, 4))